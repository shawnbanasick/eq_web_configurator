import appState from "../GlobalState/appState";
const fs = require("fs");
const { dialog } = require("electron").remote;
const { remote } = require("electron");
const mainWindow = remote.getCurrentWindow();

const exportToXml = async (fileName, data, filetype) => {
  let userSelectedFilePath = appState.userSelectedFilePath;
  if (
    userSelectedFilePath.length < 3 ||
    userSelectedFilePath.length === undefined
  ) {
    userSelectedFilePath = `*/${fileName}`;
  } else {
    userSelectedFilePath = `${userSelectedFilePath}/${fileName}`;
  }

  const files = await dialog.showSaveDialog(mainWindow, {
    title: "Save file as",
    defaultPath: userSelectedFilePath,
    filters: [
      {
        name: filetype,
        extensions: [filetype],
      },
    ],
  });

  // get and save user selected filepath
  const filePath = files.filePath;
  const defaultFilePath = filePath.slice(0, -fileName.length);
  appState.userSelectedFilePath = defaultFilePath;

  // catch dialog box cancel error
  if (filePath) {
    fs.writeFile(filePath, data, (err) => {
      if (err === undefined || err === null) {
        dialog.showMessageBoxSync(mainWindow, {
          message: `The file has been saved to ${filePath}.`,
          buttons: ["OK"],
        });
      } else {
        console.log(err);
        dialog.showErrorBox("File Save Error", err.message);
      }
    });
  }
};

export default exportToXml;
