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

  /*
  config.xml default settings */
  showSurveytextImage: true,

  configTitle: "My_Q_project_v1",
  configVersion: "1.0",
  configSetupTargetonlineActive: true,
  configSetupTarget: "online survey",
  configshuffleCardstrueActive: true,
  configshuffleCards: true,
  configAccessanonymousActive: true,
  configAccess: "anonymous",
  configLogoHtml: "EQ-logo.svg",
  configCondOfInstFontSize: 20,
  configAllowUnforcedSorts: false,
  configAllowUnforcedSortsfalseActive: true,
  configDisplayOverloadedColWarn: true,
  configDisplayOverloadedColWarntrueActive: true,
  configShowSecondPosColumn: false,
  configShowSecondPosColumnfalseActive: true,
  configShowSecondNegColumn: false,
  configShowSecondNegColumnfalseActive: true,

  configUseLogInScriptfalseActive: true,
  configUseLogInScript: false,
  configShowStep3trueActive: true,
  configShowStep3: "true",
  configShowStep4trueActive: true,
  configShowStep4: "true",
  configShowStep5trueActive: true,
  configShowStep5: "true",
  configDisableBackButton: true,
  configDisableBackButtontrueActive: true,
  configPartNameRequired: true,
  configPartNameRequiredtrueActive: true,
  configStep2ConstantHeight: false,
  configStep2ConstantHeightfalseActive: true,
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
             <li></li>Smooth drag and drop actions for desktop and mobile (touch) devices </li> 
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
  OLD language.xml settings */
  langBtnClose: "Close",
  langBtnAgree: "Agree",
  langBtnNeutral: "Neutral",
  langBtnDisagree: "Disagree",
  langBtnSubmit: "Submit data",
  langBtnExit: "Exit",
  langBtnSelect: "Please select...",
  langExitWarning: "Your answers will be lost.",
  langBack: "Back",
  langReqFields: "Please fill in all required fields",
  langError: "Error!",
  langMaxWindow: "Please maximize your browser for using this application.",
  langWelcome: "Welcome!",
  langWelcomeText:
    'This is a demo project on iPad use in the classroom.{br}{br}{b}** Important Information **{/b}{br}For this survey you will need as much screen space as possible!{br}{br}If necessary, please {b}MAXIMIZE{/b} the size of your browser window, {b}{i}reload{/i}{/b} this web page, and click on the "Continue" button to start the survey.',
  langUserCode: "Access Code",
  langFormHeader: "Access Code",
  langPartIdText: "Your name or survey id number",
  langNoInput: "Please insert the access code.",
  langUserCodeInvalid: "Access code invalid",
  langServerConnectFail: "Connection to server failed. Please try again.",
  langIntroduction: "Introduction",
  langIntroText: `This study is about iPad use in the classroom.`,
  langStep1: "Step 1 of 5",
  langStep1Text: `Read the folowing statements carefully and split them up into three piles: a pile for statements you tend to disagree with, a pile for cards you tend to agree with, and a pile for the rest.{br}{br}You can either drag the cards into one of the three piles or {b}press 1, 2, 3{/b} on your keyboard. Changes can be made later.{br}{br}If you want to read this instruction a second time, press the help-button at the bottom left corner.`,
  langStep2: "Step 2 of 5",
  langStep2Text: `Take the cards from the "AGREE"-pile and arrange them on right side of the score sheet.{br}{br}Next, take the cards from the "DISAGREE"-pile and arrange them on the left side of the score sheet. Follow this procedure for all cards in the "AGREE"- and "DIAGREE"-piles.{br}{br}Finally, take the "NEUTRAL"-cards arange them in the remaining open boxes of the score sheet.`,
  langStep3: "Step 3 of 5",
  langStep3Text: `Now you have placed all cards on the score sheet. Please go over your distribution once more and swap card positions cards if desired.`,
  langStep4: "Step 4 of 5",
  langStep4Text: `Please explain why you agree most or disagree most with the following statements you have placed below "+4" or "-4".`,
  langStep5: "Step 5 of 5",
  langStep5Text: `Finally, please answer the following questions regarding your background.`,
  langTransferHead: "Submit Data",
  langTransferText: "You've finished the survey. Please submit your data now.",
  langTransferFailed: "Data submission failed. Please try again.",
  langTransferOk: `Thank you for using Easy HTMLQ!{br}{br}You can now close your browser window.`,

  langStep2CondOfInstruc: "Give condition of instruction here",
  langStep3CondOfInstruc: "Give condition of instruction here",

  uploadService: "Netlify",
  uploadServiceNetlifyActive: true,
  /*
  firebase.xml settings */
});

export default appState;
