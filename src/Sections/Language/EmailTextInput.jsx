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

const EmailTextInput = () => {
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
        <SectionTitle>Email Submit Screen</SectionTitle>
        <div>
          <DefaultsButton id="emailDef" onClick={handleShowDefaults}>
            Use Defaults
          </DefaultsButton>
          <ClearAllButton id="emailClear" onClick={handleClearAll}>
            Clear Section
          </ClearAllButton>
          <RefImageButton id="email1" onClick={handleRefImage}>
            View Ref. Image
          </RefImageButton>
          <RefImageButton id="email2" onClick={handleRefImage}>
            View Ref. Image 2
          </RefImageButton>
          <RefImageButton id="email3" onClick={handleRefImage}>
            View Ref. Image 3
          </RefImageButton>
          <RefImageButton
            id="email4"
            marginRight="35px"
            onClick={handleRefImage}
          >
            View Ref. Image 4
          </RefImageButton>
        </div>
      </HeaderButtonBar>

      <UserTextInput
        label="9-1. Email Submit Button Text"
        stateId="langEmailSubmitBtn"
        sectionName="lang"
        width={26}
        left={0}
      />
      <UserTextInput
        label="9-2. Copy Results to Clipboard Button Text"
        stateId="langEmailCopyResultsBtn"
        sectionName="lang"
        width={26}
        left={0}
      />
      <UserTextInput
        label="9-3. Copy Email Address to Clipboard Button Text"
        stateId="langEmaiCopyAddressBtn"
        sectionName="lang"
        width={20}
        left={0}
      />
      <UserTextInput
        label="9-4. Copy Sucess Message"
        stateId="langCopySuccessMessage"
        sectionName="lang"
        width={20}
        left={0}
      />
      <UserTextInput
        label="9-5. Copy Fail Message"
        stateId="langCopyFailMessage"
        sectionName="lang"
        width={20}
        left={0}
      />
      <UserTextAreaInput
        label="9-6. Default Email Client Fail Message"
        stateId="langDefaultEmailFailModalText"
        sectionName="lang"
        width={31.5}
        height={75}
        left={0}
      />
      <UserTextAreaInput
        label="9-7. Email Body Message"
        stateId="langEmailBodyMessage"
        sectionName="lang"
        width={39}
        height={75}
        left={0}
      />
    </SectionContainer>
  );
};

export default view(EmailTextInput);

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
