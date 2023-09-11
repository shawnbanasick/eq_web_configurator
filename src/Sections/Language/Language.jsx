import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import appState from "../../GlobalState/appState";
import generateLanguageXml from "../Language/generateLanguageXml";
import ImageModal from "./ImageModal";
import UploadXmlFileButton from "./UploadXmlFileButton";
import LocalLanguage from "./LocalLanguage";
import LandingScreenTextInput from "./LandingScreenTextInput";
import AccessControlTextInput from "./AccessControlTextInput";
import PresortTextInput from "./PresortTextInput";
import MultipleScreenTextInput from "./MultipleScreenTextInput";
import LanguageIntroText from "./LanguageIntroText";
import SortScreenTextInput from "./SortScreenTextInput";
import PostsortTextInput from "./PostsortTextInput";
import SurveyTextInput from "./SurveyTextInput";
import SubmitTextInput from "./SubmitTextInput";
import LocalSubmitTextInput from "./LocalSubmitTextInput";
import EmailTextInput from "./EmailTextInput";
import SecondProjectLinkTextInput from "./SecondProjectLinkTextInput";

const Language = () => {
  const handleClick = () => {
    const data = generateLanguageXml();
    exportToXml("language.xml", data, "xml");
  };

  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  const configSetupTarget = appState.configSetupTarget;

  return (
    <MainContent>
      <GlobalStyle />
      <ImageModal />
      <Title>Language Settings</Title>
      {displayMode && <LanguageIntroText />}

      <UploadButtonContainer>
        <UploadXmlFileButton />
      </UploadButtonContainer>

      <SectionContainer>
        {configSetupTarget === "local" ? (
          <>
            <MultipleScreenTextInput />
            <ColorContainer>
              <LocalLanguage />
            </ColorContainer>
            <PresortTextInput />
            <ColorContainer>
              <SortScreenTextInput />
            </ColorContainer>
            <PostsortTextInput />
            <ColorContainer>
              <SurveyTextInput />
            </ColorContainer>
            <LocalSubmitTextInput />
          </>
        ) : (
          <>
            <MultipleScreenTextInput />
            <ColorContainer>
              <LandingScreenTextInput />
            </ColorContainer>
            <AccessControlTextInput />
            <ColorContainer>
              <PresortTextInput />
            </ColorContainer>
            <SortScreenTextInput />
            <ColorContainer>
              <PostsortTextInput />
            </ColorContainer>
            <SurveyTextInput />
            <ColorContainer>
              <SubmitTextInput />
            </ColorContainer>
            <EmailTextInput />
            <ColorContainer>
              <SecondProjectLinkTextInput />
            </ColorContainer>
          </>
        )}
      </SectionContainer>
      <DownloadMapButton onClick={() => handleClick()}>
        Click here to save to the <b>SETTINGS</b> folder and replace the
        <br />
        "language.xml" file
      </DownloadMapButton>
    </MainContent>
  );
};

export default view(Language);

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
  padding-bottom: 30px;
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
  font-size: 50px;
  align-self: center;
`;

const ColorContainer = styled.div`
  background-color: #ededed;
  padding-left: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

const DownloadMapButton = styled(GeneralButton)`
  width: 70%;
  max-width: 300px;
  align-self: center;
  margin-top: 50px;
  background-color: #eb8100;
  border: 1px solid black;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border: 1px solid black;
  width: 92%;
  max-width: 1000px;
  /* border-radius: 3px; */
`;

const UploadButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 92%;
  max-width: 1000px;
  /* border-radius: 3px; */
`;
