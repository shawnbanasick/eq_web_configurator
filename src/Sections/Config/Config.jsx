import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import Survey from "../Survey/Survey";
import generateConfigXml from "../Config/generateConfigXml";
import appState from "../../GlobalState/appState";
import FadeIn from "./FadeIn";
import UserTextInput from "../../Utils/UserTextInput";
import PresortOptions from "./PresortOptions";
import SortOptions from "./SortOptions";
import GeneralOptions from "./GeneralOptions";
import ProjectAccessOptions from "./ProjectAccessOptions";
import CustomLogo from "./CustomLogo";

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
        <GeneralOptions />
        <ProjectAccessOptions />
        <CustomLogo />
        <PresortOptions />
        <SortOptions />
      </QuestionContainer>

      {configShowStep5 && (
        <FadeIn delay={150} duration={1050}>
          <QuestionContainer>
            <SubTitle>Survey Options</SubTitle>
          </QuestionContainer>
          <Survey />
        </FadeIn>
      )}

      <QuestionContainer>
        <SubTitle>
          **Required Last Step** &nbsp;&nbsp;&nbsp;&nbsp; Save Options to File
        </SubTitle>
        <DownloadConfigButton onClick={() => handleClick()}>
          Save these options as the "config.xml" file in the <b>SETTINGS</b>{" "}
          folder and replace the default "config.xml" file
        </DownloadConfigButton>
      </QuestionContainer>
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

/* const Title2 = styled.h1`
  margin-left: 10px;
  font-size: 35px;
  width: 70vw;
`;
 */
const DownloadConfigButton = styled(GeneralButton)`
  width: 300px;
  align-self: center;
  margin-bottom: 100px;
  background-color: orange;
  border: 1px solid black;
`;

const LeftSpacer = styled.div`
  margin-left: 70px;
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
