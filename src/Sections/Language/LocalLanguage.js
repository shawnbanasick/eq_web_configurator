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
        <SectionTitle>Local Data Collection - Control Panel</SectionTitle>
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
        label="1-1. Control Panel Title Bar"
        stateId="langLocalHeader"
        sectionName="lang"
        width={34.7}
        left={0}
      />
      <UserTextInput
        label="1-2. Participant Name"
        stateId="langPartIdText"
        sectionName="lang"
        width={39.4}
        left={0}
      />
      <UserTextInput
        label="1-3. Usercode"
        stateId="langUsercodeText"
        sectionName="lang"
        width={46}
        left={0}
      />

      <UserTextInput
        label="1-4. Start Button"
        stateId="langLocalStartButtonText"
        sectionName="lang"
        width={44}
        left={0}
      />
      <UserTextInput
        label="1-5. Delete Button"
        stateId="langLocalDeleteButtonText"
        sectionName="lang"
        width={42.4}
        left={0}
      />

      <UserTextInput
        label="1-6. Download Button"
        stateId="langLocalDownloadButtonText"
        sectionName="lang"
        width={39.4}
        left={0}
      />

      <UserTextInput
        label="1-7. Stored Q sorts Header Text"
        stateId="langStoredQsortsHeaderText"
        sectionName="lang"
        width={30.3}
        left={0}
      />

      <UserTextInput
        label="1-8. Delete Modal Header"
        stateId="langLocalDeleteModalHead"
        sectionName="lang"
        width={35.5}
        left={0}
      />

      <UserTextAreaInput
        label="1-9. Delete Modal Text"
        stateId="langLocalDeleteModalText"
        sectionName="lang"
        width={38.5}
        height={100}
        left={0}
      />

      <UserTextInput
        label="1-10. Participants"
        stateId="langLocalParticipantsText"
        sectionName="lang"
        width={42.5}
        left={0}
      />
      <UserTextInput
        label="1-11. Save Before Delete Header"
        stateId="langLocalSaveBeforeDeleteModalHeader"
        sectionName="lang"
        width={29}
        left={0}
      />
      <UserTextInput
        label="1-12. Save Before Delete Text"
        stateId="langLocalSaveBeforeDeleteModalText"
        sectionName="lang"
        width={32}
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
