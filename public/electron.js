const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const dialog = require("electron").dialog;
const path = require("path");
const isDev = require("electron-is-dev");
const appConfig = require("electron-settings");
const config = require("./configs/app.config");
const i18n = require("i18next");
const i18nextBackend = require("i18next-node-fs-backend");
const menuFactoryService = require("./services/menuFactory");
const contextMenu = require("electron-context-menu");
const ipcMain = electron.ipcMain;
const fs = require("fs");

const { fork } = require("child_process");
console.log(`${__dirname}`);

if (process.platform === "linux") app.commandLine.appendSwitch("no-sandbox");

// server reference
let ps;

let mainWindow;

contextMenu({
  prepend: (params, browserWindow) => [
    {
      role: "undo",
    },
    {
      role: "redo",
    },
    {
      role: "selectAll",
    },
    {
      role: "delete",
    },
  ],
});

function windowStateKeeper(windowName) {
  let window, windowState;
  function setBounds() {
    // Restore from appConfig
    if (appConfig.has(`windowState.${windowName}`)) {
      windowState = appConfig.get(`windowState.${windowName}`);
      return;
    }
    // Default
    windowState = {
      x: undefined,
      y: undefined,
      width: 1280,
      height: 720,
    };
  }
  function saveState() {
    if (!windowState.isMaximized) {
      windowState = window.getBounds();
    }
    windowState.isMaximized = window.isMaximized();
    appConfig.set(`windowState.${windowName}`, windowState);
  }
  function track(win) {
    window = win;
    ["resize", "move", "close"].forEach((event) => {
      win.on(event, saveState);
    });
  }
  setBounds();
  return {
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,
    isMaximized: windowState.isMaximized,
    track,
  };
}

function createWindow() {
  // Get window state
  const mainWindowStateKeeper = windowStateKeeper("main");
  // Creating the window
  const windowOptions = {
    title: "Main Window",
    x: mainWindowStateKeeper.x,
    y: mainWindowStateKeeper.y,
    width: mainWindowStateKeeper.width,
    height: mainWindowStateKeeper.height,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  };

  // let currentLanguage;
  // if (appConfig.has(`currentLanguage`)) {
  //   currentLanguage = appConfig.get(`currentLanguage`);
  // } else {
  //   currentLanguage = "en";
  // }

  // for testing - remove
  // currentLanguage = "en";

  let pathToTranslation;
  let pathToMissing;

  if (isDev) {
    pathToTranslation = path.join(
      __dirname,
      "../build/locales/{{lng}}/{{ns}}.json"
    );
    pathToMissing = path.join(
      __dirname,
      "../build/locales/{{lng}}/{{ns}}.missing.json"
    );
  } else {
    pathToTranslation = path.join(__dirname, "/locales/{{lng}}/{{ns}}.json");
    pathToMissing = path.join(
      __dirname,
      "/locales/{{lng}}/{{ns}}.missing.json"
    );
  }

  const i18nextOptions = {
    backend: {
      loadPath: pathToTranslation,
      addPath: pathToMissing,
      // jsonIndent to use when storing json files
      jsonIndent: 2,
    },
    interpolation: {
      escapeValue: false,
    },
    keySeparator: ">",
    nsSeparator: "|",
    saveMissing: true,
    fallbackLng: config.fallbackLng,
    whitelist: config.languages,
    react: {
      wait: false,
    },
  };

  i18n.use(i18nextBackend);

  // initialize if not already initialized
  if (!i18n.isInitialized) {
    i18n.init(i18nextOptions);
  }

  i18n.on("loaded", (loaded) => {
    let currentLanguage;
    if (appConfig.has(`currentLanguage`)) {
      currentLanguage = appConfig.get(`currentLanguage`);
    } else {
      currentLanguage = "en";
    }

    i18n.changeLanguage(currentLanguage);
    i18n.off("loaded");
  });

  i18n.on("languageChanged", (lng) => {
    menuFactoryService.buildMenu(app, mainWindow, i18n);
    mainWindow.webContents.send("language-changed", {
      language: lng,
      namespace: config.namespace,
      resource: i18n.getResourceBundle(lng, config.namespace),
    });

    appConfig.set(`currentLanguage`, lng);
  });

  mainWindow = new BrowserWindow(windowOptions);
  // Track window state
  mainWindowStateKeeper.track(mainWindow);

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  }

  // force weblinks to open in default browswer
  mainWindow.webContents.on("new-window", function (e, url) {
    e.preventDefault();
    require("electron").shell.openExternal(url);
  });

  // Emitted when the window is closed.
  // Dereference the window object, usually you would store windows
  // in an array if your app supports multi windows, this is the time
  // when you should delete the corresponding element.
  // mainWindow.on("closed", () => (mainWindow = null));

  // showMessageBox returns a promise
  mainWindow.on("close", function (e) {
    e.preventDefault();
    var choice = dialog.showMessageBox(mainWindow, {
      title: "Confirm Quit",
      type: "question",
      buttons: ["Yes", "No"],
      message: "Are you sure you want to quit?",
      cancelId: 2,
    });

    choice.then(function (result) {
      if (result.response === 0) {
        // kill server child process if already active
        if (ps !== undefined) {
          ps.kill();
        }
        mainWindow.destroy();
      }
    });
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
} // end of create mainWindow function

// IPC communications
ipcMain.on("get-file-path", (event, data) => {
  console.log(event);

  console.log("message received");
  console.log(JSON.stringify(data));
  // kill server child process if already active
  if (ps !== undefined) {
    ps.kill();
  }
  // fork new child process
  ps = fork(path.join(__dirname, `/server/server2.js`), ["hello"], {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  if (data !== undefined) {
    console.log("sending data");
    // start server with file location data
    ps.send(data);
  }
});

ipcMain.on("get-initial-translations", (event, arg) => {
  let currentLanguage;
  if (appConfig.has(`currentLanguage`)) {
    currentLanguage = appConfig.get(`currentLanguage`);
  } else {
    currentLanguage = "en";
  }

  i18n.loadLanguages(currentLanguage, (err, t) => {
    const initial = {
      currentLanguage: {
        translation: i18n.getResourceBundle(currentLanguage, config.namespace),
      },
    };
    event.returnValue = initial;
  });

  // todo - fix this ugly hack to get requested language to appear on re-load
  i18n.changeLanguage(currentLanguage);
});

// let updateVersion = "";
// let versionStoredInUserSettings = "";

app.on("ready", () => {
  createWindow();
});

menuFactoryService.buildMenu(app, mainWindow, i18n);

app.on("window-all-closed", () => {
  if (ps !== undefined) {
    ps.kill();
  }
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

function installExtensions() {
  if (process.env.NODE_ENV === "development") {
    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Install extensions
    /*   installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log("An error occurred: ", err)); */
  }
}
