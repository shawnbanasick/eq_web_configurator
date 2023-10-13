// import appState from "../../GlobalState/appState";
import encodeHTML from "../../Utils/encodeHTML";

const generateStatementXml = () => {
  // let statementsArray = appState.statements;
  let statements = localStorage.getItem("currentStatements");
  let arr = statements.split(/\r\n|\r|\n/g);
  let filteredArray = arr.filter(function (el) {
    return el;
  });
  const statementsArray = filteredArray;

  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <statements version="3.0" htmlParse="false">\n`;

  for (let i = 0; i < statementsArray.length; i += 1) {
    let string = `     <statement id="${i + 1}">${encodeHTML(
      statementsArray[i]
    )}</statement>\n`;

    data = data.concat(string);
    // }
  }

  const endingText = `   </statements>`;
  data = data.concat(endingText);

  return data;
};

export default generateStatementXml;
