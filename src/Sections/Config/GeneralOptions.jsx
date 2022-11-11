import React from "react";
import { view, store } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UserTextInput from "../../Utils/UserTextInput";
import RadioButtons from "../../Utils/RadioButtons";
import ConfigColorPicker from "./ConfigColorPicker";
import IncompatibleFileModal from "./IncompatibleFileModal";

const GeneralOptions = () => {
  const localState = store({ displayItem: true });

  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  const setSheetsDisplay = (value) => {
    if (value === "Google Sheets") {
      localState.displayItem = true;
      return true;
    } else {
      localState.displayItem = false;
      return false;
    }
  };

  let showSheetsConfigMessage = setSheetsDisplay(appState.configSetupTarget);
  console.log(showSheetsConfigMessage);

  return (
    <React.Fragment>
      <SubTitle>General Options</SubTitle>
      <IncompatibleFileModal />

      {displayMode && (
        <DisplayModeText>
          If you are planning to do the usual online Q sort project, leave the
          setup target set to "<b>firebase</b>". The "<b>local</b>" option
          transforms EQ Web Sort into a tool for in-person data collection using
          a notebook computer. For more information see the "Local Data
          Collection" user guide on the EQ Web Sort homepage. The{" "}
          <b>"gSheets"</b> option allows you to use one of your{" "}
          <b>Google Sheets</b> as a database for the application (requires use
          of 3rd party web application). Setup information is in the database
          section.
          <br />
          <br />
          For option #4 - title bar color - you can set the color by moving the
          selector in the color picker (click on the blue square below) or by
          using html hex codes (input the code at the bottom of the color picker
          box). To find an appropriate color, there are many websites that can
          help you find the hex codes for custom colors, but I usually use{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.colorhexa.com/"
          >
            ColorHexa
          </a>
          .{" "}
        </DisplayModeText>
      )}

      <UserTextInput
        label="2-1. Project title:"
        stateId="configTitle"
        sectionName="config"
        width={30}
        left={0}
      />

      <RadioButtons
        label="2-2. Setup target:"
        buttonIdArray={["firebase", "local", "Google Sheets"]}
        stateId="configSetupTarget"
        sectionName="config"
      />

      {showSheetsConfigMessage && (
        <DisplayModeText>
          Follow the steps in this{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/shawnbanasick/eq_web_configurator/blob/main/readme_assets/Configurator%20Stein%20Integration.pdf"
          >
            GUIDE
          </a>{" "}
          to get the Stein API URL
        </DisplayModeText>
      )}

      <RadioButtons
        label="2-3. Shuffle statement cards:"
        buttonIdArray={["true", "false"]}
        stateId="configShuffleCards"
        sectionName="config"
      />

      <ColorLabel>
        <div>2-4. Title bar color (for all pages):</div>
        <ConfigColorPicker
          stateDesig="configHeaderBarColor"
          default="#337ab7"
        />
        (Default color is "337ab7")
      </ColorLabel>
    </React.Fragment>
  );
};

export default view(GeneralOptions);

const SubTitle = styled.h1`
  font-size: 30px;
  width: 70vw;
  margin-left: 10px;
  margin-top: 50px;
  margin-bottom: 10px;
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
  margin-bottom: 10px;
`;

/* 
const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-top: 20px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`; */
