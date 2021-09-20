// import { app } from "electron";
import appState from "../../GlobalState/appState";
// import encodeHTML from "../../Utils/encodeHTML";

//    ${encodeHTML(appState.langBtnHelp)}
// ${appState.}

const generateConfigXml = () => {
  let loginTypeText;
  const loginType = appState.configAccess;
  if (loginType === "Name only") {
    loginTypeText = "partId";
  }
  if (loginType === "anonymous") {
    loginTypeText = "anonymous";
  }
  if (loginType === "Name + access code") {
    loginTypeText = "partId-access";
  }
  if (loginType === "access") {
    loginTypeText = "access";
  }

  const data1 = `<?xml version="1.0" encoding="UTF-8"?>

   <config version="${appState.configVersion}" htmlParse="false">\n`;

  const data2 = `
   <!-- GENERAL SETTINGS -->
   <item id="studyTitle">${appState.configTitle}</item> 
   <item id="setupTaget">${appState.configSetupTarget}</item>
   <item id="firebaseOrLocal">firebase</item>
   <item id="shuffleCards">${appState.configshuffleCards}</item>
   <item id="headerBarColor">${appState.headerBarColor}</item>
   <item id="devMode">false</item>
   
   <!-- ACCESS -->
   <!-- options: anonymous, partId-access, partId, access -->
   <item id="initialScreen">${loginTypeText}</item>
   <item id="accessCode">${appState.configLogInPassword}</item>

   <!-- FOOTER -->
   <item id="footerLogo">{{{center}}}{{{img src="/images/${appState.configLogoHtml}" height="40" width="250" /}}}{{{/center}}}</item>

   <!-- PRESORT -->
   <!-- default colors #ccffcc, #e0e0e0, #ffe0f0 -->
   <item id="greenCardColor">${appState.greenCardColor}</item>
   <item id="yellowCardColor">${appState.yellowCardColor}</item>
   <item id="pinkCardColor">${appState.pinkCardColor}</item>
 


   <!-- SORT -->
   <item id="condOfInstFontSize">${appState.configCondOfInstFontSize}</item>
   <item id="allowUnforcedSorts">${appState.configAllowUnforcedSorts}</item>
   <item id="warnOverloadedColumn">${appState.configDisplayOverloadedColWarn}</item>


   <!-- POSTSORT -->
   <item id="showPostsort">${appState.configShowStep3}</item>
   <item id="showSecondPosColumn">${appState.configShowSecondPosColumn}</item>
   <item id="showSecondNegColumn">${appState.configShowSecondNegColumn}</item>
   <item id="postsortAgreeColDisp1">column4</item>
   <item id="postsortAgreeColDisp2">column3</item>
   <item id="postsortDisagreeColDisp1">columnN4</item>
   <item id="postsortDisagreeColDisp2">columnN3</item>
   
   <item id="displayNeutralObjects">false</item>


   <!-- SURVEY - Survey Questions -->
   <item id="showSurvey">${appState.configShowStep4}</item>

   `;

  let data = data1.concat(data2);

  const surveyQuestionsArray = appState.surveyQuestionsArray;

  for (let i = 0; i < surveyQuestionsArray.length; i += 1) {
    let item;
    let label = "";
    let accumulatorString = "";
    let itemObject = surveyQuestionsArray[i];

    // for TEXT items
    if (itemObject.surveyQuestionType === "text") {
      let restrictedString;
      if (itemObject.restricted === true) {
        restrictedString = `restricted="0-9"`;
      } else {
        restrictedString = ``;
      }
      if (itemObject.required === true) {
        label = `        <label>${itemObject.label}*</label>\n`;
      } else {
        label = `        <label>${itemObject.label}</label>\n`;
      }
      const note = `        <note>${itemObject.note}</note>\n`;
      const input = `        <input type="text" required="${itemObject.required}" maxlength="${itemObject.maxlength}" ${restrictedString}></input>\n\n`;

      item = accumulatorString.concat(label, note, input);
    }

    // for TEXTAREA items
    if (itemObject.surveyQuestionType === "textarea") {
      if (itemObject.required === true) {
        label = `        <label>${itemObject.label}*</label>\n`;
      } else {
        label = `        <label>${itemObject.label}</label>\n`;
      }
      const input = `        <input type="textarea" required="${itemObject.required}"></input>\n\n`;
      item = accumulatorString.concat(label, input);
    }

    // for RADIO items
    if (itemObject.surveyQuestionType === "radio") {
      if (itemObject.required === true) {
        label = `        <label>${itemObject.label}*</label>\n`;
      } else {
        label = `        <label>${itemObject.label}</label>\n`;
      }
      const note = `        <note>${itemObject.note}</note>\n`;
      const input = `        <input type="radio" required="${itemObject.required}">${itemObject.options}</input>\n\n`;
      item = accumulatorString.concat(label, note, input);
    }

    // for SELECT items
    if (itemObject.surveyQuestionType === "select") {
      if (itemObject.required === true) {
        label = `        <label>${itemObject.label}*</label>\n`;
      } else {
        label = `        <label>${itemObject.label}</label>\n`;
      }
      const input = `        <input type="select" required="${itemObject.required}">${itemObject.options}</input>\n\n`;
      item = accumulatorString.concat(label, input);
    }

    // for CHECKBOX items
    if (itemObject.surveyQuestionType === "checkbox") {
      if (itemObject.required === true) {
        label = `        <label>${itemObject.label}*</label>\n`;
      } else {
        label = `        <label>${itemObject.label}</label>\n`;
      }
      const input = `        <input type="checkbox" required="${itemObject.required}">${itemObject.options}</input>\n\n`;
      item = accumulatorString.concat(label, input);
    }

    // for RATING2 items
    if (itemObject.surveyQuestionType === "rating2") {
      if (itemObject.required === true) {
        label = `        <label>${itemObject.label}*</label>\n`;
      } else {
        label = `        <label>${itemObject.label}</label>\n`;
      }
      const input = `        <input type="rating2" required="${itemObject.required}" scale="${itemObject.scale}">${itemObject.options}</input>\n\n`;
      item = accumulatorString.concat(label, input);
    }

    // for RATING5 items
    if (itemObject.surveyQuestionType === "rating5") {
      if (itemObject.required === true) {
        label = `        <label>${itemObject.label}*</label>\n`;
      } else {
        label = `        <label>${itemObject.label}</label>\n`;
      }
      const input = `        <input type="rating5" required="${itemObject.required}">${itemObject.options}</input>\n\n`;
      item = accumulatorString.concat(label, input);
    }

    // for RATING10 items
    if (itemObject.surveyQuestionType === "rating10") {
      if (itemObject.required === true) {
        label = `        <label>${itemObject.label}*</label>\n`;
      } else {
        label = `        <label>${itemObject.label}</label>\n`;
      }
      const input = `        <input type="rating10" required="${itemObject.required}">${itemObject.options}</input>\n\n`;
      item = accumulatorString.concat(label, input);
    }

    // for INFORMATION items
    if (itemObject.surveyQuestionType === "information") {
      const note = `        <note bg="${itemObject.bg}">${itemObject.options}</note>\n\n`;
      item = accumulatorString.concat(note);
    }

    data = data.concat(item);
  }

  const finalText = `     </item>

   </config>`;

  data = data.concat(finalText);

  return data;
};

export default generateConfigXml;
