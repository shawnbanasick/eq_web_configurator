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
      <SubTitle>Presort Options</SubTitle>

      {displayMode && (
        <DisplayModeText>
          You can set the color by moving the selector in the color picker
          (click on the colored squares below) or by using html hex codes (input
          the code at the bottom of the color picker box). There are many html
          hex color code websites that can help you find appropriate colors. The
          same presort colors are also displayed on the cards in the sort grid.
          To use without color, set all three color values to "e0e0e0".
        </DisplayModeText>
      )}
      <ColorLabel>
        <div>8a. Positive Card Color:</div>
        <ConfigColorPicker card="greenCardColor" default="#ccffcc" />
      </ColorLabel>

      <ColorLabel>
        <div>8b. Neutral Card Color:</div>
        <ConfigColorPicker card="yellowCardColor" default="#e0e0e0" />
      </ColorLabel>

      <ColorLabel>
        <div>8c. Negative Card Color:</div>
        <ConfigColorPicker card="pinkCardColor" default="#ffe0f0" />
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