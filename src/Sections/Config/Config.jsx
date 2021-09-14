import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import RadioButtons from "../../Utils/RadioButtons";
import UserTextInput from "../../Utils/UserTextInput";
import Survey from "../Survey/Survey";
import generateConfigXml from "../Config/generateConfigXml";
import appState from "../../GlobalState/appState";
import FadeIn from "./FadeIn";
import UserNumberInput from "../../Utils/UserNumberInput";
import ConfigPresort from "./ConfigPresort";

const handleClick = () => {
  const data = generateConfigXml();

  exportToXml("config.xml", data, "xml");
};

const convertToFalse = (value) => {
  if (value === false || value === "false") {
    return false;
  } else {
    return true;
  }
};

const Config = () => {
  let configShowStep5 = convertToFalse(appState.configShowStep5);

  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  let configAccess = appState.configAccess;
  let showAccessCodeInput;
  if (configAccess === "ID only" || configAccess === "anonymous") {
    showAccessCodeInput = false;
  } else {
    showAccessCodeInput = true;
  }

  return (
    <MainContent>
      <GlobalStyle />
      <Title>General Configuration</Title>
      <DisplayModeText>
        This file has two sections. The first section sets up the overall
        structure of your project. The second section is a question generator
        for the (optional) Step 5 questionnaire. <br />
        <br />
        By default Easy HTMLQ changes the Q sort card size and font size
        according to the size of the participant's screen. If you want to change
        this behavior, you can specify a constant size for the Q-sort cards
        here. See the description for question 11a for more details.
      </DisplayModeText>

      <QuestionContainer>
        <br />
        <SubTitle>General Options</SubTitle>
        <UserTextInput
          label="1. Project title:"
          stateId="configTitle"
          sectionName="config"
          width={30}
          left={0}
        />

        {/* <UserTextInput
          label="2. Project version:"
          stateId="configVersion"
          sectionName="config"
          width={5}
          left={0}
        /> */}

        <RadioButtons
          label="2. Setup target:"
          buttonIdArray={["online", "local data collection"]}
          stateId="configSetupTarget"
          sectionName="config"
        />

        <RadioButtons
          label="3. Shuffle statement cards:"
          buttonIdArray={["true", "false"]}
          stateId="configshuffleCards"
          sectionName="config"
        />

        <RadioButtons
          label="4. Include individual card comments screen (step 3):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep4"
          sectionName="config"
        />

        <RadioButtons
          label="5. Include questionnaire (Step 4):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep5"
          sectionName="config"
        />

        {displayMode && (
          <DisplayModeText>
            <strong>Project Access</strong>
            <br /> There are four access options available:
            <br />
            <br />* anonymous (no sign-in screen shown)
            <br />* Name or Participant ID
            <br />* Name or Participant ID and Access Code
            <br />* Access Code only
            <br />
            <br />
            Currently, any text is accepted for the Name or Participant ID. The
            project access code will be the same for all participants. The code
            can be a phrase or a single word, and is case-sensitive.
          </DisplayModeText>
        )}

        <RadioButtons
          label="6a. Project Access:"
          buttonIdArray={[
            "anonymous",
            "ID only",
            "ID + access code",
            "access code only",
          ]}
          stateId="configAccess"
          sectionName="config"
        />

        {showAccessCodeInput && (
          <FadeIn delay={150} duration={1050}>
            <UserTextInput
              label="6b. Project Access Code:"
              stateId="configLogInPassword"
              sectionName="config"
              width={30}
              left={0}
            />
          </FadeIn>
        )}

        <SubTitle>Presort Options</SubTitle>

        <ColorLabel>
          <div>7a. Positive Card Color:</div>
          <ConfigPresort card="greenCardColor" default="#ccffcc" />
        </ColorLabel>

        <ColorLabel>
          <div>7b. Neutral Card Color:</div>
          <ConfigPresort card="yellowCardColor" default="#e0e0e0" />
        </ColorLabel>

        <ColorLabel>
          <div>7c. Negative Card Color:</div>
          <ConfigPresort card="pinkCardColor" default="#ffe0f0" />
        </ColorLabel>

        {/* {displayMode && (
          <DisplayModeText>
            6a. The Log In Script is a legacy option from FlashQ. It allows the
            use of a custom software to log participants into the project from
            outside the Easy HTMLQ software.
          </DisplayModeText>
        )} */}

        {/* <RadioButtons
          label="6a. Use Log In Script:"
          buttonIdArray={["true", "false"]}
          stateId="configUseLogInScript"
          sectionName="config"
        />
        {configUseLogInScript && (
          <LeftSpacer>
            <UserTextInput
              label="6b. Log In Script URL:"
              stateId="configLogInScriptURL"
              sectionName="config"
              width={40}
              left={0}
            />
            <RadioButtons
              label="6c. Request mode:"
              buttonIdArray={["post", "get"]}
              stateId="configRequestMode"
              sectionName="config"
            />
          </LeftSpacer>
        )} */}

        {/* <RadioButtons
          label="7. Show Step 3 (card swapping grid):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep3"
          sectionName="config"
        /> */}

        {displayMode && (
          <DisplayModeText>
            11a. By default, Easy HTMLQ has responsive Q-sort card and text font
            sizes, so the size of the cards and text will change according to
            the size of the participant's browser on the{" "}
            <b>
              <i>initial</i>
            </b>{" "}
            web page load of Easy HTMLQ. All of the cards will be visible on the
            screen and no page scrolling is needed.
            <br />
            <br />
            If you want to specify a constant size for the Q-sort cards for all
            screen sizes, you need to set a fixed height and width for the
            Q-sort cards here. In this case, the participants will need to
            scroll to view all of the Q-sort cards. You should also set an
            appropriate constant font size for all screen sizes in the "Styles"
            section.
          </DisplayModeText>
        )}
        <RadioButtons
          label="11a. Set constant card height:"
          buttonIdArray={["true", "false"]}
          stateId="configStep2ConstantHeight"
          sectionName="config"
        />
        <UserNumberInput
          label="11b. Q-sort card height (pixels):"
          step={1}
          value={20}
          upperLimit={500}
          lowerLimit={10}
          stateId="configStep2CardHeight"
          sectionName="config"
        ></UserNumberInput>
        <RadioButtons
          label="12a. Set constant card width:"
          buttonIdArray={["true", "false"]}
          stateId="configStep2ConstantWidth"
          sectionName="config"
        />

        <UserNumberInput
          label="12b. Set Q-sort card width (pixels):"
          step={1}
          value={20}
          upperLimit={500}
          lowerLimit={10}
          stateId="configStep2CardWidth"
          sectionName="config"
        ></UserNumberInput>
      </QuestionContainer>
      {configShowStep5 && (
        <FadeIn delay={150} duration={1050}>
          <Survey />
        </FadeIn>
      )}
      <DownloadConfigButton onClick={() => handleClick()}>
        Save file to <b>SETTINGS</b> folder and replace the "config.xml" file
      </DownloadConfigButton>
    </MainContent>
  );
};

export default view(Config);

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
`;

const Title = styled.h1`
  align-self: center;
  font-size: 50px;
`;
const SubTitle = styled.h1`
  font-size: 30px;
  width: 70vw;
  margin-left: 10px;
  margin-top: 50px;
`;

const QuestionContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 25px;
  width: 78vw;
`;

const Title2 = styled.h1`
  margin-left: 10px;
  font-size: 35px;
  width: 70vw;
`;

const DownloadConfigButton = styled(GeneralButton)`
  width: 600px;
  align-self: center;
  margin-bottom: 100px;
`;

const LeftSpacer = styled.div`
  margin-left: 70px;
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-top: 40px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`;

const ColorLabel = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 70px;
  margin-top: 20px;
  align-items: center;
  gap: 20px;
`;
