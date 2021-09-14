import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import exportToXml from "../../Utils/exportToXml";
import GeneralButton from "../../Utils/GeneralButton";
// import appState from "../../GlobalState/appState";
import UserNumberInput from "../../Utils/UserNumberInput";
import RadioButtons from "../../Utils/RadioButtons";
import generateStylesCss from "./generateStylesCss.js";

const handleClick = () => {
  // const userSelectedFilePath = `${appState.userSelectedFilePath}/stylesheets/htmlq.css`;
  const data = generateStylesCss();
  exportToXml("htmlq.css", data, "css");
};

const Styles = () => {
  return (
    <MainContent>
      <GlobalStyle />
      <Title>Font Styles and Statement Numbers</Title>
      <SettingsDiv>
        <SectionHeader>Step #2 and Step #3 Sorting Font Sizes</SectionHeader>
        <UserNumberInput
          label="1. Extra small screens (height less than 720px)"
          step={1}
          value={10}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesXsmallFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="2. Small screens (screen height at least 720px)"
          step={1}
          value={12}
          upperLimit={100}
          lowerLimit={10}
          stateId="stylesSmallFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="3. Medium screens (screen height at least 900px)"
          step={1}
          value={14}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesMediumFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="4. Large screens (screen height at least 1080px)"
          step={1}
          value={16}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesLargeFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="5. Very large screens (screen height at least 1440px)"
          step={1}
          value={18}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesXlargeFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="6. 4k screens (screen height at least 2160px)"
          step={1}
          value={20}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesHdFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="7. iPad - 9.7 inch"
          step={1}
          value={20}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesIpadSmallFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <UserNumberInput
          label="8. iPad Pro - 12.9 inch"
          step={1}
          value={20}
          upperLimit={100}
          lowerLimit={1}
          stateId="stylesIpadLargeFontSize"
          sectionName="styles"
        ></UserNumberInput>
        <SectionHeader2>Statement Numbers</SectionHeader2>
        <RadioButtons
          label="Display statement numbers:"
          buttonIdArray={["true", "false"]}
          stateId="stylesStatementNumberDisplay"
          sectionName="styles"
        />
        <RadioButtons
          label="Statement number size:"
          buttonIdArray={["large", "medium", "small"]}
          stateId="stylesStatementNumberSize"
          sectionName="styles"
        />
        <RadioButtons
          label="Statement number font style:"
          buttonIdArray={["bold", "normal", "faint"]}
          stateId="stylesStatementNumberOpacity"
          sectionName="styles"
        />
      </SettingsDiv>

      <DownloadMapButton onClick={() => handleClick()}>
        Save to the <b>STYLESHEETS</b> folder and replace the "htmlq.css" file
      </DownloadMapButton>
    </MainContent>
  );
};

export default view(Styles);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-size: 18px;
  user-select: none;
`;

const Title = styled.h1`
  font-size: 5vw;
  align-self: center;
`;

const DownloadMapButton = styled(GeneralButton)`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 70%;
  max-width: 500px;
  /* border: 2px solid red; */
`;

const SettingsDiv = styled.div`
  margin-bottom: 30px;
  text-align: left;
  /* border: 2px solid red; */
  padding-left: 20px;
`;

const SectionHeader = styled.h3`
  margin-top: 10px;
  text-align: left;
`;

const SectionHeader2 = styled.h3`
  margin-top: 50px;
  text-align: left;
`;
