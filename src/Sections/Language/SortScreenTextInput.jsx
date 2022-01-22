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
        label="5-1. Sort help modal header"
        stateId="langSortHelpModalHead"
        sectionName="lang"
        width={33.5}
        left={0}
      />

      <UserTextAreaInput
        label="5-2. Sort help modal main text"
        stateId="langSortHelpModalText"
        sectionName="lang"
        width={31.8}
        height={100}
        left={0}
      />

      <UserTextInput
        label="5-3. Disagree"
        stateId="langSortDisagreement"
        sectionName="lang"
        width={46}
        left={0}
      />

      <UserTextAreaInput
        label="5-4. Sort conditions of instruction"
        stateId="langCondOfInst"
        sectionName="lang"
        width={29.4}
        height={80}
        left={0}
      />
      <UserTextInput
        label="5-5. Agree"
        stateId="langSortAgreement"
        sectionName="lang"
        width={48.8}
        left={0}
      />

      <UserTextInput
        label="5-6. Sorting complete modal header"
        stateId="langSortingCompleteModalHead"
        sectionName="lang"
        width={26.7}
        left={0}
      />

      <UserTextAreaInput
        label="5-7. Sorting complete modal text"
        stateId="langSortingCompleteModalText"
        sectionName="lang"
        width={29.8}
        height={100}
        left={0}
      />

      <UserTextInput
        label="5-8. Prevent Navigation modal header"
        stateId="langSortPreventNavModalHead"
        sectionName="lang"
        width={25}
        left={0}
      />

      <UserTextAreaInput
        label="5-9. Prevent Navigation modal text"
        stateId="langSortPreventNavModalText"
        sectionName="lang"
        width={28}
        height={50}
        left={0}
      />

      <UserTextInput
        label="5-10. Overloaded column modal header"
        stateId="langSortOverloadedColumnModalHead"
        sectionName="lang"
        width={23.5}
        left={0}
      />

      <UserTextAreaInput
        label="5-11. Overloaded modal text"
        stateId="langSortOverloadedColumnModalText"
        sectionName="lang"
        width={33.8}
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
