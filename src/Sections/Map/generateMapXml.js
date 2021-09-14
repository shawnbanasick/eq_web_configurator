import appState from "../../GlobalState/appState";

const qSortPatternObject = appState.qSortPatternObject;
const columnsArray = [
  "-6",
  "-5",
  "-4",
  "-3",
  "-2",
  "-1",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
];

const generateConfigXml = () => {
  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <map version="1.0" htmlParse="false">\n`;

  for (let i = 0; i < columnsArray.length; i += 1) {
    let colorString = "";
    let value = parseInt(columnsArray[i], 10);
    let numStates = parseInt(qSortPatternObject[columnsArray[i]], 10) || 0;
    let mapString;

    if (value > 0) {
      colorString = `colour="9FDFBF"`;
    } else if (value < 0) {
      colorString = `colour="FFD5D5"`;
    } else {
      colorString = `colour="E9E9E9"`;
    }

    if (numStates > 0) {
      mapString = `     <column id="${value}" ${colorString}>${numStates}</column>\n`;
      data = data.concat(mapString);
    }
  }

  const endingText = `   </map>`;
  data = data.concat(endingText);

  return data;
};

export default generateConfigXml;
