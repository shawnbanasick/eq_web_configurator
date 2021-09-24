import appState from "../../GlobalState/appState";

const showSectionDefaults = (section) => {
  if (section === "multiModalsClear") {
    // step completed message
    localStorage.setItem("langStepCompleted", "");
    appState.langStepCompleted = "";
  }
};

export default showSectionDefaults;
