import appState from "../../GlobalState/appState";
import encodeHTML from "../../Utils/encodeHTML";

const generateLanguageXml = () => {
  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <language version="1.0" htmlParse="true">\n;

        <!-- MULTI-PURPOSE MODALS -->
        <item id="stepCompleteMessage">${encodeHTML(
          appState.langStepCompleted
        )}</item>
        <item id="logInFirst">${encodeHTML(appState.langLoginFirst)}</item>

        <!-- FOOTER -->
        <item id="fontSizeText">${encodeHTML(
          appState.langFooterTextSize
        )}</item>
        <item id="cardHeightText">${encodeHTML(
          appState.langFooterCardHeight
        )}</item>
        <item id="btnHelp">${encodeHTML(appState.langBtnHelp)}</item>
        <item id="btnNext">${encodeHTML(appState.langBtnNext)}</item>

        <!-- LANDING SCREEN -->
        <item id="landingHead">${encodeHTML(appState.langLandingHead)}</item>
        <item id="welcomeText">${encodeHTML(appState.langWelcomeMessage)}</item>

        <!-- LANDING -> ACCESS CONTROL - only displayed if access is restricted -->
        <item id="accessCodeText">${encodeHTML(
          appState.langAccessCodeText
        )}</item>
        <item id="accessInputText">${encodeHTML(
          appState.langAccessInputText
        )}</item>
        <item id="loginSubmitButtonText">${encodeHTML(
          appState.loginSubmitButtonText
        )}</item>
        <item id="loginPartIdText">${encodeHTML(
          appState.langLoginPartIdText
        )}</item>
        <item id="accessCodeWarning">${encodeHTML(
          appState.langAccessCodeWarning
        )}</item>
        <item id="partIdWarning">${encodeHTML(
          appState.langPartIdWarning
        )}</item>
        <item id="loginHeaderText">${encodeHTML(
          appState.langLoginHeaderText
        )}</item>
        <item id="loginWelcomeText">${encodeHTML(
          appState.langLoginWelcomeText
        )}</item>
        <item id="landingHelpModalHead">${encodeHTML(
          appState.langLandingHelpModalHead
        )}</item>
        <item id="landingHelpModalText">${encodeHTML(
          appState.langLandingHelpModalText
        )}</item>

        <!-- PRESORT: rough sorting into three piles (leave blank to skip popup)-->
        <item id="titleBarText">${encodeHTML(appState.langtitleBarText)}</item>
        <item id="presortAgreement">${encodeHTML(
          appState.langPresortAgreement
        )}</item>
        <item id="presortStatements">${encodeHTML(
          appState.langPresortStatements
        )}</item>
        <item id="presortNeutral">${encodeHTML(
          appState.langPresortNeutral
        )}</item>
        <item id="presortDisagreement">${encodeHTML(
          appState.langPresortDisagreement
        )}</item>
        <item id="presortModalHead">${encodeHTML(
          appState.langPresortModalHead
        )}</item>
        <item id="presortModalText">${encodeHTML(
          appState.langPresortModalText
        )}</item>
        <item id="presortPreventNavModalHead">${encodeHTML(
          appState.langPresortPreventNavModalHead
        )}</item>
        <item id="presortPreventNavModalText">${encodeHTML(
          appState.langPresortPreventNavModalText
        )}</item>
        <item id="presortFinishedModalHead">${encodeHTML(
          appState.langPresortFinishedModalHead
        )}</item>
        <item id="presortFinishedModalText">${encodeHTML(
          appState.langPresortFinishedModalText
        )}</item>

        <!-- SORT: sorting (leave blank to skip popup) -->
        <item id="sortHelpModalHead">${encodeHTML(
          appState.langSortHelpModalHead
        )}</item>
        <item id="sortHelpModalText">${encodeHTML(
          appState.langSortHelpModalText
        )}</item>
        <item id="sortAgreement">${encodeHTML(
          appState.langSortAgreement
        )}</item>
        <item id="sortDisagreement">${encodeHTML(
          appState.langSortDisagreement
        )}</item>
        <item id="condOfInst">${encodeHTML(appState.langCondOfInst)}</item>
        <item id="sortingCompleteModalHead">${encodeHTML(
          appState.langSortingCompleteModalHead
        )}</item>
        <item id="sortingCompleteModalText">${encodeHTML(
          appState.langSortingCompleteModalText
        )}</item>
        <item id="sortPreventNavModalHead">${encodeHTML(
          appState.langSortPreventNavModalHead
        )}</item>
        <item id="sortPreventNavModalText">${encodeHTML(
          appState.langSortPreventNavModalText
        )}</item>
        <item id="sortOverloadedColumnModalHead">${encodeHTML(
          appState.langSortOverloadedColumnModalHead
        )}</item>
        <item id="sortOverloadedColumnModalText">${encodeHTML(
          appState.langSortOverloadedColumnModalText
        )}</item>

        <!-- POSTSORT: comments - only displayed if showStep3 = true -->
        <item id="postsortHeader">${encodeHTML(
          appState.langPostsortHeader
        )}</item>
        <item id="postsortInstructions">${encodeHTML(
          appState.langPostsortInstructions
        )}</item>
        <item id="placeholder">${encodeHTML(appState.langPlaceholder)}</item>
        <item id="postsortAgreement">${encodeHTML(
          appState.langPostsortAgreement
        )}</item>
        <item id="postsortDisagreement">${encodeHTML(
          appState.langPostsortDisagreement
        )}</item>
        <item id="postsortModalHead">${encodeHTML(
          appState.langPostsortModalHead
        )}</item>
        <item id="postsortModalText">${encodeHTML(
          appState.langPostsortModalText
        )}</item>

        <!-- SURVEY: Additional questions, only displayed if showStep4 == true -->
        <item id="surveyHeader">${encodeHTML(appState.langSurveyHeader)}</item>
        <item id="surveyModalHead">${encodeHTML(
          appState.langSurveyModalHead
        )}</item>
        <item id="surveyModalText">${encodeHTML(
          appState.langSurveyModalText
        )}</item>
        <item id="surveyPreventNavModalHead">${encodeHTML(
          appState.langSurveyPreventNavModalHead
        )}</item>
        <item id="surveyPreventNavModalText">${encodeHTML(
          appState.langSurveyPreventNavModalText
        )}</item>
       
        <!-- SUBMIT -->
        <item id="btnTransfer">${encodeHTML(appState.langBtnTransfer)}</item>
        <item id="transferHead">${encodeHTML(appState.langTransferHead)}</item>
        <item id="transferTextAbove">${encodeHTML(
          appState.langTransferTextAbove
        )}</item>
        <item id="transferTextBelow">${encodeHTML(
          appState.langTransferTextBelow
        )}</item>
        <item id="transferOkModalHeader">${encodeHTML(
          appState.langTransferOkModalHeader
        )}</item>   
        <item id="transferOkModalText">${encodeHTML(
          appState.langTransferOkModalText
        )}</item>
        <item id="transferFailModalHeader">${encodeHTML(
          appState.langTransferFailModalHeader
        )}</item>   
        <item id="transferFailModalText">${encodeHTML(
          appState.langTransferFailModalText
        )}</item>   
        <item id="fallbackMessage">${encodeHTML(
          appState.langFallbackMessage
        )}</item>   
        <item id="btnDownload">${encodeHTML(appState.langBtnDownload)}</item>   

   </language>`;

  return data;
};

export default generateLanguageXml;
