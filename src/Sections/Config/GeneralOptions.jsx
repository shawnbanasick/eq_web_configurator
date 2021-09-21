import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UserTextInput from "../../Utils/UserTextInput";
import RadioButtons from "../../Utils/RadioButtons";
import ConfigColorPicker from "./ConfigColorPicker";

const GeneralOptions = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <React.Fragment>
      <SubTitle>General Options</SubTitle>
      <UserTextInput
        label="1. Project title:"
        stateId="configTitle"
        sectionName="config"
        width={30}
        left={0}
      />

      <RadioButtons
        label="2. Setup target:"
        buttonIdArray={["online", "local data collection"]}
        stateId="configSetupTarget"
        sectionName="config"
      />

      <RadioButtons
        label="3. Shuffle statement cards:"
        buttonIdArray={["true", "false"]}
        stateId="configshuffleCards"
        sectionName="config"
      />

      <ColorLabel>
        <div>4. Title bar color (for all pages):</div>
        <ConfigColorPicker
          stateDesig="configHeaderBarColor"
          default="#337ab7"
        />
      </ColorLabel>
    </React.Fragment>
  );
};

export default view(GeneralOptions);

const SubTitle = styled.h1`
  font-size: 30px;
  width: 70vw;
  margin-left: 10px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const ColorLabel = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 70px;
  margin-top: 20px;
  align-items: center;
  gap: 20px;
`;

/* 
const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-top: 20px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`; */
