import React from "react";
import { view } from "@risingstack/react-easy-state";
import ConfigColorPicker from "./ConfigColorPicker";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UserNumberInput from "../../Utils/UserNumberInput";
import RadioButtons from "../../Utils/RadioButtons";

const PresortOptions = (props) => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <React.Fragment>
      <SubTitle>Presort Options (Step 1)</SubTitle>

      {displayMode && (
        <DisplayModeText>
          The same presort colors are also used for the statement cards in the
          sort grid. If you want to use without color, you can set all three
          color values to the same light gray color.
          <br />
          <br />
          If <b>"Link presort values to sort values in output file"</b> is set
          to "true", then additional information will be added to the output
          file in the following format for all statements/images:
          <br />
          <br />
          "1*u*2", <br /> <br />
          where: <br />
          <br />
          "1" is the statement/image number <br />
          <br />
          "*" is a separator <br />
          <br />
          "u" indicates that the statement/image was placed in the uncertain or
          middle column of the presort. If this value is "p", it indicates that
          the statement/image was placed in the postive or right-side column. If
          this value is "n", it indicates that the statement/image was placed in
          the negative or left-side column of the presort.
          <br />
          <br />
          "2" is the sort value for the statement/image
        </DisplayModeText>
      )}

      <ColorLabel>
        <div>2-8. Statement font color:</div>
        <ConfigColorPicker stateDesig="defaultFontColor" default="#2a2a2a" />
        (Default color is "2a2a2a")
      </ColorLabel>

      <UserNumberInput
        label="2-9. Default presort statement font size:"
        step={1}
        value={20}
        upperLimit={800}
        lowerLimit={6}
        stateId="configDefaultFontSizePresort"
        sectionName="config"
      />

      <ColorLabel>
        <div>2-10a. Positive card color:</div>
        <ConfigColorPicker stateDesig="greenCardColor" default="#ccffcc" />
        (Default color is "ccffcc")
      </ColorLabel>

      <ColorLabel>
        <div>2-10b. Neutral card color:</div>
        <ConfigColorPicker stateDesig="yellowCardColor" default="#e0e0e0" />
        (Default color is "e0e0e0")
      </ColorLabel>

      <ColorLabel>
        <div>2-10c. Negative card color:</div>
        <ConfigColorPicker stateDesig="pinkCardColor" default="#ffe0f0" />
        (Default color is "ffe0f0")
      </ColorLabel>

      <RadioButtons
        label="2-11. Link presort values to sort values in output file"
        buttonIdArray={["true", "false"]}
        stateId="configPresortTrace"
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
