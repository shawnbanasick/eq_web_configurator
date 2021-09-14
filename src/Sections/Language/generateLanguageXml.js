import appState from "../../GlobalState/appState";

const generateLanguageXml = () => {
  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <language version="1.0" htmlParse="true">\n;

        <!-- misc -->
        <item id="btnContinue">${appState.langBtnContinue}</item>
        <item id="btnclose">${appState.langBtnClose}</item>
        <item id="btnHelp">${appState.langBtnHelp}</item>
        <item id="btnAgreement">${appState.langBtnAgree}</item>
        <item id="btnNeutral">${appState.langBtnNeutral}</item>
        <item id="btnDisagreement">${appState.langBtnDisagree}</item>
        <item id="btnTransfer">${appState.langBtnSubmit}</item>
        <item id="btnExit">${appState.langBtnExit}</item>
        <item id="selectItem">${appState.langBtnSelect}</item>
        
        <!-- Warning when user is trying to leave the page (this item was added for HtmlQ) -->
        <item id="leaveSiteWarning">${appState.langExitWarning}</item>

        <!-- HtmlQ only: In-App Back Button -->
        <item id="backButton">${appState.langBack}</item>
        <item id="fillInRequiredFields">${appState.langReqFields}</item>

        <!-- errors -->
        <item id="errorHead">${appState.langError}</item>
        <item id="errorWindowTooSmall">${appState.langMaxWindow}</item>

        <!-- welcome screen (leave blank to skip screen) -->
        <item id="welcomeHead">${appState.langWelcome}</item>
        <item id="welcomeText">${appState.langWelcomeText}</item>

        <!-- user login, only displayed if access is restricted (see config-file) -->
        <item id="loginHead">${appState.langUserCode}</item>
        <item id="loginText">${appState.langLogInText}</item>
        <item id="loginFormHeader">${appState.langFormHeader}</item>
        <item id="loginPartIdText">${appState.langPartIdText}</item>
        <item id="loginNoInput">${appState.langNoInput}</item>
        <item id="loginInvalidInput">${appState.langUserCodeInvalid}</item>
        <item id="loginNoConnection">${appState.langServerConnectFail}</item>

        <!-- introduction (leave blank to skip popup) -->
        <item id="introHead">${appState.langIntroduction}</item>
        <item id="introText">${appState.langIntroText}</item>

        <!-- step1: rough sorting into three piles (leave blank to skip popup)-->
        <item id="step1Head">${appState.langStep1}</item>
        <item id="step1Text">${appState.langStep1Text}</item>

        <!-- step2: sorting (leave blank to skip popup) -->
        <item id="step2Head">${appState.langStep2}</item>
        <item id="step2Text">${appState.langStep2Text}</item>
        <item id="step2CondOfInstruc">${appState.langStep2CondOfInstruc}</item>
        
        <!-- step3: check sorting, only displayed if showStep3== true (see config-file; leave blank to skip popup)-->
        <item id="step3Head">${appState.langStep3}</item>
        <item id="step3Text">${appState.langStep3Text}</item>
        <item id="step3CondOfInstruc">${appState.langStep3CondOfInstruc}</item>

        <!-- step4: comments on best/worst rated statements, only displayed if showStep4== true (see config-file; leave blank to skip popup) -->
        <item id="step4Head">${appState.langStep4}</item>
        <item id="step4Text">${appState.langStep4Text}</item>

        <!-- step5: dditional questions, only displayed if showStep5== true (see config-file; leave blank to skip popup)-->
        <item id="step5Head">${appState.langStep5}</item>
        <item id="step5Text">${appState.langStep5Text}</item>

        <!-- data transfer, only displayed if submitUrl is not blank (see config-file) -->
        <item id="transferHead">${appState.langTransferHead}</item>
        <item id="transferText">${appState.langTransferText}</item>
        <item id="transferFailed">${appState.langTransferFailed}</item>
        <item id="transferOk">${appState.langTransferOk}</item>   
   </language>`;

  return data;
};

export default generateLanguageXml;
