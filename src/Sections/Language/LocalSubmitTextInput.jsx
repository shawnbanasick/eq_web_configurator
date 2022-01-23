import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import UserTextInput from "../../Utils/UserTextInput";
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
          Local Data Collection - Save to Browser Memory
        </SectionTitle>
        <div>
          <DefaultsButton id="localSubmitDef" onClick={handleShowDefaults}>
            Use Defaults
          </DefaultsButton>
          <ClearAllButton id="localSubmitClear" onClick={handleClearAll}>
            Clear Section
          </ClearAllButton>
          <RefImageButton id="localSubmit" onClick={handleRefImage}>
            View Reference Image
          </RefImageButton>

          <RefImageButton
            id="localSubmit2"
            marginRight="35px"
            onClick={handleRefImage}
          >
            View Reference Image 2
          </RefImageButton>
        </div>
      </HeaderButtonBar>

      <UserTextInput
        label="8-1. Save Data Button"
        stateId="langLocalSaveDataButton"
        sectionName="lang"
        width={39.8}
        left={0}
      />

      <UserTextInput
        label="8-2. Save Q sort Success Header"
        stateId="langLocalSubmitSuccessModalHeader"
        sectionName="lang"
        width={30.1}
        left={0}
      />

      <UserTextInput
        label="8-3. Save Q sort Success Text"
        stateId="langLocalSubmitSuccessModalText"
        sectionName="lang"
        width={33}
        left={0}
      />

      <UserTextInput
        label="8-4. Return to Control Panel Button"
        stateId="langReturnToLocalPanelButtonText"
        sectionName="lang"
        width={28.8}
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
