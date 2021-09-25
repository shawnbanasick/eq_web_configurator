import appState from "../../GlobalState/appState";

const showSectionDefaults = (section) => {
  console.log(section);
  if (section === "footerImage") {
    // multi-modals ref image
    appState.imageToShow = section;
    appState["triggerImageModal"] = true;
  }
  if (section === "landingImage") {
    // multi-modals ref image
    console.log("Clicked");
    appState.imageToShow = section;
    appState["triggerImageModal"] = true;
  }
};

export default showSectionDefaults;
