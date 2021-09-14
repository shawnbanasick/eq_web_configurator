import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UserTextInput from "../../Utils/UserTextInput";

const CustomLogo = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <React.Fragment>
      <SubTitle>Custom Logo Footer Image</SubTitle>
      {displayMode && (
        <DisplayModeText>
          Figma (https://www.figma.com) or similar software can be used to make
          a custom image (40 pixels height by 250 pixels width in PNG or SVG
          format) can be used as a logo in the footer. Add the image to the
          "images" folder and input the exact name here. The hex color code for
          the footer background color is "#ececec"
        </DisplayModeText>
      )}

      <UserTextInput
        label="7. Custom Logo Image Name:"
        stateId="configLogoHtml"
        sectionName="config"
        width={30}
        left={0}
      />
    </React.Fragment>
  );
};

export default view(CustomLogo);

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