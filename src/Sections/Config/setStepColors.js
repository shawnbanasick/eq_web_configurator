import appState from "../../GlobalState/appState";

const setStepColors = () => {
  localStorage.setItem("colColN6", "#E02424");
  localStorage.setItem("colColN5", "#F05252");
  localStorage.setItem("colColN4", "#F98080");
  localStorage.setItem("colColN3", "#F8B4B4");
  localStorage.setItem("colColN2", "#FBD5D5");
  localStorage.setItem("colColN1", "#FDE8E8");
  localStorage.setItem("colCol0", "#F3F4F6");
  localStorage.setItem("colCol1", "#DEF7EC");
  localStorage.setItem("colCol2", "#BCF0DA");
  localStorage.setItem("colCol3", "#84E1BC");
  localStorage.setItem("colCol4", "#31C48D");
  localStorage.setItem("colCol5", "#0E9F6E");
  localStorage.setItem("colCol6", "#057A55");

  appState.colColN6 = "#E02424";
  appState.colColN5 = "#F05252";
  appState.colColN4 = "#F98080";
  appState.colColN3 = "#F8B4B4";
  appState.colColN2 = "#FBD5D5";
  appState.colColN1 = "#FDE8E8";
  appState.colCol0 = "#F3F4F6";
  appState.colCol1 = "#DEF7EC";
  appState.colCol2 = "#BCF0DA";
  appState.colCol3 = "#84E1BC";
  appState.colCol4 = "#31C48D";
  appState.colCol5 = "#0E9F6E";
  appState.colCol6 = "#057A55";
};

export default setStepColors;
