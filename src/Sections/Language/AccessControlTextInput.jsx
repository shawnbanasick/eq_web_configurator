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
        label="3-1. Log-in welcome text"
        stateId="langLoginWelcomeText"
        sectionName="lang"
        width={36}
        height={100}
        left={0}
      />
      <UserTextInput
        label="3-2. Log-in box header text"
        stateId="langLoginHeaderText"
        sectionName="lang"
        width={33}
        left={0}
      />

      <UserTextInput
        label="3-3. Participant name label"
        stateId="langLoginPartIdText"
        sectionName="lang"
        width={33}
        left={0}
      />

      <UserTextInput
        label="3-4. Access code label"
        stateId="langAccessInputText"
        sectionName="lang"
        width={35}
        left={0}
      />

      <UserTextInput
        label="3-5. Invalid name warning"
        stateId="langPartIdWarning"
        sectionName="lang"
        width={33.5}
        left={0}
      />

      <UserTextInput
        label="3-6. Invalid access code warning"
        stateId="langAccessCodeWarning"
        sectionName="lang"
        width={30.3}
        left={0}
      />
      <UserTextInput
        label="3-7. Log-in submit button"
        stateId="loginSubmitButtonText"
        sectionName="lang"
        width={34}
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
