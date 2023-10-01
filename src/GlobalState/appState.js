import { store } from "@risingstack/react-easy-state";

const appState = store({
  /*
  DEFAULT settings */
  userSelectedFilePath: "",
  displayMode: "beginner",

  /*
  DEFAULT page opening */
  // viewConfig: true,
  viewStart: true,

  showSurveytextImage: true,

  /*
  config.xml GENERAL settings */
  configTitle: "My_Q_project",
  configDatabaseOptionsInclude_Google_OptionsActive: true,
  configDatabaseOptionsGoogle_FreeActive: false,
  configDatabaseOptions: "Include_Google_Options",
  configSetupTargetfirebaseActive: true,
  configSetupTarget: "email",
  configEmailAddress: "",
  configEmailSubject: "EQ Web Sort Results",
  configLinkToSecondQsort: false,
  configLinkToSecondQsortfalseActive: true,
  configLinkToSecondQsortUrl: "",
  configShuffleCardstrueActive: true,
  configShuffleCards: true,
  configAccessanonymousActive: true,
  configHeaderBarColor: "#337ab7",
  configSteinApiUrl: "",
  configSortDirectionpositiveActive: true,

  /*
  config.xml ACCESS settings */
  configAccess: "anonymous",
  configLogInPassword: "demo",

  /*
  config.xml LOGO settings */
  configLogoHtml: "EQ_default.svg",

  /*
  config.xml FONT settings */
  defaultFontColor: "#2a2a2a",
  configSetDefaultFontSizePresort: false,
  configSetDefaultFontSizePresortfalseActive: true,

  configSetDefaultFontSizeSort: false,
  configSetDefaultFontSizeSortfalseActive: true,

  configDefaultFontSizePresort: 28,
  configDefaultFontSizeSort: 18,

  /*
  config.xml PRESORT settings */
  greenCardColor: "#ccffcc",
  yellowCardColor: "#e0e0e0",
  pinkCardColor: "#ffe0e0",

  /*
  config.xml SORT settings */
  configCondOfInstFontSize: 20,
  configAllowUnforcedSorts: false,
  configAllowUnforcedSortsfalseActive: true,
  configDisplayOverloadedColWarn: true,
  configDisplayOverloadedColWarntrueActive: true,
  configSetMinCardHeightfalseActive: true,
  configMinCardHeight: 50,
  configSortDirection: "positive",

  /*
  config.xml POSTSORT settings */
  configShowSecondPosColumn: false,
  configShowSecondPosColumnfalseActive: true,
  configShowSecondNegColumn: false,
  configShowSecondNegColumnfalseActive: true,
  configShowStep3trueActive: true,
  configShowStep3: "true",
  configShowBackButton: false,
  configShowBackButtonfalseActive: true,
  configPostsortCommentsRequired: false,
  configPostsortCommentsRequiredfalseActive: true,

  /*
  config.xml SURVEY settings */
  configShowStep4trueActive: true,
  configShowStep4: "true",
  configSurveyInfoBarColor: "goldenrod",

  configStep2CardHeight: 150,
  configStep2ConstantWidth: false,
  configStep2ConstantWidthfalseActive: true,
  configStep2CardWidth: 200,

  mapColColors: "Headers",
  mapColColorsHeadersActive: true,
  mapColorPalette: "",
  colColN6: "#E02424",
  colColN5: "#F05252",
  colColN4: "#F98080",
  colColN3: "#F8B4B4",
  colColN2: "#FBD5D5",
  colColN1: "#FDE8E8",
  colCol0: "#F3F4F6",
  colCol1: "#DEF7EC",
  colCol2: "#BCF0DA",
  colCol3: "#84E1BC",
  colCol4: "#31C48D",
  colCol5: "#0E9F6E",
  colCol6: "#057A55",
  colCol7: "#e0e0e0",
  colCol8: "#e0e0e0",
  colCol9: "#e0e0e0",
  colCol10: "#e0e0e0",
  colCol11: "#e0e0e0",
  colCol12: "#e0e0e0",
  colCol13: "#e0e0e0",

  displaySampleColorRange: false,

  stylesStatementNumberDisplayfalseActive: true,
  stylesStatementNumberDisplay: false,
  stylesStatementNumberSizesmallActive: true,
  stylesStatementNumberSize: "small",
  stylesStatementNumberOpacityfaintActive: true,
  stylesStatementNumberOpacity: "faint",

  stylesXsmallFontSize: 10,
  stylesSmallFontSize: 11,
  stylesMediumFontSize: 13,
  stylesLargeFontSize: 14,
  stylesXlargeFontSize: 16,
  stylesHdFontSize: 18,
  stylesIpadSmallFontSize: 10,
  stylesIpadLargeFontSize: 14,

  surveyQuestionType: "text",
  activeWindow: "viewStart",
  showSuccessMessage: false,
  showErrorMessage: false,

  surveyAnswerRequired: false,
  surveyAnswerRequiredtrueActive: false,
  surveyAnswerRequiredfalseActive: true,
  surveyQuestionLabel: "",
  surveyQuestionNote: "",
  surveyAnswerLenIsLimited: false,
  surveyAnswerLenIsLimitedtrueActive: false,
  surveyAnswerLenIsLimitedfalseActive: false,
  surveyAnswerLenMax: 1000,
  surveyAnswerLenMaxtrueActive: false,
  surveyAnswerLenMaxfalseActive: false,
  surveyAnswerRestricted: false,
  surveyAnswerRestrictedtrueActive: false,
  surveyAnswerRestrictedfalseActive: false,
  surveyQuestionScale: "",
  surveyQuestionOptions: "",
  surveyBackgroundDisplay: true,
  surveyBackgroundDisplaytrueActive: true,
  surveyBackgroundDisplayfalseActive: false,

  surveyQuestionsArray: [],

  triggerOptionsWarningModal: false,

  /*
  statements.xml settings */

  /*
  map.xml settings */
  statements: [],
  qSortPattern: [-2, -1, -1, 0, 0, 0, 1, 1, 2],
  qSortPatternObject: {},
  activeValueM6: 0,
  activeValueM5: 0,
  activeValueM4: 0,
  activeValueM3: 0,
  activeValueM2: 0,
  activeValueM1: 0,
  activeValue0: 0,
  activeValue1: 0,
  activeValue2: 0,
  activeValue3: 0,
  activeValue4: 0,
  activeValue5: 0,
  activeValue6: 0,
  activeValue7: 0,
  activeValue8: 0,
  activeValue9: 0,
  activeValue10: 0,
  activeValue11: 0,
  activeValue12: 0,
  activeValue13: 0,

  /*
  language.xml settings */
  /*
   ******** MULTIPLE  ****************** */
  langBtnHelp: "Help me!",
  langFooterTextSize: `Text Size`,
  langFooterCardHeight: `Card Height`,
  langBtnNext: "Continue",
  langStepCompleted: `You have completed this step. Please click on the <b> blue "Continue" button </b> at the bottom right-side of your screen to go to the next step.`,
  langLoginFirst: `Please complete the log-in process first.`,
  /*
   ******** LANDING  ****************** */
  langLandingHead: `University Research Project`,
  langWelcomeMessage: `<h2>EQ Web Sort Demo Project - iPad Use in the Classroom.</h2><br/><br><p>Thank you for helping with this research project</p>`,

  langAccessCodeText: `Access Code`,
  langAccessInputText: "Please enter the access code for this survey.",
  loginSubmitButtonText: `Submit`,
  langLoginPartIdText: `Please enter your name or participant ID`,
  langAccessCodeWarning: `Access code invalid`,
  langPartIdWarning: `Invalid name or ID`,
  langLoginHeaderText: `Sign In`,
  langLoginWelcomeText: `<center></center><h3>Welcome!</h3></center><br> Thank you for participating in this Q methodology research project. <br>Please <b>sign in</b> using the form below to begin the process. `,
  langLandingHelpModalHead: `Welcome!`,
  langLandingHelpModalText: `Thank you for participating in this University Research Project. Please sign in to begin the process. After you submit your participant ID and/or the project access code, the instructions for the survey will appear. Please read them carefully, then click the "<b>Continue</b>" button at the bottom right side of the screen to go to the next step.<br><br> <center><iframe width="640" height="360"
  src="https://www.youtube.com/embed/723gJhElR7Q">
  </iframe></center>`,

  /*
   ******** LOCAL DATA COLLECTION  ****************** */
  langLocalHeader: "Offline Q-sort Control Panel",
  langPartIdText: "Participant Name",
  langUsercodeText: "Usercode",
  langLocalStartButtonText: "Start Q-sort",
  langLocalDeleteButtonText: "Delete",
  langLocalDownloadButtonText: "Save Q-sort Data to Disk",
  langStoredQsortsHeaderText: "Stored Q-sorts",
  langLocalDeleteModalText:
    "This will delete the particpant Q-sort data that is currently stored in the browser. You would usually only do this when you are starting a new project.<br><br><b>CAUTION - Deleted data cannot be recovered.</b> <br><br> <center></center>",
  langLocalDeleteModalHead: "Delete Data Stored in Browser?",
  langLocalParticipantsText: "Participants",
  langLocalSaveDataButton: "Save Participant Data to Browser Memory",
  langLocalSubmitSuccessModalHeader: "Success",
  langLocalSubmitSuccessModalText:
    "Participant Q sort data have been succesfully saved to browser memory",
  langReturnToLocalPanelButtonText: "Return to Control Panel",
  langLocalSaveBeforeDeleteModalHeader: "Delete Disabled",
  langLocalSaveBeforeDeleteModalText:
    "Save Q sort Data to Disk before deleting.",

  /*
   ******** PRESORT  ****************** */
  langTitleBarText: `Preliminary Sorting`,
  langPresortAgreement: `Agree (3)`,
  langPresortStatements: `Statements`,
  langPresortNeutral: `No Strong Feelings (2)`,
  langPresortDisagreement: `Disagree (1)`,
  langPresortModalHead: `Step 1 of 4`,
  langPresortModalText: `Read the following statements carefully and split them up into three piles: a pile for statements you tend to disagree with, a pile for cards you tend to agree with, and a pile for the rest. Changes can be made later.<br><br>If you want to read this instruction a second time, click the help-button at the bottom left corner.`,
  langPresortPreventNavModalHead: `Navigation Disabled`,
  langPresortPreventNavModalText: `Please finish the preliminary sorting before going to the next step.`,
  langPresortFinishedModalHead: `Preliminary Sorting Complete`,
  langPresortFinishedModalText: `You have completed this step. Please click the "Continue" button in the bottom right side of the page to go to the next step.`,
  /*
   ******** SORT  ****************** */
  langSortHelpModalHead: `Step 2 of 4`,
  langSortHelpModalText: `In this step, please sort the statements in a grid pattern. Statements you most agree with should be placed on the far right side of the grid, and statements which you most disagree with should be placed on the far left side. Please watch the video for more information on how to sort the cards in this step.`,
  langSortAgreement: `Agree`,
  langSortDisagreement: `Disagree`,
  langCondOfInst: `Sort the cards according to your experience with the iPads this semester`,
  langSortingCompleteModalHead: `Sorting Complete`,
  langSortingCompleteModalText: `You have completed the initial sorting. Please take a moment to confirm your placement of the cards.<br><br>When you are satisfied with their placement, please click on the <b>blue "Continue" button</b> at the bottom right-side of your screen to go to the next step.`,
  langSortPreventNavModalHead: `Navigation Disabled`,
  langSortPreventNavModalText: `Please finish the grid sorting before going to the next step.`,
  langSortOverloadedColumnModalHead: `Navigation Disabled`,
  langSortOverloadedColumnModalText: `One of the columns has too many cards (it will be outlined in orange and have a dashed border). Please adjust the placement of the cards so that all columns have the correct number.`,
  /*
   ******** POSTSORT  ****************** */
  langPostsortHeader: `Post-Sort Comments`,
  langPostsortInstructions: `<h3>Please describe your thoughts about these statements in more detail.</h3>`,
  langPlaceholder: `Click here to add comment`,
  langPostsortAgreement: `Placed on Agree`,
  langPostsortDisagreement: `Placed on Disagree`,
  langPostsortModalHead: `Step 3 of 4`,
  langPostsortModalText: `You can use the buttons at the bottom of the page to change the font size or card height.`,
  langPostsortPreventNavModalHead: `Navigation Disabled`,
  langPostsortPreventNavModalText: `Please add comments to all of the cards before going to the next step.`,
  langPostsortBackButton: `Go Back`,
  /*
   ******** SURVEY  ****************** */
  langSurveyHeader: `Post-Sort Questionnaire`,
  langSurveyModalHead: `Step 4 of 4`,
  langSurveyModalText: `Finally, please answer the following questions regarding your background. The questions marked with an "*" in their title are required.`,
  langSurveyPreventNavModalHead: `Navigation Disabled`,
  langSurveyPreventNavModalText: `Please answer the required questions (outlined in yellow) before going to the next step.`,

  /*
   ******** SUBMIT  ****************** */
  langBtnTransfer: `Submit Data`,
  langTransferHead: `Final Step`,
  langTransferTextAbove: `<h1>Ready to Submit</h1><br><br> <h2>Please click the "Submit Data" button to transmit your results.</h2>`,
  langTransferTextBelow: `If the submission confirmation message does not appear, <br>please wait a few minutes and click the submit button again.`,
  langTransferOkModalHeader: `Success - The data have been sent to the server.`,
  langTransferOkModalText: `Thank you for using EQ Web Sort!<br><br>You can now close your browser tab.`,
  langTransferFailModalHeader: `Connection to server failed`,
  langTransferFailModalText: `Please try again in a few moments.`,
  langFallbackMessage: `Data transmission has failed. Please download the results and email them as an attachment to ken.q.tools@gmail.com.  Thank you!`,
  langBtnDownload: `Download`,
  langGoodbyeMessage: `<div>Thank You!</div> <br /><div>You can now close the browser tab</div>`,

  /*
   ******** EMAIL  ****************** */
  langEmailSubmitBtn: "Open Email Client and Send Results",
  langEmailCopyResultsBtn: "Copy Results to Clipboard",
  langEmaiCopyAddressBtn: "Copy Email Address to Clipboard",
  langCopySuccessMessage: "Copied!",
  langCopyFailMessage: "Error: Please try again.",
  langDefaultEmailFailModalText:
    "Your default email client should have automatically opened with the results in the email body. If it didn't, please use the buttons below to copy and paste your information into an email.",
  langEmailBodyMessage:
    "You don't have to add anything to this email. Please just click the SEND button.",

  /*
   ******** LINKING  ****************** */
  langLinkingFallbackMessage:
    "Please click the button to begin the next Q sort",
  langLinkingBtnText: "Begin Next Q sort",

  uploadService: "Netlify",
  uploadServiceNetlifyActive: true,

  triggerXmlUploadErrorModal: false,
  /*
  firebase.xml settings */
});

export default appState;
