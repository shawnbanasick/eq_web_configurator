import appState from "../../GlobalState/appState";

const showSectionDefaults = (section) => {
  if (section === "multiModalsImage") {
    // multi-modals ref image
    console.log("Clicked");
    appState.imageToShow = "testImage";
    appState["triggerImageModal"] = true;
  }
};

export default showSectionDefaults;
