import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UserTextInput from "../../Utils/UserTextInput";
import RadioButtons from "../../Utils/RadioButtons";

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

      <RadioButtons
        label="4. Include individual card comments screen (Step 3):"
        buttonIdArray={["true", "false"]}
        stateId="configShowStep4"
        sectionName="config"
      />

      <RadioButtons
        label="5. Include questionnaire (Step 4):"
        buttonIdArray={["true", "false"]}
        stateId="configShowStep5"
        sectionName="config"
      />
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