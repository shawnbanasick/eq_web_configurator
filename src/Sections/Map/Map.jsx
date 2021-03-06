import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import MapInputElement from "./MapInputElement";
import exportToXml from "../../Utils/exportToXml";
import generateMapXml from "./generateMapXml";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import MapRadioButtons from "../../Utils/MapRadioButtons";
import UploadMapXmlButton from "./UploadMapXmlButton";

const handleClick = () => {
  const data = generateMapXml();

  exportToXml("map.xml", data, "xml");
};

const Map = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  let statements = localStorage.getItem("currentStatements") || "";
  let arr = statements.split(/\r\n|\r|\n/g);
  let filteredArray = arr.filter(function (el) {
    return el;
  });
  let numStatements = filteredArray.length;
  if (numStatements === 0) {
    numStatements = "No";
  }

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Q Sort Grid Settings</Title>
      <h2>{numStatements} Statements Loaded</h2>
      {displayMode && (
        <DisplayModeText>
          If you have a "map.xml" from a previous EQ Web Sort project, you can
          click on the orange "Load 'map.xml' File Data" button to upload the
          file.
          <br />
          <br />
          Enter the number of cards in each column of the Q-sort grid. The
          background color of the "Q Sort Pattern" text will change to green
          when all of your statements have been allocated.
          <br />
          <br />
          When you have finished setting up the columns, click the orange button
          at the bottom of the page and save your information as 'map.xml' in
          the settings folder (replace the default file).
        </DisplayModeText>
      )}

      <UploadButtonContainer>
        <UploadMapXmlButton />
      </UploadButtonContainer>

      <MapInputElement numStatements={numStatements} />

      <MapRadioButtons
        label="Color Palette:"
        buttonIdArray={["Steps", "Tints", "Custom"]}
        stateId="mapColorPalette"
        sectionName="map"
      />

      <MapRadioButtons
        label="Color Use:"
        buttonIdArray={["Headers", "Headers and Columns", "No Coloring"]}
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
  color: var(--font-color);
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

const UploadButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 78%;
  max-width: 1000px;
  /* border-radius: 3px; */
`;
