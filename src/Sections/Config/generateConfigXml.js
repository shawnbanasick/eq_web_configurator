import { app } from "electron";
import appState from "../../GlobalState/appState";
import encodeHTML from "../../Utils/encodeHTML";

//    ${encodeHTML(appState.langBtnHelp)}
// ${appState.}

const generateConfigXml = () => {
  let loginTypeText;
  const loginType = appState.configAccess;
  if (loginType === "name only") {
    loginTypeText = "partId";
  }
  if (loginType === "anonymous") {
    loginTypeText = "anonymous";
  }
  if (loginType === "name + access code") {
    loginTypeText = "partId-access";
  }
  if (loginType === "access code only") {
    loginTypeText = "access";
  }

  let defaultLogo = appState.configLogoHtml;
  defaultLogo = defaultLogo.replace(/\s/g, "");

  if (
    defaultLogo === null ||
    defaultLogo === undefined ||
    defaultLogo.length === 0
  ) {
    defaultLogo = "EQ_default.svg";
    appState.configLogoHtml = "EQ_default.svg";
  }

  let studyTitle = appState.configTitle;
  if (studyTitle === null || studyTitle === undefined) {
    appState.configTitle = "my Q study";
  }
  let imageFormatType = appState.configImageFormat;
  if (imageFormatType === "16x9") {
    imageFormatType = "postSortImageModal169";
  } else {
    imageFormatType = "postSortImageModal43";
  }

  const data1 = `<?xml version="1.0" encoding="UTF-8"?>

   <config version="5.0" htmlParse="false">\n`;

  const data2 = `
   <!-- GENERAL SETTINGS -->
   <!-- "setupTarget" options: Netlify, firebase, local, email, or sheets -->
   <item id="studyTitle">${appState.configTitle}</item> 
   <item id="databaseOptions">${appState.configDatabaseOptions}</item>
   <item id="setupTarget">${appState.configSetupTarget}</item>
   <!-- STEIN -->
   <item id="steinApiUrl">${appState.configSteinApiUrl}</item>
   <!-- EMAIL -->
   <item id="emailAddress">${appState.configEmailAddress}</item>  
   <item id="emailSubject">${appState.configEmailSubject}</item>  
   <!-- SECOND PROJECT -->
   <item id="linkToSecondProject">${appState.configLinkToSecondQsort}</item> 
   <item id="secondProjectUrl">${appState.configLinkToSecondQsortUrl}</item> 
   <!-- IMAGE OPTIONS  (imageType: 169 or 43)-->
   <item id="useImages">${appState.configUseImages}</item>
   <item id="numImages">${appState.configNumImages}</item>
   <item id="imageFileType">${appState.configImageType}</item>
   <item id="imageType">${imageFormatType}</item>
   <item id="shuffleImages">${appState.configShuffleCards}</item>
   <!-- OTHER GENERAL OPTIONS -->
   <item id="shuffleCards">${appState.configShuffleCards}</item>
   <item id="headerBarColor">${appState.configHeaderBarColor}</item>
   <item id="devMode">false</item> 

   <!-- ACCESS -->
   <!-- options: anonymous, partId-access, partId, access -->
   <item id="initialScreen">${loginTypeText}</item>
   <item id="accessCode">${appState.configLogInPassword}</item>

   <!-- LEGACY DEFAULTS (do not change these)-->
   <item id="setDefaultFontSize">true</item>
   <item id="defaultFontSize">25</item>
   <item id="displayNeutralObjects">false</item>

   
   <!-- PRESORT -->
   <!-- default colors #2a2a2a, #ccffcc, #e0e0e0, #ffe0f0 -->
   <item id="greenCardColor">${appState.greenCardColor}</item>
   <item id="yellowCardColor">${appState.yellowCardColor}</item>
   <item id="pinkCardColor">${appState.pinkCardColor}</item>
   <item id="defaultFontColor">${appState.defaultFontColor}</item>

   <item id="setDefaultFontSizePresort">true</item>
   <item id="defaultFontSizePresort">${appState.configDefaultFontSizePresort}</item>
  

   <!-- SORT -->
   <item id="allowUnforcedSorts">${appState.configAllowUnforcedSorts}</item>
   <item id="warnOverloadedColumn">${appState.configDisplayOverloadedColWarn}</item>
   <item id="condOfInstFontSize">${appState.configCondOfInstFontSize}</item>

   <item id="setMinCardHeightSort">true</item>
   <item id="minCardHeight">${appState.configMinCardHeightSort}</item>
   <item id="setDefaultFontSizeSort">true</item>
   <item id="defaultFontSizeSort">${appState.configDefaultFontSizeSort}</item>
   
   <item id="sortDirection">${appState.configSortDirection}</item> 

   <!-- POSTSORT -->
   <item id="showPostsort">${appState.configShowStep3}</item>
   <item id="showSecondPosColumn">${appState.configShowSecondPosColumn}</item>
   <item id="showSecondNegColumn">${appState.configShowSecondNegColumn}</item>
   <item id="showBackButton">${appState.configShowBackButton}</item>
   <item id="postsortCommentsRequired">${appState.configPostsortCommentsRequired}</item>

   <item id="setDefaultFontSizePostsort">true</item>
   <item id="defaultFontSizePostsort">${appState.configDefaultFontSizePostsort}</item>
   <item id="setMinCardHeightPostsort">true</item>
   <item id="minCardHeightPostsort">${appState.configMinCardHeightPostsort}</item>


   <!-- SURVEY - Survey Questions -->
   <item id="showSurvey">${appState.configShowStep4}</item>\n\n`;

  let data = data1.concat(data2);

  const surveyQuestionsArray = appState.surveyQuestionsArray;

  console.log("surveyQuestionsArray", surveyQuestionsArray);

  const open = `   <item id="survey">\n`;
  const close = `   </item>\n\n`;

  for (let i = 0; i < surveyQuestionsArray.length; i += 1) {
    let item;
    let label = "";
    let accumulatorString = "";
    let itemObject = surveyQuestionsArray[i];

    // for TEXT items
    if (itemObject.surveyQuestionType === "text") {
      let restrictedString;
      let limitedString;
      let maxLengthNum;
      if (itemObject.restricted === true || itemObject.restricted === "true") {
        restrictedString = `restricted="true"`;
      } else {
        restrictedString = `restricted="false"`;
      }
      if (itemObject.limited === true || itemObject.limited === "true") {
        limitedString = `true`;
        maxLengthNum = itemObject.maxlength;
      } else {
        limitedString = `false`;
        maxLengthNum = 99999;
      }
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      const input = `        <input type="text" required="${itemObject.required}" limited="${limitedString}" maxlength="${maxLengthNum}" ${restrictedString}></input>\n`;
      const placeholder = `        <placeholder>${itemObject.placeholder}</placeholder>\n`;

      item = accumulatorString.concat(
        open,
        input,
        label,
        note,
        placeholder,
        close
      );
    }

    // for TEXT-RESTRICTED items
    if (itemObject.surveyQuestionType === "textRestricted") {
      let restrictedString;
      if (itemObject.restricted === true) {
        restrictedString = `restricted="0-9"`;
      } else {
        restrictedString = ``;
      }
      const input = `        <input type="text" required="${itemObject.required}" maxlength="${itemObject.maxlength}" ${restrictedString}></input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      const placeholder = `        <placeholder>${itemObject.placeholder}</placeholder>\n`;
      item = accumulatorString.concat(
        open,
        input,
        label,
        note,
        placeholder,
        close
      );
    }

    // for TEXTAREA items
    if (itemObject.surveyQuestionType === "textarea") {
      const input = `        <input type="textarea" required="${itemObject.required}"></input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      const placeholder = `        <placeholder>${itemObject.placeholder}</placeholder>\n`;
      item = accumulatorString.concat(
        open,
        input,
        label,
        note,
        placeholder,
        close
      );
    }

    // for RADIO items
    if (itemObject.surveyQuestionType === "radio") {
      const input = `        <input type="radio" required="${itemObject.required}">${itemObject.options}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for SELECT items
    if (itemObject.surveyQuestionType === "select") {
      const input = `        <input type="select" required="${itemObject.required}">${itemObject.options}</input>\n`;
      label = `        <label>${encodeHTML(
        encodeHTML(itemObject.label)
      )}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for CHECKBOX items
    if (itemObject.surveyQuestionType === "checkbox") {
      const input = `        <input type="checkbox" required="${itemObject.required}">${itemObject.options}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for LIKERT items
    if (itemObject.surveyQuestionType === "likert") {
      const input = `        <input type="likert" required="${itemObject.required}" scale="${itemObject.scale}">.</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      item = accumulatorString.concat(open, input, label, close);
    }

    // for RATING2 items
    if (itemObject.surveyQuestionType === "rating2") {
      const input = `        <input type="rating2" required="${
        itemObject.required
      }" scale="${itemObject.scale}">${encodeHTML(
        itemObject.options
      )}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for RATING 5 items
    if (itemObject.surveyQuestionType === "rating5") {
      const input = `        <input type="rating5" required="${
        itemObject.required
      }" scale="1;;;2;;;3;;;4;;;5">${encodeHTML(itemObject.options)}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for RATING 10 items
    if (itemObject.surveyQuestionType === "rating10") {
      const input = `        <input type="rating10" required="${
        itemObject.required
      }" scale="1;;;2;;;3;;;4;;;5;;;6;;;7;;;8;;;9;;;10">${encodeHTML(
        itemObject.options
      )}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const note = `        <note>${encodeHTML(itemObject.note)}</note>\n`;
      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for INFORMATION items
    if (itemObject.surveyQuestionType === "information") {
      const infoText = `       <input type="information"></input>\n`;
      const infoNoteHtml = encodeHTML(itemObject.note);
      const note = `       <note bg="${itemObject.bg}">${infoNoteHtml}</note>\n`;
      item = accumulatorString.concat(open, infoText, note, close);
    }

    data = data.concat(item);
  }

  let finalText = `\n       
  </config>`;

  data = data.concat(finalText);

  return data;
};

export default generateConfigXml;
