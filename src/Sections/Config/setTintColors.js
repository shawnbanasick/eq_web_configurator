import appState from "../../GlobalState/appState";

const setTintColors = () => {
  localStorage.setItem("colColN6", "#ff7676");
  localStorage.setItem("colColN5", "#ff8989");
  localStorage.setItem("colColN4", "#ff9d9d");
  localStorage.setItem("colColN3", "#ffb1b1");
  localStorage.setItem("colColN2", "#ffc4c4");
  localStorage.setItem("colColN1", "#ffd8d8");
  localStorage.setItem("colCol0", "#F3F4F6");
  localStorage.setItem("colCol1", "#d8ffd8");
  localStorage.setItem("colCol2", "#c4ffc4");
  localStorage.setItem("colCol3", "#b1ffb1");
  localStorage.setItem("colCol4", "#9dff9d");
  localStorage.setItem("colCol5", "#89ff89");
  localStorage.setItem("colCol6", "#3bff3b");

  appState.colColN6 = "#ff7676";
  appState.colColN5 = "#ff8989";
  appState.colColN4 = "#ff9d9d";
  appState.colColN3 = "#ffb1b1";
  appState.colColN2 = "#ffc4c4";
  appState.colColN1 = "#ffd8d8";
  appState.colCol0 = "#F3F4F6";
  appState.colCol1 = "#d8ffd8";
  appState.colCol2 = "#c4ffc4";
  appState.colCol3 = "#b1ffb1";
  appState.colCol4 = "#9dff9d";
  appState.colCol5 = "#89ff89";
  appState.colCol6 = "#3bff3b";
};

export default setTintColors;
