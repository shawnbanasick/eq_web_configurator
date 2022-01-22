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
        label="4-1. Title bar text"
        stateId="langTitleBarText"
        sectionName="lang"
        width={43.7}
        left={0}
      />
      <UserTextInput
        label="4-2. Statements"
        stateId="langPresortStatements"
        sectionName="lang"
        width={44.4}
        left={0}
      />
      <UserTextInput
        label={`4-3. "Agree"`}
        stateId="langPresortAgreement"
        sectionName="lang"
        width={47.7}
        left={0}
      />
      <UserTextInput
        label={`4-4. "Neutral"`}
        stateId="langPresortNeutral"
        sectionName="lang"
        width={46.6}
        left={0}
      />
      <UserTextInput
        label={`4-5. "Disagree"`}
        stateId="langPresortDisagreement"
        sectionName="lang"
        width={45.2}
        left={0}
      />
      <UserTextInput
        label="4-6. Presort modal header text"
        stateId="langPresortModalHead"
        sectionName="lang"
        width={31.8}
        left={0}
      />
      <UserTextAreaInput
        label="4-7. Presort modal main text"
        stateId="langPresortModalText"
        sectionName="lang"
        width={33.8}
        height={140}
        left={0}
      />
      <UserTextInput
        label="4-8. Prevent navigation modal header"
        stateId="langPresortPreventNavModalHead"
        sectionName="lang"
        width={25.6}
        left={0}
      />
      <UserTextAreaInput
        label="4-9. Prevent navigation modal main text"
        stateId="langPresortPreventNavModalText"
        sectionName="lang"
        width={23.8}
        height={140}
        left={0}
      />
      <UserTextInput
        label="4-10. Presort complete modal header"
        stateId="langPresortFinishedModalHead"
        sectionName="lang"
        width={26}
        left={0}
      />
      <UserTextAreaInput
        label="4-11. Presort complete modal main text"
        stateId="langPresortFinishedModalText"
        sectionName="lang"
        width={24.2}
        height={140}
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
