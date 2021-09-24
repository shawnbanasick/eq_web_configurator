import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import UserTextInput from "../../Utils/UserTextInput";
import UserTextAreaInput from "../../Utils/UserTextAreaInput";
import appState from "../../GlobalState/appState";
import generateLanguageXml from "../Language/generateLanguageXml";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import ImageModal from "./ImageModal";
import showRefImage from "./showRefImage";

const Language = () => {
  const handleClick = () => {
    const data = generateLanguageXml();
    exportToXml("language.xml", data, "xml");
  };

  const handleShowDefaults = (e) => {
    console.log(e.target.id);
    showSectionDefaults(e.target.id);
  };

  const handleClearAll = (e) => {
    console.log(e.target.id);
    clearSection(e.target.id);
  };

  const handleRefImage = (e) => {
    console.log(e.target.id);
    showRefImage(e.target.id);
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
      <ImageModal />
      <Title>Language Settings</Title>
      {displayMode && (
        <DisplayModeText>
          {`Language formatting is available here by using tags before and after the text to be modified. Options include bold <b> </b>, italics <i> </i>, and underline <u> </u>.`}{" "}
          <br />
          <br />
          {`A new line can be inserted using a single break tag <br/>, and an open line between text can be created by using two break tags <br/> <br/>.`}
          <br />
          <br />
          {`A web link can be inserted by using this pattern:`}
          <br />
          {`<a href="https://qmethod.org/" target="_blank"> <u>qmethod.org</u> </a>.`}
          <br />
          <br />
          {`See the default text below for more examples.`}
        </DisplayModeText>
      )}

      <SectionContainer>
        {/* +++++++++++++  MULTI-PURPOSE MODALS ++++++++++ */}
        <HeaderButtonBar>
          <SectionTitle>Multi-Purpose Modals</SectionTitle>
          <div>
            <DefaultsButton id="multiModalsDef" onClick={handleShowDefaults}>
              Show Defaults
            </DefaultsButton>
            <ClearAllButton id="multiModalsClear" onClick={handleClearAll}>
              Clear Section
            </ClearAllButton>
            <RefImageButton id="multiModalsImage" onClick={handleRefImage}>
              View Reference Image
            </RefImageButton>
          </div>
        </HeaderButtonBar>
        <UserTextAreaInput
          label="Step Completed Message"
          stateId="langStepCompleted"
          sectionName="lang"
          width={35}
          height={100}
          left={0}
        />
        <UserTextInput
          label="Log in first"
          stateId="langLoginFirst"
          sectionName="lang"
          width={25}
          left={0}
        />
        {/* +++++++++++++  FOOTER INFO ++++++++++ */}
        <ColorContainer>
          <HeaderButtonBar>
            <SectionTitle>Footer Text</SectionTitle>
            <div>
              <DefaultsButton id="footerDef" onClick={handleShowDefaults}>
                Show Defaults
              </DefaultsButton>
              <ClearAllButton id="footerClear" onClick={handleClearAll}>
                Clear Section
              </ClearAllButton>
              <RefImageButton id="footerImage" onClick={handleRefImage}>
                View Reference Image
              </RefImageButton>
            </div>
          </HeaderButtonBar>
          <UserTextInput
            label="Text Size"
            stateId="langFooterTextSize"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Card Height"
            stateId="langFooterCardHeight"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Help me!"
            stateId="langBtnHelp"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Continue"
            stateId="langBtnNext"
            sectionName="lang"
            width={25}
            left={0}
          />
        </ColorContainer>
        {/* +++++++++++++  LANDING SCREEN ++++++++++ */}
        <h3>Landing Screen</h3>
        <UserTextInput
          label="Landing Page Title Bar"
          stateId="langLandingHead"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Welcome Message"
          stateId="langWelcomeMessage"
          sectionName="lang"
          width={35}
          height={300}
          left={0}
        />
        {/* +++++++++++++  ACCESS CONTROL ++++++++++ */}
        <ColorContainer>
          <h3>Access Control</h3>
          <UserTextInput
            label="Access Code"
            stateId="langAccessCodeText"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="Access Input Text"
            stateId="langAccessInputText"
            sectionName="lang"
            width={40}
            height={50}
            left={0}
          />

          <UserTextInput
            label="Participant name or Id number"
            stateId="langPartIdText"
            sectionName="lang"
            width={25}
            left={0}
          />

          <UserTextInput
            label="Access code invalid"
            stateId="langAccessCodeWarning"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Invalid name or ID"
            stateId="langPartIdWarning"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Log-in modal header text"
            stateId="langLoginHeaderText"
            sectionName="lang"
            width={38}
            left={0}
          />
          <UserTextAreaInput
            label="Log-in modal main text"
            stateId="langLoginWelcomeText"
            sectionName="lang"
            width={40}
            height={100}
            left={0}
          />
          <UserTextInput
            label="Help modal header text"
            stateId="langLandingHelpModalHead"
            sectionName="lang"
            width={38}
            left={0}
          />
          <UserTextAreaInput
            label="Help modal main text"
            stateId="langLandingHelpModalText"
            sectionName="lang"
            width={40}
            height={140}
            left={0}
          />
        </ColorContainer>
        <h3>Presort Screen</h3>
        <UserTextInput
          label="Title bar text"
          stateId="langtitleBarText"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label={`"Agree"`}
          stateId="langPresortAgreement"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Statements"
          stateId="langPresortStatements"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Neutral"
          stateId="langPresortNeutral"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Disagree"
          stateId="langPresortDisagreement"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Presort modal header text"
          stateId="langPresortModalHead"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Presort modal main text"
          stateId="langPresortModalText"
          sectionName="lang"
          width={25}
          height={140}
          left={0}
        />
        <UserTextInput
          label="Prevent navigation modal head"
          stateId="langPresortPreventNavModalHead"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Prevent navigation modal main text"
          stateId="langPresortPreventNavModalText"
          sectionName="lang"
          width={20}
          height={140}
          left={0}
        />
        <UserTextInput
          label="Presort complete modal head"
          stateId="langPresortFinishedModalHead"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Presort complete modal main text"
          stateId="langPresortFinishedModalText"
          sectionName="lang"
          width={20}
          height={140}
          left={0}
        />
        <ColorContainer>
          <h3>Sort Grid</h3>

          <UserTextInput
            label="Sort help modal head"
            stateId="langSortHelpModalHead"
            sectionName="lang"
            width={25}
            left={0}
          />

          <UserTextAreaInput
            label="Sort help modal main text"
            stateId="langSortHelpModalText"
            sectionName="lang"
            width={30}
            height={100}
            left={0}
          />

          <UserTextInput
            label="Agree"
            stateId="langSortAgreement"
            sectionName="lang"
            width={25}
            left={0}
          />

          <UserTextInput
            label="Disagree"
            stateId="langSortDisagreement"
            sectionName="lang"
            width={25}
            left={0}
          />

          <UserTextAreaInput
            label="Sort conditions of instruction"
            stateId="langCondOfInst"
            sectionName="lang"
            width={30}
            height={80}
            left={0}
          />

          <UserTextInput
            label="Sorting complete modal head"
            stateId="langSortingCompleteModalHead"
            sectionName="lang"
            width={25}
            left={0}
          />

          <UserTextAreaInput
            label="Sorting complete modal text"
            stateId="langSortingCompleteModalText"
            sectionName="lang"
            width={30}
            height={100}
            left={0}
          />

          <UserTextInput
            label="Prevent Navigation modal head"
            stateId="langSortPreventNavModalHead"
            sectionName="lang"
            width={25}
            left={0}
          />

          <UserTextAreaInput
            label="Prevent Navigation modal text"
            stateId="langSortPreventNavModalText"
            sectionName="lang"
            width={30}
            height={50}
            left={0}
          />

          <UserTextInput
            label="Overloaded column modal head"
            stateId="langSortOverloadedColumnModalHead"
            sectionName="lang"
            width={25}
            left={0}
          />

          <UserTextAreaInput
            label="Overloaded modal text"
            stateId="langSortOverloadedColumnModalText"
            sectionName="lang"
            width={30}
            height={100}
            left={0}
          />
        </ColorContainer>
        <h3>
          Postsort
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Optional
          section)
        </h3>
        <UserTextInput
          label="Postsort Header"
          stateId="langPostsortHeader"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Postsort Instructions"
          stateId="langPostsortInstructions"
          sectionName="lang"
          width={30}
          height={50}
          left={0}
        />
        <UserTextInput
          label="Text input placeholder"
          stateId="langPlaceholder"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Agreement label"
          stateId="langPostsortAgreement"
          sectionName="lang"
          width={35}
          left={0}
        />
        <UserTextInput
          label="Disagreement label"
          stateId="langPostsortDisagreement"
          sectionName="lang"
          width={35}
          left={0}
        />
        <UserTextInput
          label="Postsort help modal header"
          stateId="langPostsortModalHead"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Postsort help modal text"
          stateId="langPostsortModalText"
          sectionName="lang"
          width={30}
          height={80}
          left={0}
        />
        <ColorContainer>
          <h3>
            Questionnaire
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            (Optional section)
          </h3>
          <UserTextInput
            label="Post-Sort Questionnaire Header"
            stateId="langSurveyHeader"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Questionnaire help modal head"
            stateId="langSurveyModalHead"
            sectionName="lang"
            width={25}
            left={0}
          />

          <UserTextAreaInput
            label="Questionnaire help modal text"
            stateId="langSurveyModalText"
            sectionName="lang"
            width={45}
            height={100}
            left={0}
          />
          <UserTextInput
            label="Prevent navigation modal header"
            stateId="langSurveyPreventNavModalHead"
            sectionName="lang"
            width={25}
            left={0}
          />

          <UserTextAreaInput
            label="Prevent navigation modal text"
            stateId="langSurveyPreventNavModalText"
            sectionName="lang"
            width={45}
            height={100}
            left={0}
          />
        </ColorContainer>
        <h3>Submit Data</h3>
        <UserTextInput
          label="Submit Data"
          stateId="langBtnTransfer"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Final Step"
          stateId="langTransferHead"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Text above Submit Data Button"
          stateId="langTransferTextAbove"
          sectionName="lang"
          width={35}
          height={75}
          left={0}
        />
        <UserTextAreaInput
          label="Text below Submit Data Button"
          stateId="langTransferTextBelow"
          sectionName="lang"
          width={35}
          height={75}
          left={0}
        />
        <UserTextInput
          label="Submit data success modal header"
          stateId="langTransferOkModalHeader"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Submit data success modal text"
          stateId="langTransferOkModalText"
          sectionName="lang"
          width={35}
          height={75}
          left={0}
        />
        <UserTextInput
          label="Submit data fail modal header"
          stateId="langTransferFailModalHeader"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Submit data fail modal text"
          stateId="langTransferFailModalText"
          sectionName="lang"
          width={35}
          height={75}
          left={0}
        />
        <UserTextAreaInput
          label="Fallback message"
          stateId="langFallbackMessage"
          sectionName="lang"
          width={35}
          height={75}
          left={0}
        />
        <UserTextInput
          label="Download button label"
          stateId="langBtnDownload"
          sectionName="lang"
          width={25}
          left={0}
        />

        {/* +++++++++++++  OLD STUFF ++++++++++ */}

        <TenPxSpacer></TenPxSpacer>
        <TenPxSpacer></TenPxSpacer>
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
`;
const Title = styled.h1`
  font-size: 5vw;
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

// const SubTitles = styled.p`
//   font-size: 20px;
//   font-weight: bold;
//   padding-left: 15px;
//   margin-top: 30px;
// `;

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

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border: 1px solid black;
  width: 92%;
  max-width: 1000px;
  /* border-radius: 3px; */
`;

const TenPxSpacer = styled.div`
  height: 10px;
`;

const HeaderButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`;

const DefaultsButton = styled.button`
  box-sizing: border-box;
  align-self: flex-end;
  margin-bottom: 10px;
  color: black;
  transition: 0.3s ease all;
  user-select: none;

  &:hover {
    opacity: 1;
    box-shadow: inset 0 0 0 1px #666, 0 0 1px transparent;
  }

  &:active {
    transform: translateY(1px);
    filter: brightness(80%);
  }
`;

const ClearAllButton = styled.button`
  box-sizing: border-box;
  align-self: flex-end;
  margin-bottom: 10px;
  margin-left: 10px;
  color: black;
  transition: 0.3s ease all;
  user-select: none;

  &:hover {
    opacity: 1;
    box-shadow: inset 0 0 0 1px #666, 0 0 1px transparent;
  }

  &:active {
    transform: translateY(1px);
    filter: brightness(80%);
  }
`;

const RefImageButton = styled.button`
  box-sizing: border-box;
  align-self: flex-end;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 35px;
  justify-self: flex-end;
  color: black;
  user-select: none;

  &:hover {
    opacity: 1;
    box-shadow: inset 0 0 0 1px #666, 0 0 1px transparent;
  }

  &:active {
    transform: translateY(1px);
    filter: brightness(80%);
  }
`;

const SectionTitle = styled.h3`
  margin-top: 20px;
`;
