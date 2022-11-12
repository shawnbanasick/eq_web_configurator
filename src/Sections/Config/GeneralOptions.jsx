import React from "react";
import { view, store } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UserTextInput from "../../Utils/UserTextInput";
import RadioButtons from "../../Utils/RadioButtons";
import ConfigColorPicker from "./ConfigColorPicker";
import IncompatibleFileModal from "./IncompatibleFileModal";
import FadeIn from "./FadeIn";

const GeneralOptions = () => {
  const localState = store({ displayItem: true });

  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  const setSheetsDisplay = (value) => {
    if (value === "sheets") {
      localState.displayItem = true;
      return true;
    } else {
      localState.displayItem = false;
      return false;
    }
  };

  let showSheetsConfigMessage = setSheetsDisplay(appState.configSetupTarget);

  return (
    <React.Fragment>
      <SubTitle>General Options</SubTitle>
      <IncompatibleFileModal />
      {displayMode && (
        <DisplayModeText>
          If you are planning to do a standard online Q sort project, the "2.2
          Setup Target" option should be set to either "<b>Google Sheets</b>" or
          "<b>firebase</b>". <br />
          <br />
          The "Google Sheets" option allows you to use a <b>Google Sheet</b> as
          a database for the application, but requires use of third-party web
          application called "Stein". It is free for projects with less than 200
          participant responses. If you decide to use Stein with Google Sheets,
          I recommend that you make a new Google account because you'll need to
          give Stein read and write access to your Sheets files. To set up your
          Sheet, go to the Stein
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://steinhq.com/"
          >
            <b>website</b>
          </a>{" "}
          and follow the steps in this
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/viewer?url=https://github.com/shawnbanasick/eq_web_configurator/raw/main/readme_assets/Configurator_Stein_Integration.pdf"
          >
            <b>GUIDE</b>
          </a>{" "}
          to get the Stein API URL to paste in option 2-2b below.
          <br />
          <br />
          <b>Firebase</b> is a "database as a service" company owned by Google.
          It is more robust than Google Sheets, but the setup process is more
          complex. Step-by-step instructions on how to set up Firebase are in
          Section 6.
          <br />
          <br />
          The "<b>local</b>" option transforms EQ Web Sort into a tool for
          in-person data collection using a notebook computer. For more
          information see the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/viewer?url=https://github.com/shawnbanasick/eq-web-sort/raw/main/readme_assets/local_guide_A4.pdf"
          >
            <b>User Guide</b>
          </a>
          . <br />
          <br />
          For option 2-4 - title bar color - you can set the color by moving the
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
        label="2-1. Project name:"
        stateId="configTitle"
        sectionName="config"
        width={30}
        left={0}
      />
      <RadioButtons
        label="2-2. Setup target:"
        buttonIdArray={["sheets", "firebase", "local"]}
        stateId="configSetupTarget"
        sectionName="config"
      />
      <br />
      {showSheetsConfigMessage && (
        <FadeIn delay={150} duration={1050}>
          <UserTextInput
            label="2-2b. Stein API URL:"
            stateId="configSteinApiUrl"
            sectionName="config"
            width={30}
            left={0}
          />
        </FadeIn>
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
