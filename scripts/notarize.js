require("dotenv").config();
const { notarize } = require("electron-notarize");

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;
  if (electronPlatformName !== "darwin") {
    return;
  }

  const appName = context.packager.appInfo.productFilename;

  console.log(process.env.APPLEID);

  return await notarize({
    tool: "notarytool",
    appBundleId: "com.banasick.configurator",
    appPath: `${appOutDir}/${appName}.app`,
    teamId: process.env.TEAMID,
    appleId: process.env.APPLEID,
    appleIdPassword: process.env.APPLEIDPASS,
  });
};
