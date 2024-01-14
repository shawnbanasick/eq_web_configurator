import appState from "../../GlobalState/appState";

const generateConfigXml = () => {
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

  const headersLookupArray = [
    "N6",
    "N5",
    "N4",
    "N3",
    "N2",
    "N1",
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
  /* 
  const valuesTextArray = [
    "activeValueM6",
    "activeValueM5",
    "activeValueM4",
    "activeValueM3",
    "activeValueM2",
    "activeValueM1",
    "activeValue0",
    "activeValue1",
    "activeValue2",
    "activeValue3",
    "activeValue4",
    "activeValue5",
    "activeValue6",
    "activeValue7",
    "activeValue8",
    "activeValue9",
    "activeValue10",
    "activeValue11",
    "activeValue12",
    "activeValue13",
  ];
 */
  let qSortPatternObject = JSON.parse(
    localStorage.getItem("qSortPatternObject")
  );
  if (!qSortPatternObject) {
    qSortPatternObject = appState.qSortPatternObject;
  }

  const mapColColors = appState.mapColColors;

  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <map version="5.0" htmlParse="false">\n`;

  // CALC COL ARRAYS
  let filteredQSortPatternObject = Object.keys(qSortPatternObject).reduce(
    (property, index) => {
      if (+qSortPatternObject[index] > 0)
        property[index] = qSortPatternObject[index];
      return property;
    },
    {}
  );

  let keys = Object.keys(filteredQSortPatternObject);
  keys = keys.map((x) => +x);
  keys.sort((a, b) => a - b);
  keys = keys.toString();
  // qSortHeaderNumbers for xml - ex -> -4,-3,-2,-1,0,+1,+2,+3,+4
  const qSortHeaderNumbersText = `     <item id="qSortHeaderNumbers">${keys}</item>\n`;
  let qSortHeaders = keys.replace(/-/g, "N");
  // qSortHeaders for xml - ex -> N4,N3,N2,N1,0,1,2,3,4
  const qSortHeadersText = `     <item id="qSortHeaders">${qSortHeaders}</item>\n`;

  // CALC COLS AND COL COLORS ARRAYS
  let qSortPatternArray = [];
  let columnHeadersColorsArray = [];
  let columnColorsArray = [];
  for (let i = 0; i < columnsArray.length; i += 1) {
    let colorString = "";
    let value = parseInt(columnsArray[i], 10);
    let numStates = parseInt(qSortPatternObject[columnsArray[i]], 10) || 0;
    // for Q sort pattern array
    if (numStates !== 0) {
      qSortPatternArray.push(numStates);
      // for colors arrays
      if (mapColColors === "No Coloring") {
        columnHeadersColorsArray.push("whitesmoke");
        columnColorsArray.push("whitesmoke");
      }

      let colorIndex = `colCol${headersLookupArray[i]}`;

      let color = localStorage.getItem(colorIndex);
      if (!color) {
        color = appState[colorIndex];
      }

      if (mapColColors === "Headers") {
        columnHeadersColorsArray.push(color);
        columnColorsArray.push("whitesmoke");
      }
      if (mapColColors === "Headers and Columns") {
        columnHeadersColorsArray.push(color);
        columnColorsArray.push(color);
      }
    }

    let mapString;
    if (value > 0) {
      colorString = `colour="9FDFBF"`;
    } else if (value < 0) {
      colorString = `colour="FFD5D5"`;
    } else {
      colorString = `colour="E9E9E9"`;
    }
    // format string
    if (numStates > 0) {
      mapString = `     <column id="${value}" ${colorString}>${numStates}</column>\n`;
      data = data.concat(mapString);
    }
  }

  // qSortPattern for xml - ex -> 2,3,4,5,5,5,4,3,2
  let qSortPatternString = qSortPatternArray.toString();
  const qSortPatternArrayText = `     <item id="qSortPattern">${qSortPatternString}</item>\n`;

  let columnHeadersColorsString = columnHeadersColorsArray.toString();
  let columnColorsString = columnColorsArray.toString();
  const columnHeadersColorsText = `     <item id="columnHeadersColorsArray">${columnHeadersColorsString}</item>\n`;
  const columnColorsText = `     <item id="columnColorsArray">${columnColorsString}</item>\n`;

  // Concat arrays into file
  data = data.concat(
    qSortHeaderNumbersText,
    qSortHeadersText,
    qSortPatternArrayText,
    columnHeadersColorsText,
    columnColorsText
  );

  // end file
  const endingText = `   </map>`;
  data = data.concat(endingText);

  return data;
};

export default generateConfigXml;
