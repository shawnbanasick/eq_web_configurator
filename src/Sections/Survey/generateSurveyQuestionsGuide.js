const stripHtml = (text) => {
  text = text.replaceAll("{{{b}}}", "");
  text = text.replaceAll("{{{/b}}}", "");
  text = text.replaceAll("{{{i}}}", "");
  text = text.replaceAll("{{{/i}}}", "");
  text = text.replaceAll("{{{u}}}", "");
  text = text.replaceAll("{{{/u}}}", "");
  text = text.replaceAll("{{{mark}}}", "");
  text = text.replaceAll("{{{/mark}}}", "");
  text = text.replaceAll("{{{center}}}", "");
  text = text.replaceAll("{{{/center}}}", "");
  text = text.replaceAll("{{{strong}}}", "");
  text = text.replaceAll("{{{/strong}}}", "");
  return text.trim();
};

const generateSurveyQuestionsGuide = (surveyQuestions) => {
  const surveyQuestionsGuide = {};
  let returnText = "EQ Web Sort Survey Results Interpretation Guide\n\n";
  surveyQuestions.forEach((question, index) => {
    console.log(question);
    // surveyQuestionsGuide[question.id] = question;

    if (question.surveyQuestionType === "information") {
      returnText = returnText += `Survey item number: ${index + 1}\n`;
      returnText = returnText += `Item type: information\n`;
      returnText = returnText += `Item information text: ${stripHtml(
        question.note
      )}\n`;
      returnText = returnText += `\n`;
    }

    if (question.surveyQuestionType === "text") {
      returnText = returnText += `Survey item number: ${index + 1}\n`;
      returnText = returnText += `Item type: text input\n`;
      returnText = returnText += `Item: ${stripHtml(question.label)}\n`;
      returnText = returnText += `   response: participant input\n`;
      returnText = returnText += `\n`;
    }

    if (question.surveyQuestionType === "textarea") {
      returnText = returnText += `Survey item number: ${index + 1}\n`;
      returnText = returnText += `Item type: text area input\n`;
      returnText = returnText += `Item: ${stripHtml(question.label)}\n`;
      returnText = returnText += `   response: participant input\n`;
      returnText = returnText += `\n`;
    }

    if (question.surveyQuestionType === "radio") {
      returnText = returnText += `Survey item number: ${index + 1}\n`;
      returnText = returnText += `Item type: radio / vertical likert\n`;
      returnText = returnText += `Item: ${stripHtml(question.label)}\n`;
      let optionsArray = question.options.split(";;;");
      optionsArray.forEach((scaleItem, index) => {
        if (scaleItem.length > 0) {
          returnText = returnText += `   response ${index + 1}: ${stripHtml(
            scaleItem
          )}\n`;
        }
      });
      returnText = returnText += `\n`;
    }

    if (question.surveyQuestionType === "select") {
      returnText = returnText += `Survey item number: ${index + 1}\n`;
      returnText = returnText += `Item type: select\n`;
      returnText = returnText += `Item: ${stripHtml(question.label)}\n`;
      let optionsArray = question.options.split(";;;");
      optionsArray.forEach((scaleItem, index) => {
        if (scaleItem.length > 0) {
          returnText = returnText += `   response ${index + 1}: ${stripHtml(
            scaleItem
          )}\n`;
        }
      });
      returnText = returnText += `\n`;
    }
    if (question.surveyQuestionType === "checkbox") {
      returnText = returnText += `Survey item number: ${index + 1}\n`;
      returnText = returnText += `Item type: checkbox\n`;
      returnText = returnText += `Item: ${stripHtml(question.label)}\n`;
      let optionsArray = question.options.split(";;;");
      optionsArray.forEach((scaleItem, index) => {
        if (scaleItem.length > 0) {
          returnText = returnText += `   response ${index + 1}: ${stripHtml(
            scaleItem
          )}\n`;
        }
      });
      returnText = returnText += `\n`;
    }
    if (question.surveyQuestionType === "likert") {
      returnText = returnText += `Survey item number: ${index + 1}\n`;
      returnText = returnText += `Item type: likert\n`;
      returnText = returnText += `Item: ${stripHtml(question.label)}\n`;
      let scaleArray = question.scale.split(";;;");
      scaleArray.forEach((scaleItem, index) => {
        if (scaleItem.length > 0) {
          returnText = returnText += `   response ${index + 1}: ${stripHtml(
            scaleItem
          )}\n`;
        }
      });
      returnText = returnText += `\n`;
    }
    if (question.surveyQuestionType === "rating2") {
      returnText = returnText += `Survey item number: ${index + 1}\n`;
      returnText = returnText += `Item type: rating 2\n`;
      returnText = returnText += `Item: ${stripHtml(question.label)}\n`;
      let scaleArray = question.scale.split(";;;");
      scaleArray.forEach((scaleItem, index) => {
        if (scaleItem.length > 0) {
          returnText = returnText += `   response ${index + 1}: ${stripHtml(
            scaleItem
          )}\n`;
        }
      });
      let optionsArray = question.options.split(";;;");
      optionsArray.forEach((scaleItem, index) => {
        if (scaleItem.length > 0) {
          returnText = returnText += `   question item ${
            index + 1
          }: ${stripHtml(scaleItem)}\n`;
        }
      });
      returnText = returnText += `\n`;
    }
    if (question.surveyQuestionType === "rating5") {
      returnText = returnText += `Survey item number: ${index + 1}\n`;
      returnText = returnText += `Item type: rating 5\n`;
      returnText = returnText += `Item: ${stripHtml(question.label)}\n`;
      returnText = returnText += `   response: participant input values 1-5\n`;
      let optionsArray = question.options.split(";;;");
      optionsArray.forEach((scaleItem, index) => {
        if (scaleItem.length > 0) {
          returnText = returnText += `   question item ${
            index + 1
          }: ${stripHtml(scaleItem)}\n`;
        }
      });
      returnText = returnText += `\n`;
    }
    if (question.surveyQuestionType === "rating10") {
      returnText = returnText += `Survey item number: ${index + 1}\n`;
      returnText = returnText += `Item type: rating 5\n`;
      returnText = returnText += `Item: ${stripHtml(question.label)}\n`;
      returnText = returnText += `   response: participant input values 1-10\n`;
      let optionsArray = question.options.split(";;;");
      optionsArray.forEach((scaleItem, index) => {
        if (scaleItem.length > 0) {
          returnText = returnText += `   question item ${
            index + 1
          }: ${stripHtml(scaleItem)}\n`;
        }
      });
      returnText = returnText += `\n`;
    }
    console.log(returnText);
  });
  return returnText;
};

export default generateSurveyQuestionsGuide;
