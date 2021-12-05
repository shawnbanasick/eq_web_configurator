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
import SurveyOptons from "./SurveyOptons";
import UploadXmlConfigButton from "./UploadXmlConfigButton";

const Config = () => {
  const handleClick = () => {
    const data = generateConfigXml();

    exportToXml("config.xml", data, "xml");
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
      <DisplayModeText>
        This file has two sections. The first section sets up the overall
        structure of your project. The second section is a question generator
        for the (optional) Step 4 questionnaire.
      </DisplayModeText>

      <UploadButtonContainer>
        <UploadXmlConfigButton />
      </UploadButtonContainer>

      <QuestionContainer>
        <GeneralOptions />
        <ProjectAccessOptions />
        <CustomLogo />
        <PresortOptions />
        <SortOptions />
        <PostsortOptions />
        <SurveyOptons />

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
  justify-items: center;
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
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 25px;
  width: 78vw;
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
