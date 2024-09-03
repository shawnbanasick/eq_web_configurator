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
  showSectionDefaults(e.target.id);
};

const handleClearAll = (e) => {
  clearSection(e.target.id);
};

const LocalLanguage = () => {
  const handleRefImage = (e) => {
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
        <SectionTitle>Consent Page (optional)</SectionTitle>
        <div>
          <DefaultsButton id="consentDef" onClick={handleShowDefaults}>
            Use Defaults
          </DefaultsButton>
          <ClearAllButton id="consentClear" onClick={handleClearAll}>
            Clear Section
          </ClearAllButton>
          <RefImageButton id="consent_screen" onClick={handleRefImage}>
            Ref. Image 0-1
          </RefImageButton>
          <RefImageButton
            id="consent_screen_modal"
            marginRight="35px"
            onClick={handleRefImage}
          >
            Ref. Image 0-2
          </RefImageButton>
        </div>
      </HeaderButtonBar>
      <UserTextInput
        label="0-1. Consent Page Title Bar"
        stateId="langConsentTitleBarText"
        highlight="true"
        sectionName="lang"
        width={34}
        left={0}
      />
      <UserTextAreaInput
        label="0-2. Consent Message"
        stateId="langConsentText"
        sectionName="lang"
        highlight="true"
        width={37}
        height={300}
        left={0}
      />
      <UserTextInput
        label="0-3. Help modal header text"
        stateId="langConsentHelpModalHead"
        sectionName="lang"
        highlight="true"
        width={32.5}
        left={0}
      />
      <UserTextAreaInput
        label="0-4. Help modal main text"
        stateId="langConsentHelpModalText"
        sectionName="lang"
        highlight="true"
        width={35.5}
        height={140}
        left={0}
      />
      <UserTextInput
        label="0-5. Accept button text"
        stateId="langBtnNextConsent"
        sectionName="lang"
        width={39}
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
