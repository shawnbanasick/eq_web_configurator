import React from "react";
import { view } from "@risingstack/react-easy-state";
import ConfigColorPicker from "./ConfigColorPicker";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import RadioButtons from "../../Utils/RadioButtons";
import UserNumberInput from "../../Utils/UserNumberInput";

const PresortOptions = (props) => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

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
        label="2-7a. Set default font size - Presort Page:"
        buttonIdArray={["true", "false"]}
        stateId="configSetDefaultFontSizePresort"
        sectionName="config"
      />

      <UserNumberInput
        label="2-7b. Default Presort font size:"
        step={1}
        value={20}
        upperLimit={800}
        lowerLimit={6}
        stateId="configDefaultSortFontSizePresort"
        sectionName="config"
      />

      <RadioButtons
        label="2-7c. Set default font size - Sort Page:"
        buttonIdArray={["true", "false"]}
        stateId="configSetSortDefaultFontSizeSort"
        sectionName="config"
      />

      <UserNumberInput
        label="2-7d. Default Sort font size:"
        step={1}
        value={20}
        upperLimit={800}
        lowerLimit={6}
        stateId="configDefaultSortFontSizeSort"
        sectionName="config"
      />
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
