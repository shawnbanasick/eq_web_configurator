import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import UserTextInput from "../../Utils/UserTextInput";
import UserTextAreaInput from "../../Utils/UserTextAreaInput";
import appState from "../../GlobalState/appState";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
import showRefImage from "./showRefImage";

const handleShowDefaults = (e) => {
  console.log(e.target.id);
  showSectionDefaults(e.target.id);
};

const handleClearAll = (e) => {
  console.log(e.target.id);
  clearSection(e.target.id);
};

const LocalLanguage = () => {
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
    <SectionContainer>
      <HeaderButtonBar>
        <SectionTitle>
          Questionnaire Screen
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Optional
          sect.)
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
        label="7-1. Post-Sort Questionnaire Header"
        stateId="langSurveyHeader"
        sectionName="lang"
        width={28.5}
        left={0}
      />
      <UserTextInput
        label="7-2. Questionnaire help modal header"
        stateId="langSurveyModalHead"
        sectionName="lang"
        width={28}
        left={0}
      />

      <UserTextAreaInput
        label="7-3. Questionnaire help modal text"
        stateId="langSurveyModalText"
        sectionName="lang"
        width={28}
        height={100}
        left={0}
      />
      <UserTextInput
        label="7-4. Prevent navigation modal header"
        stateId="langSurveyPreventNavModalHead"
        sectionName="lang"
        width={28}
        left={0}
      />

      <UserTextAreaInput
        label="7-5. Prevent navigation modal text"
        stateId="langSurveyPreventNavModalText"
        sectionName="lang"
        width={28}
        height={100}
        left={0}
      />
    </SectionContainer>
  );
};

export default view(LocalLanguage);

const SectionContainer = styled.div`
  * {
    // outline: 1px solid red;
  }
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
  color: var(--font-color);
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
  color: var(--font-color);
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
  color: var(--font-color);
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