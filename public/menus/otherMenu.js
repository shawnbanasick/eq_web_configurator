const config = require("../configs/app.config");
const openAboutWindow = require("about-window").default;
const join = require("path").join;

const isMac = process.platform === "darwin";

// console.log(`${join(__dirname)}`);

module.exports = (app, mainWindow, i18n) => {
  let menu = [
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              {
                label: i18n.t("About EQ Web Configurator"),
                role: "about",
                click: function (item, focusedWindow, app, mainWindow) {
                  if (focusedWindow) {
                    openAboutWindow({
                      icon_path: join(__dirname, "../icon.png"),
                      copyright: "Copyright (c) 2022 Shawn Banasick",
                      show_close_button: "Close",
                      package_json_dir: join(__dirname, "../../"),
                      use_inner_html: true,
                      app,
                      mainWindow,
                    });
                  }
                },
              },
              {
                type: "separator",
              },
              {
                role: "services",
              },
              { type: "separator" },
              {
                label: i18n.t("Hide App"),
                role: "hide",
              },
              {
                role: "hideothers",
              },
              {
                role: "unhide",
              },
              { type: "separator" },
              {
                label: i18n.t("Quit"),
                role: "quit",
              },
            ],
          },
        ]
      : []),
    // { role: 'fileMenu' }
    {
      label: i18n.t("Home"),
      submenu: [
        isMac ? { role: "close" } : { label: i18n.t("Quit"), role: "quit" },
      ],
    },
    // { role: 'editMenu' }
    {
      label: i18n.t("Edit"),
      submenu: [
        { label: i18n.t("Undo"), role: "undo" },
        { label: i18n.t("Redo"), role: "redo" },
        { type: "separator" },
        {
          label: i18n.t("Cut"),
          role: "cut",
        },
        {
          label: i18n.t("Copy"),
          role: "copy",
        },
        {
          label: i18n.t("Paste"),
          role: "paste",
        },
        { type: "separator" },
        { label: i18n.t("Delete"), role: "delete" },
        { label: i18n.t("Select All"), role: "selectAll" },
      ],
    },
    // { role: 'viewMenu' }
    {
      label: i18n.t("View"),
      submenu: [
        { label: i18n.t("Force Reload"), role: "forcereload" },
        { label: i18n.t("Toggle Developer Tools"), role: "toggledevtools" },
        { type: "separator" },
        { label: i18n.t("Reset Zoom"), role: "resetzoom" },
        { label: i18n.t("Zoom In"), role: "zoomin" },
        { label: i18n.t("Zoom Out"), role: "zoomout" },
        { type: "separator" },
        { label: i18n.t("Toggle Full Screen"), role: "togglefullscreen" },
      ],
    },
    // { role: 'windowMenu' }
    {
      label: i18n.t("Window"),
      submenu: [
        { label: i18n.t("Minimize"), role: "minimize" },
        { label: i18n.t("Close"), role: "close" },
      ],
    },
    {
      label: i18n.t("Help"),
      submenu: [
        {
          label: i18n.t("About EQ Web Configurator"),
          click: function (item, focusedWindow, app, mainWindow) {
            if (focusedWindow) {
              openAboutWindow({
                icon_path: join(__dirname, "../icon.png"),
                copyright: "Copyright (c) 2021 Shawn Banasick",
                show_close_button: "Close",
                package_json_dir: join(__dirname, "../../"),
                use_inner_html: true,
                app,
                mainWindow,
              });
            }
          },
        },
      ],
    },
  ];

  const languageMenu = config.languages.map((languageCode) => {
    return {
      label: i18n.t(languageCode),
      type: "radio",
      checked: i18n.language === languageCode,
      click: () => {
        i18n.changeLanguage(languageCode, (err, t) => {
          if (err) return console.log("something went wrong loading", err);
          // t('key'); // -> same as i18next.t
        });
        console.log("called from other menu");
      },
    };
  });

  // menu.push({
  //   label: i18n.t("Language"),
  //   submenu: languageMenu
  // });

  return menu;
};
