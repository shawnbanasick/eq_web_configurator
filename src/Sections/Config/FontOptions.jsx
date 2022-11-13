import React from "react";
import { view, store } from "@risingstack/react-easy-state";
import ConfigColorPicker from "./ConfigColorPicker";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import RadioButtons from "../../Utils/RadioButtons";
import FadeIn from "./FadeIn";
import UserNumberInput from "../../Utils/UserNumberInput";

const PresortOptions = (props) => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  const localState = store({ displayItem: true });

  const setValue = (value) => {
    if (value === true || value === "true") {
      localState.displayItem = true;
      return true;
    } else {
      localState.displayItem = false;
      return false;
    }
  };

  let showMinCardHeightInput = setValue(appState.configSetDefaultFontSize);

  return (
    <React.Fragment>
      <SubTitle>Font Options</SubTitle>

      {displayMode && (
        <DisplayModeText>
          Here you can set the font color and default font size for both the
          Presort and Sort screens.
        </DisplayModeText>
      )}
      <ColorLabel>
        <div>2-6. Font color:</div>
        <ConfigColorPicker stateDesig="defaultFontColor" default="#2a2a2a" />
        (Default color is "2a2a2a")
      </ColorLabel>
      <RadioButtons
        label="2-7a. Set default font size:"
        buttonIdArray={["true", "false"]}
        stateId="configSetDefaultFontSize"
        sectionName="config"
      />
      {showMinCardHeightInput && (
        <FadeIn delay={150} duration={1050}>
          <UserNumberInput
            label="2-7b. Default font size:"
            step={1}
            value={20}
            upperLimit={800}
            lowerLimit={50}
            stateId="configDefaultFontSize"
            sectionName="config"
          />
        </FadeIn>
      )}
    </React.Fragment>
  );
};

export default view(PresortOptions);

const SubTitle = styled.h1`
  font-size: 30px;
  width: 70vw;
  margin-left: 10px;
  margin-top: 50px;
`;

const ColorLabel = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 70px;
  margin-top: 20px;
  align-items: center;
  gap: 20px;
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
