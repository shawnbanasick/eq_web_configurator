import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import MapInputElement from "./MapInputElement";
import exportToXml from "../../Utils/exportToXml";
import generateMapXml from "./generateMapXml";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import RadioButtons from "../../Utils/RadioButtons";

const handleClick = () => {
  // const userSelectedFilePath = `${appState.userSelectedFilePath}/settings/map.xml`;
  const data = generateMapXml();

  exportToXml("map.xml", data, "xml");
};

const handleDefaultColor = (e) => {
  console.log(e.target.id);
  appState.setSampleColor = e.target.id;
  appState.displaySampleColorRange = true;
};

const Map = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  let numStatements = appState.statements.length;
  if (numStatements === 0) {
    numStatements = "No";
  }

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Q sort Grid Settings</Title>
      <h2>{numStatements} Statements Loaded</h2>
      {displayMode && (
        <DisplayModeText>
          Input the statements first and then enter the number of cards in each
          column of the Q-sort grid here. The background color of the "Q Sort
          Pattern" text will change to green when all of the statements have
          been allocated.
        </DisplayModeText>
      )}
      <MapInputElement />

      <DefaultButtonContainer>
        <div>1. Sample Color Range</div>
        <DefaultButton
          id="sample1"
          leftMar={"10px"}
          onClick={handleDefaultColor}
        >
          Sample 1
        </DefaultButton>
        <DefaultButton
          id="sample2"
          leftMar={"2px"}
          onClick={handleDefaultColor}
        >
          Sample 2
        </DefaultButton>
      </DefaultButtonContainer>

      <RadioButtons
        label="2. Color target:"
        buttonIdArray={["headers", "headers and columns", "no coloring"]}
        stateId="mapColColors"
        sectionName="map"
      />

      <DownloadMapButton onClick={() => handleClick()}>
        Click here to save file to <b>SETTINGS</b> folder and replace the
        "map.xml" file
      </DownloadMapButton>
    </MainContent>
  );
};

export default view(Map);

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
  justify-items: center;
  align-items: center;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-size: 18px;
  user-select: none;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 600px;
  align-items: center;
  justify-content: center;
`;

const DownloadMapButton = styled(GeneralButton)`
  width: 300px;
  margin-top: 50px;
  background-color: #eb8100;
  border: 1px solid black;
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-bottom: 50px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`;

const DefaultButton = styled(GeneralButton)`
  margin-left: ${(props) => props.leftMar};
`;

const DefaultButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
