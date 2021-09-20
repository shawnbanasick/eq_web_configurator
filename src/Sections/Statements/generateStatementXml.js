import appState from "../../GlobalState/appState";
import encodeHTML from "../../Utils/encodeHTML";

const generateStatementXml = () => {
  let statementsArray = appState.statements;

  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <statements version="1.0" htmlParse="false">\n`;

  for (let i = 0; i < statementsArray.length; i += 1) {
    let string = `     <statement id="${i + 1}">{{{div}}}${encodeHTML(
      statementsArray[i]
    )}{{{/div}}}</statement>\n`;

    data = data.concat(string);
    // }
  }

  const endingText = `   </statements>`;
  data = data.concat(endingText);

  return data;
};

export default generateStatementXml;
