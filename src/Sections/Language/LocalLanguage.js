import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
//import GlobalStyle from "../../Utils/GlobalStyle";
// import GeneralButton from "../../Utils/GeneralButton";
import UserTextInput from "../../Utils/UserTextInput";
import UserTextAreaInput from "../../Utils/UserTextAreaInput";
import appState from "../../GlobalState/appState";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
//import ImageModal from "./ImageModal";
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
    <>
      <HeaderButtonBar>
        <SectionTitle>Landing Screen</SectionTitle>
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
        label="2-1. Landing Page Title Bar"
        stateId="langLandingHead"
        sectionName="lang"
        width={34}
        left={0}
      />
      <UserTextAreaInput
        label="2-2. Welcome Message"
        stateId="langWelcomeMessage"
        sectionName="lang"
        width={36}
        height={300}
        left={0}
      />
      <UserTextInput
        label="2-3. Help modal header text"
        stateId="langLandingHelpModalHead"
        sectionName="lang"
        width={34}
        left={0}
      />
      <UserTextAreaInput
        label="2-4. Help modal main text"
        stateId="langLandingHelpModalText"
        sectionName="lang"
        width={35}
        height={140}
        left={0}
      />
    </>
  );
};

export default view(LocalLanguage);

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-bottom: 50px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
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
