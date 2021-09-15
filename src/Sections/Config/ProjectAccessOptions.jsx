import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UserTextInput from "../../Utils/UserTextInput";
import RadioButtons from "../../Utils/RadioButtons";
import FadeIn from "./FadeIn";

const ProjectAccessOptions = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  let configAccess = appState.configAccess;
  let showAccessCodeInput;
  if (configAccess === "ID only" || configAccess === "anonymous") {
    showAccessCodeInput = false;
  } else {
    showAccessCodeInput = true;
  }

  return (
    <React.Fragment>
      <SubTitle>Project Access</SubTitle>
      {displayMode && (
        <DisplayModeText>
          <strong>Project Access</strong>
          <br /> There are four access options available:
          <br />
          <br />* anonymous (no sign-in screen shown)
          <br />* Name or Participant ID
          <br />* Name or Participant ID and Access Code
          <br />* Access Code only
          <br />
          <br />
          Currently, any text is accepted for the Name or Participant ID. The
          project access code will be the same for all participants. The code
          can be a phrase or a single word, and is case-sensitive.
        </DisplayModeText>
      )}

      <RadioButtons
        label="7a. Project Access:"
        buttonIdArray={[
          "anonymous",
          "Name only",
          "Name + access code",
          "access code only",
        ]}
        stateId="configAccess"
        sectionName="config"
      />

      {showAccessCodeInput && (
        <FadeIn delay={150} duration={1050}>
          <UserTextInput
            label="7b. Project Access Code:"
            stateId="configLogInPassword"
            sectionName="config"
            width={30}
            left={0}
          />
        </FadeIn>
      )}
    </React.Fragment>
  );
};

export default view(ProjectAccessOptions);

const SubTitle = styled.h1`
  font-size: 30px;
  width: 70vw;
  margin-left: 10px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`;
