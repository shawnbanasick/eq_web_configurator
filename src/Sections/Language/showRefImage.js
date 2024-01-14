import appState from "../../GlobalState/appState";

const showSectionDefaults = (section) => {
  console.log(section);
  appState.imageToShow = section;
  appState["triggerImageModal"] = true;
};

export default showSectionDefaults;
