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

  const data1 = `<?xml version="1.0" encoding="UTF-8"?>

   <config version="1.0" htmlParse="false">\n`;

  const data2 = `
   <!-- GENERAL SETTINGS -->
   <item id="studyTitle">${appState.configTitle}</item> 
   <item id="databaseOptions">${appState.configDatabaseOptions}</item>
   <item id="setupTarget">${appState.configSetupTarget}</item>
   <item id="firebaseOrLocal">${appState.configSetupTarget}</item>
   <item id="steinApiUrl">${appState.configSteinApiUrl}</item>


   <item id="shuffleCards">${appState.configShuffleCards}</item>
   <item id="headerBarColor">${appState.configHeaderBarColor}</item>
   <item id="devMode">false</item>
   

   <!-- ACCESS -->
   <!-- options: anonymous, partId-access, partId, access -->
   <item id="initialScreen">${loginTypeText}</item>
   <item id="accessCode">${appState.configLogInPassword}</item>


   <!-- FONT OPTIONS -->
   <!-- defaults false, 15, #2a2a2a -->
   <item id="setDefaultFontSize">${appState.configSetDefaultFontSize}</item>
   <item id="defaultFontSize">${appState.configDefaultFontSize}</item>
   <item id="defaultFontColor">${appState.defaultFontColor}</item>


   <!-- PRESORT -->
   <!-- default colors #ccffcc, #e0e0e0, #ffe0f0 -->
   <item id="greenCardColor">${appState.greenCardColor}</item>
   <item id="yellowCardColor">${appState.yellowCardColor}</item>
   <item id="pinkCardColor">${appState.pinkCardColor}</item>
 
   <item id="setSortDefaultFontSizePresort">${appState.configSetDefaultFontSizePresort}</item>
   <item id="defaultFontSize">${appState.configDefaultSortFontSizePresort}</item>
 

   <!-- SORT -->
   <item id="condOfInstFontSize">${appState.configCondOfInstFontSize}</item>
   <item id="allowUnforcedSorts">${appState.configAllowUnforcedSorts}</item>
   <item id="warnOverloadedColumn">${appState.configDisplayOverloadedColWarn}</item>
   <item id="setMinCardHeight">${appState.configSetMinCardHeight}</item>
   <item id="minCardHeight">${appState.configMinCardHeight}</item>

   <item id="setSortDefaultFontSizePresort">${appState.configSetSortDefaultFontSizeSort}</item>
   <item id="defaultFontSize">${appState.configDefaultSortFontSizeSort}</item>
 


   <!-- POSTSORT -->
   <item id="showPostsort">${appState.configShowStep3}</item>
   <item id="showSecondPosColumn">${appState.configShowSecondPosColumn}</item>
   <item id="showSecondNegColumn">${appState.configShowSecondNegColumn}</item>
   

   <item id="displayNeutralObjects">false</item>


   <!-- SURVEY - Survey Questions -->
   <item id="showSurvey">${appState.configShowStep4}</item>\n\n`;

  let data = data1.concat(data2);
  /* 
  appState.surveyQuestionsArray = JSON.parse(
    localStorage.getItem("surveyQuestionsArray")
  );
 */
  const surveyQuestionsArray = appState.surveyQuestionsArray;
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

      item = accumulatorString.concat(open, input, label, note, close);
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

      item = accumulatorString.concat(open, input, label, note, close);
    }

    // for TEXTAREA items
    if (itemObject.surveyQuestionType === "textarea") {
      const input = `        <input type="textarea" required="${itemObject.required}"></input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      const placeholder = `        <placeholder>${itemObject.placeholder}</placeholder>\n`;
      item = accumulatorString.concat(open, input, label, placeholder, close);
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
      item = accumulatorString.concat(open, input, label, close);
    }

    // for CHECKBOX items
    if (itemObject.surveyQuestionType === "checkbox") {
      const input = `        <input type="checkbox" required="${itemObject.required}">${itemObject.options}</input>\n`;
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
      item = accumulatorString.concat(open, input, label, close);
    }

    // for RATING5 items
    if (itemObject.surveyQuestionType === "rating5") {
      const input = `        <input type="rating5" required="${
        itemObject.required
      }" scale="1;;;2;;;3;;;4;;;5">${encodeHTML(itemObject.options)}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      item = accumulatorString.concat(open, input, label, close);
    }

    // for RATING10 items
    if (itemObject.surveyQuestionType === "rating10") {
      const input = `        <input type="rating10" required="${
        itemObject.required
      }" scale="1;;;2;;;3;;;4;;;5;;;6;;;7;;;8;;;9;;;10">${encodeHTML(
        itemObject.options
      )}</input>\n`;
      label = `        <label>${encodeHTML(itemObject.label)}</label>\n`;
      item = accumulatorString.concat(open, input, label, close);
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
