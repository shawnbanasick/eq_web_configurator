import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";

const handleChange = (event) => {
  let statementInput = event.target.value;
  appState.currentStatementInput = statementInput;
  let arr = statementInput.split(/\r\n|\r|\n/g);
  let filteredArray = arr.filter(function (el) {
    return el;
  });
  appState.statements = filteredArray;
};

const StatementTextArea = () => {
  return (
    <Container>
      <label>Enter or Paste Statements (1 statement per line) : </label>
      <StatementTextsInput
        type="textarea"
        name="textValue"
        value={appState.currentStatementInput || ""}
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
  user-select: all;
`;
