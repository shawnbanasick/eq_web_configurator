import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UserTextInput from "../../Utils/UserTextInput";
// import logoImage from "../../assets/images/EQ-logo.png";
import logoImage from "../../assets/images/EQ_default.svg";
import folderImage from "../../assets/images/images-folder-image.png";

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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.figma.com/"
          >
            Figma
          </a>{" "}
          or similar software can be used to make a custom image (40 pixels
          height by 250 pixels width in png format) that can be used as a logo
          in the footer. JPG, SVG, and other filetypes will not work. It must be
          in PNG format. The hex color code for the footer background color is
          "#ececec".
          <br />
          <br />
          The name of your custom file must be: &nbsp;&nbsp;&nbsp;&nbsp;
          logo.png
          <br />
          <br />
          Add your custom image to the
          <b>"images" folder</b> of your EQ Web Sort project and replace the
          default file.
          <br />
          <ImageContainer>
            <img src={folderImage} width="550" alt="s" />
          </ImageContainer>
        </DisplayModeText>
      )}
      <ImageContainer>
        <div>Default logo image: </div>
        <img src={logoImage} width="250" alt="s" />
      </ImageContainer>

      <LogoText>
        <span>
          6. Custom Logo:&nbsp;&nbsp;If desired, you can create a custom logo in
          png format with the name &nbsp;&nbsp;&nbsp; <b>logo.png</b>
          &nbsp;&nbsp;&nbsp;and replace the default image in the <b>
            images
          </b>{" "}
          folder of your EQ Web Sort project.
        </span>
      </LogoText>
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

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 10px;
  gap: 30px;
`;

const LogoText = styled.div`
  margin-top: 20px;
  margin-left: 70px;
  max-width: 900px;
`;
