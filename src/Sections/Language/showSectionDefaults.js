import appState from "../../GlobalState/appState";
import defObject from "./textareaDefaultObject";

const showSectionDefaults = (section) => {
  let defObj = defObject();
  let selectorArray = [];

  const setDefaults = (array) => {
    array.forEach((item) => {
      localStorage.setItem(item, defObj[item]);
      appState[item] = defObj[item];
    });
  };

  if (section === "footerDef") {
    selectorArray = [
      "langBtnHelp",
      "langFooterTextSize",
      "langFooterCardHeight",
      "langBtnNext",
    ];

    setDefaults(selectorArray);
  }

  if (section === "landingDef") {
    selectorArray = [
      "langLandingHead",
      "langWelcomeMessage",
      "langLandingHelpModalHead",
      "langLandingHelpModalText",
    ];

    setDefaults(selectorArray);
  }

  if (section === "accessDef") {
    selectorArray = [
      "langLoginWelcomeText",
      "langLoginHeaderText",
      "langLoginPartIdText",
      "langAccessInputText",
      "langPartIdWarning",
      "langAccessCodeWarning",
      "loginSubmitButtonText",
    ];

    setDefaults(selectorArray);
  }

  if (section === "presortDef") {
    selectorArray = [
      "langtitleBarText",
      "langPresortStatements",
      "langPresortAgreement",
      "langPresortNeutral",
      "langPresortDisagreement",
      "langPresortModalHead",
      "langPresortModalText",
      "langPresortPreventNavModalHead",
      "langPresortPreventNavModalText",
      "langPresortFinishedModalHead",
      "langPresortFinishedModalText",
    ];

    setDefaults(selectorArray);
  }

  if (section === "sortDef") {
    selectorArray = [
      "langSortHelpModalHead",
      "langSortHelpModalText",
      "langSortAgreement",
      "langSortDisagreement",
      "langCondOfInst",
      "langSortingCompleteModalHead",
      "langSortingCompleteModalText",
      "langSortPreventNavModalHead",
      "langSortPreventNavModalText",
      "langSortOverloadedColumnModalHead",
      "langSortOverloadedColumnModalText",
    ];

    setDefaults(selectorArray);
  }
};

export default showSectionDefaults;
