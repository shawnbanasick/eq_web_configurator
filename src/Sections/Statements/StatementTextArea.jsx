import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UploadStatementsXmlButton from "./UploadStatementsXmlButton";

const handleChange = (event) => {
  let statementInput = event.target.value;
  appState.currentStatements = statementInput;
  localStorage.setItem("currentStatements", statementInput);
};

const StatementTextArea = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  appState.currentStatements = localStorage.getItem("currentStatements");

  return (
    <Container>
      {displayMode && (
        <DisplayModeText>
          If you have statements from a previous EQ Web Sort project, you can
          click on the orange "Load 'statements.xml' File Data" button to upload
          the statements.xml file.
          <br />
          <br />
          Statements can include HTML paired tag formatting if desired:
          <ul>
            <li>
              &lt;b&gt;&nbsp;bold &nbsp;&lt;/b&gt; produces <b>bold </b>
            </li>
            <li>
              &lt;u&gt;&nbsp;underlined &nbsp;&lt;/u&gt; produces{" "}
              <u>underlined </u>
            </li>
            <li>
              &lt;i&gt;&nbsp;italicized &nbsp;&lt;/i&gt; produces{" "}
              <i>italicized </i>
            </li>
            <li>
              &lt;b&gt;&lt;u&gt;&lt;i&gt;&nbsp;all three nested tags
              &lt;/i&gt;&lt;/u&gt;&lt;/b&gt; produces{" "}
              <b>
                <u>
                  <i>all three nested tags</i>
                </u>
              </b>
            </li>
          </ul>
          Other information on HTML paired tag formatting can be found in the
          Config section.
          <br />
          <br />
          When you have finished adding your statements, click the orange button
          at the bottom of the page and save your information as
          'statements.xml' in the settings folder (replace the default file).
        </DisplayModeText>
      )}
      <UploadStatementsXmlButton />
      <label>Enter or Paste Statements (1 statement per line) : </label>
      <StatementTextsInput
        type="textarea"
        name="textValue"
        value={appState.currentStatements || ""}
        onChange={handleChange}
      />
    </Container>
  );
};

export default view(StatementTextArea);

const StatementTextsInput = styled.textarea`
  width: clamp(500px, 80vw, 1500px);
  height: 400px;
  margin-top: 10px;
  margin-bottom: 30px;
  user-select: all;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-top: 40px;
  margin-bottom: 30px;
  width: 78vw;
  max-width: 1200px;
  font-size: 20px;
  padding: 10px;
  background: whitesmoke;
  border-radius: 3px;

  border: 2px solid black;
`;
