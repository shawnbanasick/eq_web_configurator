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
  appState.surveyPlaceholder = "";

  appState.surveyBackgroundDisplay = true;
  appState.surveyBackgroundDisplaytrueActive = true;
  appState.surveyBackgroundDisplayfalseActive = false;

  localStorage.setItem("surveyQuestionLabel", "");
  localStorage.setItem("surveyQuestionNote", "");
  localStorage.setItem("surveyQuestionScale", "");
  localStorage.setItem("surveyQuestionOptions", "");
  localStorage.setItem("surveyPlaceholder", "");

  return null;
};

export default clearAddItemForm;
