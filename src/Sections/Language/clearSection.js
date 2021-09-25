import appState from "../../GlobalState/appState";

const showSectionDefaults = (section) => {
  if (section === "footerClear") {
    // step completed message
    localStorage.setItem("langBtnHelp", "");
    appState.langBtnHelp = "";

    localStorage.setItem("langFooterTextSize", "");
    appState.langFooterTextSize = "";

    localStorage.setItem("langFooterCardHeight", "");
    appState.langFooterCardHeight = "";

    localStorage.setItem("langBtnNext", "");
    appState.langBtnNext = "";
  }
  if (section === "landingClear") {
    localStorage.setItem("langLandingHead", "");
    appState.langLandingHead = "";

    localStorage.setItem("langWelcomeMessage", "");
    appState.langWelcomeMessage = "";
  }
};

export default showSectionDefaults;
