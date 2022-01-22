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
        width={40.4}
        left={0}
      />
      <UserTextInput
        label="2. Text Size"
        stateId="langFooterTextSize"
        sectionName="lang"
        width={40.4}
        left={0}
      />
      <UserTextInput
        label="3. Card Height"
        stateId="langFooterCardHeight"
        sectionName="lang"
        width={39}
        left={0}
      />
      <UserTextInput
        label="4. Continue"
        stateId="langBtnNext"
        sectionName="lang"
        width={40.5}
        left={0}
      />
      <UserTextAreaInput
        label="5. Step completed message"
        stateId="langStepCompleted"
        sectionName="lang"
        width={33}
        height={150}
        left={0}
      />
      <UserTextAreaInput
        label="6. Log in first message"
        stateId="langLoginFirst"
        sectionName="lang"
        width={38}
        height={150}
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
