import React, { useState } from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import { useTranslation } from "react-i18next";
import appState from "../GlobalState/appState";

// const clone = require("rfdc")();

const UserNumberInput = (props) => {
  const { t } = useTranslation();

  const key = `${props.stateId}`; // ${props.sectionName}

  // const [value, setValue] = useState(props.value);
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    if (isNaN(value)) {
      return null;
    }

    const key = props.stateId;
    setShowWarning(false);
    const upperLimit = props.upperLimit;
    const lowerLimit = props.lowerLimit;
    const upperLimitValue = props.upperLimit + props.step;
    const lowerLimitValue = props.lowerLimit - props.step;

    // limit according to props boundaries
    if (value <= lowerLimitValue || value >= upperLimitValue) {
      if (value < lowerLimit) {
        value = lowerLimit;
      }
      if (value > upperLimit) {
        value = upperLimit;
      }
      appState[key] = value; // setValue(value);
      // appState[]
      setShowWarning(true);
    } else {
      appState[key] = value; // setValue(value);
    }

    appState[key] = value;
  };

  const warningMessage = `${t("Lower Limit")}: ${props.lowerLimit}, ${t(
    "Upper Limit"
  )}: ${props.upperLimit}`;

  return (
    <UserNumberContainer>
      <TitleSpan>{`${t(props.label)} `}</TitleSpan>
      <NumberInput
        tabindex="0"
        placeholder={props.placeholder}
        name={props.name}
        step={props.step}
        value={appState[key]}
        onChange={handleChange}
        className="optionsInput"
      />
      {showWarning ? (
        <NumberWarningMessage>{warningMessage}</NumberWarningMessage>
      ) : null}
    </UserNumberContainer>
  );
};

export default view(UserNumberInput);

const NumberInput = styled.input.attrs({
  type: "number",
})`
  color: black;
  cursor: pointer;
  margin-bottom: 0;
  width: 75px;
  border-radius: 5px;
  box-sizing: border-box;
  height: 25px;
  border: 1px solid lightgray;
  box-shadow: none;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:hover {
    outline: none;
    background: none;
    box-shadow: none;
  }
`;

const NumberWarningMessage = styled.div`
  margin-left: 10px;
  padding-top: 4px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: lightpink;
  color: black;
  height: 25px;
  width: auto;
  font-size: 14px;
  /* width: 225px; */
`;

const UserNumberContainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 70px;
  width: 90%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border: 2px solid green; */
`;

const TitleSpan = styled.span`
  margin-right: 10px;
`;
