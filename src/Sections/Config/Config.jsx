import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import generateConfigXml from "../Config/generateConfigXml";
import appState from "../../GlobalState/appState";
import PresortOptions from "./PresortOptions";
import SortOptions from "./SortOptions";
import GeneralOptions from "./GeneralOptions";
import ProjectAccessOptions from "./ProjectAccessOptions";
import CustomLogo from "./CustomLogo";
import PostsortOptions from "./PostsortOptions";
import SurveyOptions from "./SurveyOptons";
import UploadXmlConfigButton from "./UploadXmlConfigButton";

const Config = () => {
  const handleClick = () => {
    if (
      appState.configUseImages === true ||
      (appState.configUseImages === "true" && +appState.configNumImages === 0)
    ) {
      alert("You must input the number of images first (Option 2-4a).");
      return;
    } else {
      const data = generateConfigXml();

      exportToXml("config.xml", data, "xml");
    }
  };

  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }
  return (
    <MainContent>
      <GlobalStyle />
      <Title>General Configuration</Title>
      <CustomLogo />
      <br />
      <br />
      <ContainerDiv>
        <SubTitle>2. The "config.xml" Settings File (required)</SubTitle>

        <DisplayModeText>
          The <b>config.xml</b> file has two sections. The first section
          contains the settings for the overall structure of your project. The
          second section includes a question generator for an (optional)
          questionnaire after the participant completes the Q sort.
          <br />
          <br />
          If you have a config.xml file from another EQ Web Sort project{" "}
          <b>made with this version of the configurator</b>, you can load its
          data for editing by clicking the orange "
          <b>Load 'config.xml' File Data</b>" button below. If you don't have a
          file from a previous project, you can load the default config.xml file
          from the settings folder, or you can create a new file by inputting
          all of the data yourself.
          <br />
          <br />
          When you have finished adding your data, click the orange button at
          the bottom of the page and save your information as 'config.xml' in
          the settings folder (replace the default file).
        </DisplayModeText>

        <UploadButtonContainer>
          <UploadXmlConfigButton />
        </UploadButtonContainer>
      </ContainerDiv>

      <QuestionContainer>
        <GeneralOptions />
        <ProjectAccessOptions />
        <PresortOptions />
        <SortOptions />
        <PostsortOptions />
        <SurveyOptions />

        <SubTitle>
          **Required Last Step** &nbsp;&nbsp;&nbsp;&nbsp; Save Options to File
        </SubTitle>
        <DownloadConfigButton onClick={() => handleClick()}>
          Click here to save these options as the "config.xml" file in the{" "}
          <b>SETTINGS</b> folder and replace the default "config.xml" file
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
  justify-content: center;
  align-items: center;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-size: 18px;
  user-select: none;
  color: var(--font-color);

  a {
    padding-bottom: 1px;
    text-decoration: none;
    color: #000;
    box-shadow: inset 0 -4px 0 var(--second-theme-color);
    transition: background-color 0.25s ease-out;
    margin-left: 5px;
  }

  a:hover {
    background-color: var(--second-theme-color);
    padding-top: 2px;
    box-shadow: none;
    color: white;
  }
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
  display: flex;
  flex-direction: column;
  justify-items: center;

  align-items: left;
  margin-bottom: 25px;
  width: clamp(500px, 78vw, 1300px);
`;

const DownloadConfigButton = styled(GeneralButton)`
  width: 300px;
  align-self: center;
  margin-bottom: 100px;
  background-color: #eb8100;
  border: 1px solid black;
`;

const UploadButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 92%;
  max-width: 1000px;
  /* border-radius: 3px; */
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

const ContainerDiv = styled.div`
  width: clamp(500px, 78vw, 1300px);
`;
