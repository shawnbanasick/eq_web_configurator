import appState from "../../GlobalState/appState";

const clearSection = (array) => {
  array.forEach((item) => {
    localStorage.setItem(item, "");
    appState[item] = "";
  });
};

const showSectionDefaults = (section) => {
  let selectorArray = [];

  if (section === "footerClear") {
    selectorArray = [
      "langBtnHelp",
      "langFooterTextSize",
      "langFooterCardHeight",
      "langBtnNext",
      "langStepCompleted",
      "langLoginFirst",
    ];

    clearSection(selectorArray);
  }

  if (section === "landingClear") {
    selectorArray = [
      "langLandingHead",
      "langWelcomeMessage",
      "langLandingHelpModalHead",
      "langLandingHelpModalText",
    ];

    clearSection(selectorArray);
  }

  if (section === "accessClear") {
    selectorArray = [
      "langLoginWelcomeText",
      "langLoginHeaderText",
      "langLoginPartIdText",
      "langAccessInputText",
      "langPartIdWarning",
      "langAccessCodeWarning",
      "loginSubmitButtonText",
    ];

    clearSection(selectorArray);
  }

  if (section === "localClear") {
    selectorArray = [
      "langLocalHeader",
      "langPartIdText",
      "langUsercodeText",
      "langLocalStartButtonText",
      "langLocalDeleteButtonText",
      "langLocalDownloadButtonText",
      "langStoredQsortsHeaderText",
      "langLocalDeleteModalHead",
      "langLocalDeleteModalText",
      "langLocalParticipantsText",
      "langLocalSaveBeforeDeleteModalHeader",
      "langLocalSaveBeforeDeleteModalText",
    ];

    clearSection(selectorArray);
  }

  if (section === "presortClear") {
    selectorArray = [
      "langTitleBarText",
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

    clearSection(selectorArray);
  }

  if (section === "sortClear") {
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

    clearSection(selectorArray);
  }
  if (section === "postsortClear") {
    selectorArray = [
      "langPostsortHeader",
      "langPostsortInstructions",
      "langPlaceholder",
      "langPostsortAgreement",
      "langPostsortDisagreement",
      "langPostsortModalHead",
      "langPostsortModalText",
    ];

    clearSection(selectorArray);
  }
  if (section === "surveyClear") {
    selectorArray = [
      "langSurveyHeader",
      "langSurveyModalHead",
      "langSurveyModalText",
      "langSurveyPreventNavModalHead",
      "langSurveyPreventNavModalText",
    ];

    clearSection(selectorArray);
  }
  if (section === "submitClear") {
    selectorArray = [
      "langBtnTransfer",
      "langTransferHead",
      "langTransferTextAbove",
      "langTransferTextBelow",
      "langTransferOkModalHeader",
      "langTransferOkModalText",
      "langTransferFailModalHeader",
      "langTransferFailModalText",
      "langFallbackMessage",
      "langBtnDownload",
      "langGoodbyeMessage",
    ];

    clearSection(selectorArray);
  }
  if (section === "localSubmitClear") {
    selectorArray = [
      "langLocalSaveDataButton",
      "langLocalSubmitSuccessModalHeader",
      "langLocalSubmitSuccessModalText",
      "langReturnToLocalPanelButtonText",
    ];

    clearSection(selectorArray);
  }
  if (section === "emailClear") {
    selectorArray = [
      "langEmailSubmitBtn",
      "langEmailCopyResultsBtn",
      "langEmaiCopyAddressBtn",
      "langCopySuccessMessage",
      "langCopyFailMessage",
      "langDefaultEmailFailModalText",
      "langEmailBodyMessage",
    ];

    clearSection(selectorArray);
  }
  if (section === "linkingClear") {
    selectorArray = ["langLinkingFallbackMessage", "langLinkingBtnText"];

    clearSection(selectorArray);
  }
};

export default showSectionDefaults;
