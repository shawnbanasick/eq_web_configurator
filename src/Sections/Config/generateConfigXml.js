// import { app } from "electron";
import appState from "../../GlobalState/appState";

const generateConfigXml = () => {
  const data1 = `<?xml version="1.0" encoding="UTF-8"?>

   <config version="${appState.configVersion}" htmlParse="false">

     <!-- title of the study -->\n`;

  const titleString = `     <item id="studyTitle">${appState.configTitle}</item>\n\n`;

  const alignString1 = `     <!-- text-align property(left|right) -->\n`;
  const alignString2 = `     <item id="textAlign">${appState.configTextAlign}</item>\n\n`;

  const shuffleString1 = `     <!-- shuffle cards (true|false)  -->\n`;
  const shuffleString2 = `     <item id="shuffleCards">${appState.configshuffleCards}</item>\n\n`;

  const loginString1 = `     <!-- login required (true|false) -->\n`;
  const loginString2 = `     <item id="loginrequired">${appState.configLogInRequired}</item>\n`;

  const loginPassString1 = `     <!-- login with common password (leave blank if not required) -->\n`;
  const loginPassString2 = `     <item id="loginPassword">${
    appState.configLogInPassword || ""
  }</item>\n`;
  const loginPassString3 = `    <item id="partNameRequired">${
    appState.configPartNameRequired || "false"
  }</item>\n`;

  const loginUrlString1 = `      <!-- URL to individual login script(leave blank if not required) -->\n`;
  const loginUrlString2 = `     <item id="loginUrl">${
    appState.configLogInScriptURL || ""
  }</item>\n`;

  const loginMethodString1 = `     <!-- request mode (post|get) -->\n`;
  const loginMethodString2 = `     <item id="loginUrlMethod">${
    appState.configRequestMode || ""
  }</item>\n\n`;

  const showStep3String1 = `     <!-- activate/deactivate optional steps (true|false) -->\n`;
  const showStep3String2 = `     <item id="showStep3">${appState.configShowStep3}</item>\n`;
  const showStep4String2 = `     <item id="showStep4">${appState.configShowStep4}</item>\n`;
  const showStep5String2 = `     <item id="showStep5">${appState.configShowStep5}</item>\n\n`;

  const disableBackString1 = `     <!-- HtmlQ only: disable the in-window back button -->\n`;
  const disableBackString2 = `     <item id="disableBackButton">${appState.configDisableBackButton}</item>\n`;

  const setConstantCardHeight = `     <item id="setConstantCardHeight">${appState.configStep2ConstantHeight}</item>\n`;
  const constantCardHeight = `     <item id="constantCardHeight">${appState.configStep2CardHeight}</item>\n`;
  const setConstantCardWidth = `     <item id="setConstantCardWidth">${appState.configStep2ConstantWidth}</item>\n`;
  const constantCardWidth = `     <item id="constantCardWidth">${appState.configStep2CardWidth}</item>\n`;

  const surveyDescription = `
     <!-- define form elements for step5; only displayed if showStep5 is true (delete tags if not required) -->
     <!-- add label: <label>[STRING]</label> -->
     <!-- add note: <note>[STRING]</note> -->
     <!-- add input-field: <input type="[text|textarea|radio|select|checkbox|rating2|rating5|rating10]">[VALUE]</input> -->
     <!-- optional attributes: bg, id, maxlength, restricted, required, scale  -->
     <item id="form">\n`;

  let data = data1.concat(
    titleString,
    alignString1,
    alignString2,
    shuffleString1,
    shuffleString2,
    loginString1,
    loginString2,
    loginPassString1,
    loginPassString2,
    loginPassString3,
    loginUrlString1,
    loginUrlString2,
    loginMethodString1,
    loginMethodString2,
    setConstantCardHeight,
    constantCardHeight,
    setConstantCardWidth,
    constantCardWidth,
    showStep3String1,
    showStep3String2,
    showStep4String2,
    showStep5String2,
    disableBackString1,
    disableBackString2,
    surveyDescription
  );

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

     <!-- URL for data transmission via POST/GET (leave blank if not required) -->
     <item id="submitUrl">exe.php?do=save</item>
  
     <!-- request mode (post|get|firebase) -->
     <item id="submitUrlMethod">firebase</item>
  
     <!-- data transmission via email, user must have an e-mail programm like Outlook (leave blank if not required) -->
     <item id="submitMail">yourdomain.com</item>
   </config>`;

  data = data.concat(finalText);

  return data;
};

export default generateConfigXml;
