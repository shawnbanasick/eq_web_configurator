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
            Ref. Img. 6-1 to 6-5
          </RefImageButton>
          <RefImageButton
            id="postsortImage2"
            marginRight="35px"
            onClick={handleRefImage}
          >
            Ref. Img. 6-6 & 6-7
          </RefImageButton>
          <RefImageButton
            id="postsortImage3"
            marginRight="35px"
            onClick={handleRefImage}
          >
            Ref. Img. 6-8 & 6-9
          </RefImageButton>
          <RefImageButton
            id="postsortImage4"
            marginRight="35px"
            onClick={handleRefImage}
          >
            Ref. Img. 6-10
          </RefImageButton>
        </div>
      </HeaderButtonBar>
      <UserTextInput
        label="6-1. Postsort Header"
        stateId="langPostsortHeader"
        sectionName="lang"
        width={40.7}
        left={0}
      />
      <UserTextAreaInput
        label="6-2. Postsort Instructions"
        stateId="langPostsortInstructions"
        sectionName="lang"
        width={37.3}
        height={60}
        left={0}
      />
      <UserTextInput
        label="6-3. Text input placeholder (no HTML tags here)"
        stateId="langPlaceholder"
        sectionName="lang"
        width={17.7}
        left={0}
      />
      <UserTextInput
        label="6-4. Agreement label"
        stateId="langPostsortAgreement"
        sectionName="lang"
        width={40.8}
        left={0}
      />
      <UserTextInput
        label="6-5. Disagreement label"
        stateId="langPostsortDisagreement"
        sectionName="lang"
        width={38.1}
        left={0}
      />
      <UserTextInput
        label="6-6. Postsort greeting / help modal header"
        stateId="langPostsortModalHead"
        sectionName="lang"
        width={22.5}
        left={0}
      />
      <UserTextAreaInput
        label="6-7. Postsort greeting / help modal text"
        stateId="langPostsortModalText"
        sectionName="lang"
        width={26}
        height={80}
        left={0}
      />
      <UserTextInput
        label="6-8. Prevent naviation modal header"
        stateId="langPostsortPreventNavModalHead"
        sectionName="lang"
        width={28}
        left={0}
      />
      <UserTextAreaInput
        label="6-9. Prevent navigation modal text"
        stateId="langPostsortPreventNavModalText"
        sectionName="lang"
        width={30.2}
        height={80}
        left={0}
      />
      <UserTextInput
        label="6-10. Go to previous page button text"
        stateId="langPostsortBackButton"
        sectionName="lang"
        width={28.1}
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
  width: 50%;
`;
