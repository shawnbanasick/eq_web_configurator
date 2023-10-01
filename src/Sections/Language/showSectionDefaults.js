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
      "langStepCompleted",
      "langLoginFirst",
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

  if (section === "localDef") {
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

    setDefaults(selectorArray);
  }

  if (section === "presortDef") {
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

  if (section === "postsortDef") {
    selectorArray = [
      "langPostsortHeader",
      "langPostsortInstructions",
      "langPlaceholder",
      "langPostsortAgreement",
      "langPostsortDisagreement",
      "langPostsortModalHead",
      "langPostsortModalText",
      "langPostsortPreventNavModalHead",
      "langPostsortPreventNavModalText",
      "langPostsortBackButton",
    ];

    setDefaults(selectorArray);
  }
  if (section === "surveyDef") {
    selectorArray = [
      "langSurveyHeader",
      "langSurveyModalHead",
      "langSurveyModalText",
      "langSurveyPreventNavModalHead",
      "langSurveyPreventNavModalText",
    ];

    setDefaults(selectorArray);
  }
  if (section === "submitDef") {
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

    setDefaults(selectorArray);
  }
  if (section === "localSubmitDef") {
    selectorArray = [
      "langLocalSaveDataButton",
      "langLocalSubmitSuccessModalHeader",
      "langLocalSubmitSuccessModalText",
      "langReturnToLocalPanelButtonText",
    ];

    setDefaults(selectorArray);
  }
  if (section === "emailDef") {
    selectorArray = [
      "langEmailSubmitBtn",
      "langEmailCopyResultsBtn",
      "langEmaiCopyAddressBtn",
      "langCopySuccessMessage",
      "langCopyFailMessage",
      "langDefaultEmailFailModalText",
      "langEmailBodyMessage",
    ];

    setDefaults(selectorArray);
  }
  if (section === "linkingDef") {
    selectorArray = ["langLinkingFallbackMessage", "langLinkingBtnText"];

    setDefaults(selectorArray);
  }
};

export default showSectionDefaults;
