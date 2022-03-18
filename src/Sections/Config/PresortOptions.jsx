import React from "react";
import { view } from "@risingstack/react-easy-state";
import ConfigColorPicker from "./ConfigColorPicker";
import styled from "styled-components";
import appState from "../../GlobalState/appState";

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
        </DisplayModeText>
      )}
      <ColorLabel>
        <div>2-6a. Positive Card Color:</div>
        <ConfigColorPicker stateDesig="greenCardColor" default="#ccffcc" />
        (Default color is "ccffcc")
      </ColorLabel>

      <ColorLabel>
        <div>2-6b. Neutral Card Color:</div>
        <ConfigColorPicker stateDesig="yellowCardColor" default="#e0e0e0" />
        (Default color is "e0e0e0")
      </ColorLabel>

      <ColorLabel>
        <div>2-6c. Negative Card Color:</div>
        <ConfigColorPicker stateDesig="pinkCardColor" default="#ffe0f0" />
        (Default color is "ffe0f0")
      </ColorLabel>
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
