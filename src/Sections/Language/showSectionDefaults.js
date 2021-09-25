import appState from "../../GlobalState/appState";
import defObject from "./textareaDefaultObject";

const showSectionDefaults = (section) => {
  let defObj = defObject();

  if (section === "footerDef") {
    // step completed message
    localStorage.setItem("langBtnHelp", "Help me!");
    appState.langBtnHelp = "Help me!";

    localStorage.setItem("langFooterTextSize", "Text Size");
    appState.langFooterTextSize = "Text Size";

    localStorage.setItem("langFooterCardHeight", "Card Height");
    appState.langFooterCardHeight = "Card Height";

    localStorage.setItem("langBtnNext", "Continue");
    appState.langBtnNext = "Continue";
  }

  if (section === "landingDef") {
    localStorage.setItem("langLandingHead", "University Research Project");
    appState.langLandingHead = "University Research Project";

    localStorage.setItem("langWelcomeMessage", defObj.langWelcomeMessage);
    appState.langWelcomeMessage = defObj.langWelcomeMessage;
  }
};

export default showSectionDefaults;
