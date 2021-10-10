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
// import DownloadCsvButton from "./DownloadCsvButton";

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
          <h4>Simple HTML Formatting</h4>
          {`Simple text formatting is available here by using tags before and after the text to be modified. Simple formatting options include bold <b> </b>, italics <i> </i>, and underline <u> </u>.`}{" "}
          <br />
          <br />
          {`A new line can be inserted using a single break tag <br/>, and an open line between text can be created by using two break tags <br/> <br/>.`}
          <br />
          <br />
          {`A web link can be inserted by using this pattern:`}
          <br />
          {`<a href="https://qmethod.org/" target="_blank" rel="noreferrer"> <u>qmethod.org</u> </a>.`}
          <br />
          <br />
          <h4>Complex HTML Layouts</h4>
          Complex HTML layouts are possible, including the use of images and
          embedded videos, for the Landing screen, Submit screen, and pop-up
          modal texts. In-line CSS styling can be used to modify the HTML
          elements.
          <br />
          <br />
          {`Use `}
          <a
            href="https://codepen.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            CodePen
          </a>{" "}
          {`to interactively develop complex layouts (click on the "Start Coding" button on the top left side of the page, then try out your code in the "HTML" box). Then, copy and paste the HTML code from CodePen to the input boxes here`}
          <br />
          <br />
          {`For example, see the default layout for the `}
          <a href="https://codepen.io" target="_blank" rel="noreferrer">
            &quot;Welcome Message&quot; here
          </a>{" "}
          <br />
          <br />
          <ul>
            <li>
              <a
                href="https://codepen.io/shawnbanasick/pen/NWvWGMY"
                rel="noopener noreferrer"
                target="_blank"
              >
                Vertical and horizontal centering
              </a>
              &nbsp;(for Landing section and goodbyeMessage){" "}
            </li>
          </ul>
          {`See the default text below for more HTML examples.`}
        </DisplayModeText>
      )}
      {/*  <ButtonsContainer>
        <DownloadCsvButton />
      </ButtonsContainer> */}
      <SectionContainer>
        {/* +++++++++++++  FOOTER INFO ++++++++++ */}
        <HeaderButtonBar>
          <SectionTitle>Multiple Screen Text</SectionTitle>
          <div>
            <DefaultsButton id="footerDef" onClick={handleShowDefaults}>
              Use Defaults
            </DefaultsButton>
            <ClearAllButton id="footerClear" onClick={handleClearAll}>
              Clear Section
            </ClearAllButton>
            <RefImageButton
              id="footerImage"
              marginRight="35px"
              onClick={handleRefImage}
            >
              View Reference Image
            </RefImageButton>
          </div>
        </HeaderButtonBar>
        <UserTextInput
          label="1. Help me!"
          stateId="langBtnHelp"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="2. Text Size"
          stateId="langFooterTextSize"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="3. Card Height"
          stateId="langFooterCardHeight"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="4. Continue"
          stateId="langBtnNext"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="5. Step completed message"
          stateId="langStepCompleted"
          sectionName="lang"
          width={30}
          height={150}
          left={0}
        />
        <UserTextAreaInput
          label="6. Log in first message"
          stateId="langLoginFirst"
          sectionName="lang"
          width={30}
          height={150}
          left={0}
        />
        {/* +++++++++++++  LANDING SCREEN ++++++++++ */}
        <ColorContainer>
          <HeaderButtonBar>
            <SectionTitle>Landing Screen</SectionTitle>
            <div>
              <DefaultsButton id="landingDef" onClick={handleShowDefaults}>
                Use Defaults
              </DefaultsButton>
              <ClearAllButton id="landingClear" onClick={handleClearAll}>
                Clear Section
              </ClearAllButton>
              <RefImageButton id="landingImage" onClick={handleRefImage}>
                View Reference Image
              </RefImageButton>
              <RefImageButton
                id="landingImage2"
                marginRight="35px"
                onClick={handleRefImage}
              >
                View Reference Image 2
              </RefImageButton>
            </div>
          </HeaderButtonBar>
          <UserTextInput
            label="1. Landing Page Title Bar"
            stateId="langLandingHead"
            sectionName="lang"
            width={35}
            left={0}
          />
          <UserTextAreaInput
            label="2. Welcome Message"
            stateId="langWelcomeMessage"
            sectionName="lang"
            width={40}
            height={300}
            left={0}
          />
          <UserTextInput
            label="2-1. Help modal header text"
            stateId="langLandingHelpModalHead"
            sectionName="lang"
            width={38}
            left={0}
          />
          <UserTextAreaInput
            label="2-2. Help modal main text"
            stateId="langLandingHelpModalText"
            sectionName="lang"
            width={37}
            height={140}
            left={0}
          />
        </ColorContainer>
        {/* +++++++++++++  ACCESS CONTROL ++++++++++ */}
        <HeaderButtonBar>
          <SectionTitle>Access Control</SectionTitle>
          <div>
            <DefaultsButton id="accessDef" onClick={handleShowDefaults}>
              Use Defaults
            </DefaultsButton>
            <ClearAllButton id="accessClear" onClick={handleClearAll}>
              Clear Section
            </ClearAllButton>
            <RefImageButton
              id="accessImage"
              marginRight="35px"
              onClick={handleRefImage}
            >
              View Reference Image
            </RefImageButton>
          </div>
        </HeaderButtonBar>
        <UserTextAreaInput
          label="1. Log-in welcome text"
          stateId="langLoginWelcomeText"
          sectionName="lang"
          width={40}
          height={100}
          left={0}
        />
        <UserTextInput
          label="2. Log-in box header text"
          stateId="langLoginHeaderText"
          sectionName="lang"
          width={30}
          left={0}
        />

        <UserTextInput
          label="3. Participant name label"
          stateId="langLoginPartIdText"
          sectionName="lang"
          width={25}
          left={0}
        />

        <UserTextInput
          label="4. Access code label"
          stateId="langAccessInputText"
          sectionName="lang"
          width={30}
          left={0}
        />

        <UserTextInput
          label="5. Invalid name warning"
          stateId="langPartIdWarning"
          sectionName="lang"
          width={25}
          left={0}
        />

        <UserTextInput
          label="6. Invalid access code warning"
          stateId="langAccessCodeWarning"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="7. Log-in submit button"
          stateId="loginSubmitButtonText"
          sectionName="lang"
          width={25}
          left={0}
        />

        <ColorContainer>
          <HeaderButtonBar>
            <SectionTitle>Presort Screen</SectionTitle>
            <div>
              <DefaultsButton id="presortDef" onClick={handleShowDefaults}>
                Use Defaults
              </DefaultsButton>
              <ClearAllButton id="presortClear" onClick={handleClearAll}>
                Clear Section
              </ClearAllButton>
              <RefImageButton id="presortImage" onClick={handleRefImage}>
                View Ref. Image
              </RefImageButton>
              <RefImageButton id="presortImage2" onClick={handleRefImage}>
                View Ref. Image 2
              </RefImageButton>
              <RefImageButton id="presortImage3" onClick={handleRefImage}>
                View Ref. Image 3
              </RefImageButton>
              <RefImageButton
                id="presortImage4"
                marginRight="35px"
                onClick={handleRefImage}
              >
                View Ref. Image 4
              </RefImageButton>
            </div>
          </HeaderButtonBar>
          <UserTextInput
            label="1. Title bar text"
            stateId="langtitleBarText"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="2. Statements"
            stateId="langPresortStatements"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label={`3. "Agree"`}
            stateId="langPresortAgreement"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label={`4. "Neutral"`}
            stateId="langPresortNeutral"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label={`5. "Disagree"`}
            stateId="langPresortDisagreement"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="2-1. Presort modal header text"
            stateId="langPresortModalHead"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="2-2. Presort modal main text"
            stateId="langPresortModalText"
            sectionName="lang"
            width={25}
            height={140}
            left={0}
          />
          <UserTextInput
            label="3-1. Prevent navigation modal header"
            stateId="langPresortPreventNavModalHead"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="3-2. Prevent navigation modal main text"
            stateId="langPresortPreventNavModalText"
            sectionName="lang"
            width={20}
            height={140}
            left={0}
          />
          <UserTextInput
            label="4-1. Presort complete modal header"
            stateId="langPresortFinishedModalHead"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="4-2. Presort complete modal main text"
            stateId="langPresortFinishedModalText"
            sectionName="lang"
            width={20}
            height={140}
            left={0}
          />
        </ColorContainer>

        <HeaderButtonBar>
          <SectionTitle>Sort Screen</SectionTitle>
          <div>
            <DefaultsButton id="sortDef" onClick={handleShowDefaults}>
              Use Defaults
            </DefaultsButton>
            <ClearAllButton id="sortClear" onClick={handleClearAll}>
              Clear Section
            </ClearAllButton>
            <RefImageButton id="sortImage" onClick={handleRefImage}>
              View Ref. Img.
            </RefImageButton>
            <RefImageButton id="sortImage2" onClick={handleRefImage}>
              View Ref. Img. 2
            </RefImageButton>
            <RefImageButton id="sortImage3" onClick={handleRefImage}>
              View Ref. Img. 3
            </RefImageButton>
            <RefImageButton id="sortImage4" onClick={handleRefImage}>
              View Ref. Img. 4
            </RefImageButton>
            <RefImageButton
              id="sortImage5"
              marginRight="35px"
              onClick={handleRefImage}
            >
              View Ref. Img. 5
            </RefImageButton>
          </div>
        </HeaderButtonBar>
        <UserTextInput
          label="1. Sort help modal header"
          stateId="langSortHelpModalHead"
          sectionName="lang"
          width={25}
          left={0}
        />

        <UserTextAreaInput
          label="2. Sort help modal main text"
          stateId="langSortHelpModalText"
          sectionName="lang"
          width={30}
          height={100}
          left={0}
        />

        <UserTextInput
          label="2-1. Disagree"
          stateId="langSortDisagreement"
          sectionName="lang"
          width={25}
          left={0}
        />

        <UserTextAreaInput
          label="2-2. Sort conditions of instruction"
          stateId="langCondOfInst"
          sectionName="lang"
          width={30}
          height={80}
          left={0}
        />
        <UserTextInput
          label="2-3. Agree"
          stateId="langSortAgreement"
          sectionName="lang"
          width={25}
          left={0}
        />

        <UserTextInput
          label="3-1. Sorting complete modal header"
          stateId="langSortingCompleteModalHead"
          sectionName="lang"
          width={25}
          left={0}
        />

        <UserTextAreaInput
          label="3-2. Sorting complete modal text"
          stateId="langSortingCompleteModalText"
          sectionName="lang"
          width={30}
          height={100}
          left={0}
        />

        <UserTextInput
          label="4-1. Prevent Navigation modal header"
          stateId="langSortPreventNavModalHead"
          sectionName="lang"
          width={25}
          left={0}
        />

        <UserTextAreaInput
          label="4-2. Prevent Navigation modal text"
          stateId="langSortPreventNavModalText"
          sectionName="lang"
          width={30}
          height={50}
          left={0}
        />

        <UserTextInput
          label="5-1. Overloaded column modal header"
          stateId="langSortOverloadedColumnModalHead"
          sectionName="lang"
          width={25}
          left={0}
        />

        <UserTextAreaInput
          label="5-2. Overloaded modal text"
          stateId="langSortOverloadedColumnModalText"
          sectionName="lang"
          width={30}
          height={100}
          left={0}
        />
        <ColorContainer>
          <HeaderButtonBar>
            <SectionTitle>
              Postsort Screen
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Optional
              section)
            </SectionTitle>
            <div>
              <DefaultsButton id="postsortDef" onClick={handleShowDefaults}>
                Use Defaults
              </DefaultsButton>
              <ClearAllButton id="postsortClear" onClick={handleClearAll}>
                Clear Section
              </ClearAllButton>
              <RefImageButton id="postsortImage" onClick={handleRefImage}>
                View Reference Image
              </RefImageButton>
              <RefImageButton
                id="postsortImage2"
                marginRight="35px"
                onClick={handleRefImage}
              >
                View Reference Image 2
              </RefImageButton>
            </div>
          </HeaderButtonBar>
          <UserTextInput
            label="1. Postsort Header"
            stateId="langPostsortHeader"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="2. Postsort Instructions"
            stateId="langPostsortInstructions"
            sectionName="lang"
            width={30}
            height={50}
            left={0}
          />
          <UserTextInput
            label="3. Text input placeholder"
            stateId="langPlaceholder"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="4. Agreement label"
            stateId="langPostsortAgreement"
            sectionName="lang"
            width={35}
            left={0}
          />
          <UserTextInput
            label="5. Disagreement label"
            stateId="langPostsortDisagreement"
            sectionName="lang"
            width={35}
            left={0}
          />
          <UserTextInput
            label="2-1. Postsort help modal header"
            stateId="langPostsortModalHead"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="2-2. Postsort help modal text"
            stateId="langPostsortModalText"
            sectionName="lang"
            width={30}
            height={80}
            left={0}
          />
        </ColorContainer>

        <HeaderButtonBar>
          <SectionTitle>
            Questionnaire Screen
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            (Optional sect.)
          </SectionTitle>
          <div>
            <DefaultsButton id="surveyDef" onClick={handleShowDefaults}>
              Use Defaults
            </DefaultsButton>
            <ClearAllButton id="surveyClear" onClick={handleClearAll}>
              Clear Section
            </ClearAllButton>
            <RefImageButton id="surveyImage" onClick={handleRefImage}>
              View Ref. Img.
            </RefImageButton>
            <RefImageButton id="surveyImage2" onClick={handleRefImage}>
              View Ref. Img. 2
            </RefImageButton>
            <RefImageButton
              id="surveyImage3"
              marginRight="35px"
              onClick={handleRefImage}
            >
              View Ref. Img. 3
            </RefImageButton>
          </div>
        </HeaderButtonBar>
        <UserTextInput
          label="1. Post-Sort Questionnaire Header"
          stateId="langSurveyHeader"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="2-1. Questionnaire help modal header"
          stateId="langSurveyModalHead"
          sectionName="lang"
          width={25}
          left={0}
        />

        <UserTextAreaInput
          label="2-2. Questionnaire help modal text"
          stateId="langSurveyModalText"
          sectionName="lang"
          width={35}
          height={100}
          left={0}
        />
        <UserTextInput
          label="3-1. Prevent navigation modal header"
          stateId="langSurveyPreventNavModalHead"
          sectionName="lang"
          width={25}
          left={0}
        />

        <UserTextAreaInput
          label="3-2. Prevent navigation modal text"
          stateId="langSurveyPreventNavModalText"
          sectionName="lang"
          width={35}
          height={100}
          left={0}
        />
        <ColorContainer>
          <HeaderButtonBar>
            <SectionTitle>Submit Screen</SectionTitle>
            <div>
              <DefaultsButton id="submitDef" onClick={handleShowDefaults}>
                Use Defaults
              </DefaultsButton>
              <ClearAllButton id="submitClear" onClick={handleClearAll}>
                Clear Section
              </ClearAllButton>
              <RefImageButton id="submitImage" onClick={handleRefImage}>
                View Ref. Image
              </RefImageButton>
              <RefImageButton id="submitImage2" onClick={handleRefImage}>
                View Ref. Image 2
              </RefImageButton>
              <RefImageButton id="submitImage3" onClick={handleRefImage}>
                View Ref. Image 3
              </RefImageButton>
              <RefImageButton
                id="submitImage4"
                marginRight="35px"
                onClick={handleRefImage}
              >
                View Ref. Image 4
              </RefImageButton>
            </div>
          </HeaderButtonBar>

          <UserTextInput
            label="1. Final Step"
            stateId="langTransferHead"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="2. Text above Submit Data Button"
            stateId="langTransferTextAbove"
            sectionName="lang"
            width={35}
            height={75}
            left={0}
          />
          <UserTextInput
            label="3. Submit Data"
            stateId="langBtnTransfer"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="4. Text below Submit Data Button"
            stateId="langTransferTextBelow"
            sectionName="lang"
            width={35}
            height={75}
            left={0}
          />
          <UserTextInput
            label="2-1. Submit data success modal header"
            stateId="langTransferOkModalHeader"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="2-2. Submit data success modal text"
            stateId="langTransferOkModalText"
            sectionName="lang"
            width={35}
            height={75}
            left={0}
          />
          <UserTextInput
            label="3-1. Submit data fail modal header"
            stateId="langTransferFailModalHeader"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="3-2. Submit data fail modal text"
            stateId="langTransferFailModalText"
            sectionName="lang"
            width={35}
            height={75}
            left={0}
          />
          <UserTextAreaInput
            label="4-1. Fallback message"
            stateId="langFallbackMessage"
            sectionName="lang"
            width={35}
            height={75}
            left={0}
          />
          <UserTextInput
            label="4-2. Download button label"
            stateId="langBtnDownload"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="5. Goodbye Message"
            stateId="langGoodbyeMessage"
            sectionName="lang"
            width={35}
            height={75}
            left={0}
          />
        </ColorContainer>

        {/* +++++++++++++  OLD STUFF ++++++++++ */}
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

/* const TenPxSpacer = styled.div`
  height: 10px;
`;
 */
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
  margin-right: ${(props) => props.marginRight};
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
/* 
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 92%;
  max-width: 1000px;
`;
 */
