import appState from "../../GlobalState/appState";

const generateStatementXml = () => {
  let statementsArray = appState.statements;

  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <statements version="1.0" htmlParse="false">\n`;

  for (let i = 0; i < statementsArray.length; i += 1) {
    let string = `     <statement id="${i + 1}">${
      statementsArray[i]
    }</statement>\n`;

    data = data.concat(string);
    // }
  }

  const endingText = `   </statements>`;
  data = data.concat(endingText);

  return data;
};

export default generateStatementXml;
