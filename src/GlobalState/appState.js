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
  configTitle: "My_Q_project_v1",
  configSetupTargetonlineActive: true,
  configSetupTarget: "online",
  configshuffleCardstrueActive: true,
  configshuffleCards: true,
  configAccessanonymousActive: true,
  configHeaderBarColor: "#337ab7",

  /*
  config.xml ACCESS settings */
  configAccess: "anonymous",
  configLogInPassword: "demo",

  /*
  config.xml LOGO settings */
  configLogoHtml: "EQ-logo.svg",

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

  /*
  config.xml POSTSORT settings */
  configShowSecondPosColumn: false,
  configShowSecondPosColumnfalseActive: true,
  configShowSecondNegColumn: false,
  configShowSecondNegColumnfalseActive: true,
  configShowStep3trueActive: true,
  configShowStep3: "true",

  /*
  config.xml SURVEY settings */
  configShowStep4trueActive: true,
  configShowStep4: "true",
  configSurveyInfoBarColor: "goldenrod",

  configStep2CardHeight: 150,
  configStep2ConstantWidth: false,
  configStep2ConstantWidthfalseActive: true,
  configStep2CardWidth: 200,

  mapColColors: "headers only",
  mapColColorsheadersActive: true,
  colColN6: "#FF9898",
  colColN5: "#ffb2b2",
  colColN4: "#ffbfbf",
  colColN3: "#ffcbcb",
  colColN2: "#ffd8d8",
  colColN1: "#ffe5e5",
  colCol0: "#e0e0e0",
  colCol1: "#d6f5d6",
  colCol2: "#c1f0c1",
  colCol3: "#adebad",
  colCol4: "#98E698",
  colCol5: "#84e184",
  colCol6: "#57e157",
  colCol7: "#e0e0e0",
  colCol8: "#e0e0e0",
  colCol9: "#e0e0e0",
  colCol10: "#e0e0e0",
  colCol11: "#e0e0e0",
  colCol12: "#e0e0e0",
  colCol13: "#e0e0e0",

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
  langStepCompleted: `You have completed this step. Please click on the <strong> blue "Continue" button </strong> at the bottom right-side of your screen to go to the next step.`,
  langLoginFirst: `Please complete the log-in process first.`,
  langFooterTextSize: `Text Size`,
  langFooterCardHeight: `Card Height`,
  langBtnHelp: "Help me!",
  langBtnNext: "Continue",
  langLandingHead: `University Research Project`,
  langWelcomeMessage: `<center><h2>Easy HtmlQ V3 Demo Project - iPad Use in the Classroom.</h2> </center><br/><br>
        
  <div style="display: flex; flex-direction: column; align-items: center;">
        <div><h2>Features</h2>
        <ul style="margin-left: 20px;">
             <li>Smooth drag and drop actions for desktop and mobile (touch) devices </li> 
             <li>Custom Image and video embedding capability (on the page and in help messages) </li> 
             <li>Participant-adjustable text and card sizes </li>  
             <li>Simple localization into the research language </li> 
             <li>HTML formatting for statements and User Interface text (including bold font, italics, underlines, line breaks) </li> 
             <li>Custom logo in page footers </li> 
             <li>Ability to do offline data collection when used on a notebook computer with EQ-Configurator</li> 
        </ul>
        </div> 
    </div>
  
   <br><br>

  <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: space-around; width: 100%">
 
 <div style="display:flex; flex-direction:column">
 Images
 <img src="/images/sortScreen3.png" width="640" /> 
 </div>


    <div style="display:flex; flex-direction:column">
    Video (enable subtitles / closed captions)
    <iframe width="640" height="360"
   src="https://www.youtube.com/embed/aHpeu5M7Rlo">
   </iframe>
    </div>

   </div>`,

  langAccessCodeText: `Access Code`,
  langAccessInputText: "Please enter the access code for this survey.",
  loginSubmitButtonText: `Submit`,
  langLoginPartIdText: `Please enter your name or participant ID`,
  langAccessCodeWarning: `Access code invalid`,
  langPartIdWarning: `Invalid name or ID`,
  langLoginHeaderText: `Sign In &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  (use ID="demo" and Access Code= "demo")`,
  langLoginWelcomeText: `<center></center><h3>Welcome!</h3></center><br> Thank you for participating in this Q methodology research project. <br>Please <strong>sign in</strong> using the form below to begin the process. `,
  langLandingHelpModalHead: `Welcome!`,
  langLandingHelpModalText: `Thank you for participating in this University Research Project. Please sign in to begin the process. After you submit your participant ID and/or the project access code, the instructions for the survey will appear. Please read them carefully, then click the "<strong></strong>Continue</strong>" button at the bottom right side of the screen to go to the next step.<br><br> <center><iframe width="640" height="360"
  src="https://www.youtube.com/embed/tgbNymZ7vqY">
  </iframe></center>`,
  /*
   ******** PRESORT  ****************** */
  langtitleBarText: `Preliminary Sorting`,
  langPresortAgreement: `Agree`,
  langPresortStatements: `Statements`,
  langPresortNeutral: `No Strong Feelings`,
  langPresortDisagreement: `Disagree`,
  langPresortModalHead: `Step 1 of 4`,
  langPresortModalText: `Read the folowing statements carefully and split them up into three piles: a pile for statements you tend to disagree with, a pile for cards you tend to agree with, and a pile for the rest. Changes can be made later.<br><br>If you want to read this instruction a second time, click the help-button at the bottom left corner.`,
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

  /*
   ******** SURVEY  ****************** */
  langSurveyHeader: `Post-Sort Questionnaire`,
  langSurveyModalHead: `Step 4 of 4`,
  langSurveyModalText: `Finally, please answer the following questions regarding your background. The questions marked with an "*" in their title are required.`,
  langSurveyPreventNavModalHead: `Navigation Disabled`,
  langSurveyPreventNavModalText: `Please answer the required questions (outlined in red) before going to the next step.`,

  /*
   ******** SUBMIT  ****************** */
  langBtnTransfer: `Submit Data`,
  langTransferHead: `Final Step`,
  langTransferTextAbove: `<h1>Ready to Submit</h1><br><br> <h2>Please click the "Submit Data" button to transmit your results.</h2>`,
  langTransferTextBelow: `If the submission confirmation message does not appear, <br>please wait a few minutes and click the submit button again.`,
  langTransferOkModalHeader: `Success - The data have been sent to the server.`,
  langTransferOkModalText: `Thank you for using Easy HTMLQ!<br><br>You can now close your browser tab.`,
  langTransferFailModalHeader: `Connection to server failed`,
  langTransferFailModalText: `Please try again in a few moments.`,
  langFallbackMessage: `Data transmission has failed. Please download the results and email them as an attachment to ken.q.tools@gmail.com.  Thank you!`,
  langBtnDownload: `Download`,

  uploadService: "Netlify",
  uploadServiceNetlifyActive: true,
  /*
  firebase.xml settings */
});

export default appState;
