import appState from "../../GlobalState/appState";

const clearAddItemForm = () => {
  appState.surveyAnswerRequired = false;
  appState.surveyAnswerRequiredtrueActive = false;
  appState.surveyAnswerRequiredfalseActive = true;

  appState.surveyQuestionLabel = "";
  appState.surveyQuestionNote = "";
  appState.surveyAnswerLenIsLimited = false;
  appState.surveyAnswerLenIsLimitedtrueActive = false;
  appState.surveyAnswerLenIsLimitedfalseActive = false;
  appState.surveyAnswerLenMax = 100000;
  appState.surveyAnswerLenMaxtrueActive = false;
  appState.surveyAnswerLenMaxfalseActive = false;
  appState.surveyAnswerRestricted = false;
  appState.surveyAnswerRestrictedtrueActive = false;
  appState.surveyAnswerRestrictedfalseActive = false;
  appState.surveyQuestionScale = "";
  appState.surveyQuestionOptions = "";

  appState.surveyBackgroundDisplay = true;
  appState.surveyBackgroundDisplaytrueActive = true;
  appState.surveyBackgroundDisplayfalseActive = false;
  return null;
};

export default clearAddItemForm;
