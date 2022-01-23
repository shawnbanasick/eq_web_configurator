import appState from "../../GlobalState/appState";

const showSectionDefaults = (section) => {
  appState.imageToShow = section;
  appState["triggerImageModal"] = true;
};

export default showSectionDefaults;
