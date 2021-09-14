import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import appState from "../GlobalState/appState";

// const clone = require("rfdc")();

const UserTextInput = (props) => {
  // props = label, stateId, sectionName, width, left
  const { t } = useTranslation();

  const key = `${props.stateId}`; // ${props.sectionName}

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    appState[key] = value;
  };

  return (
    <InputContainerDiv>
      <TitleSpan>{`${t(props.label)} `}</TitleSpan>
      <UserText
        tabindex="0"
        type="text"
        placeholder={props.placeholder}
        width={props.width}
        height={props.height}
        left={props.left}
        name={props.name}
        value={appState[key] || ""}
        onChange={handleChange}
        className="optionsInput"
      />
    </InputContainerDiv>
  );
};

export default view(UserTextInput);

const UserText = styled.textarea((props) => ({
  width: `${props.width + 26}%`,
  height: `${props.height}px`,
  marginLeft: `${props.left}px`,
  marginTop: `25px`,
  paddingLeft: `10px`,
}));

const InputContainerDiv = styled.div`
  display: flex;
  margin-left: 70px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TitleSpan = styled.span`
  margin-right: 10px;
`;
