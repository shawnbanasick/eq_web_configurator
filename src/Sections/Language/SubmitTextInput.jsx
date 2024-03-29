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
          Submit Screen (Netlify, Firebase and Sheets)
        </SectionTitle>
        <div>
          <DefaultsButton id="submitDef" onClick={handleShowDefaults}>
            Use Defaults
          </DefaultsButton>
          <ClearAllButton id="submitClear" onClick={handleClearAll}>
            Clear Section
          </ClearAllButton>
          <RefImageButton id="submitImage" onClick={handleRefImage}>
            Ref. Img. 8-1 to 8-4
          </RefImageButton>
          <RefImageButton id="submitImage2" onClick={handleRefImage}>
            Ref. Img. 8-5 & 8-6
          </RefImageButton>
          <RefImageButton id="submitImage3" onClick={handleRefImage}>
            Ref. Img. 8-7 & 8-8
          </RefImageButton>
          <RefImageButton
            id="submitImage4"
            marginRight="35px"
            onClick={handleRefImage}
          >
            Ref. Img. 8-9 & 8-10
          </RefImageButton>
        </div>
      </HeaderButtonBar>

      <UserTextInput
        label="8-1. Final Step"
        stateId="langTransferHead"
        sectionName="lang"
        width={45}
        left={0}
      />
      <UserTextAreaInput
        label="8-2. Text above Submit Data Button"
        stateId="langTransferTextAbove"
        sectionName="lang"
        width={27.5}
        height={75}
        left={0}
      />
      <UserTextInput
        label="8-3. Submit Data"
        stateId="langBtnTransfer"
        sectionName="lang"
        width={43.5}
        left={0}
      />
      <UserTextAreaInput
        label="8-4. Text below Submit Data Button"
        stateId="langTransferTextBelow"
        sectionName="lang"
        width={28}
        height={75}
        left={0}
      />
      <UserTextInput
        label="8-5. Submit data success modal header"
        stateId="langTransferOkModalHeader"
        sectionName="lang"
        width={24}
        left={0}
      />
      <UserTextAreaInput
        label="8-6. Submit data success modal text"
        stateId="langTransferOkModalText"
        sectionName="lang"
        width={27}
        height={75}
        left={0}
      />
      <UserTextInput
        label="8-7. Submit data fail modal header"
        stateId="langTransferFailModalHeader"
        sectionName="lang"
        width={28.6}
        left={0}
      />
      <UserTextAreaInput
        label="8-8. Submit data fail modal text"
        stateId="langTransferFailModalText"
        sectionName="lang"
        width={31.5}
        height={75}
        left={0}
      />
      <UserTextAreaInput
        label="8-9. Fallback message"
        stateId="langFallbackMessage"
        sectionName="lang"
        width={39}
        height={75}
        left={0}
      />
      <UserTextInput
        label="8-10. Download button label"
        stateId="langBtnDownload"
        sectionName="lang"
        width={34}
        left={0}
      />
      <UserTextAreaInput
        label="8-11. Goodbye Message"
        stateId="langGoodbyeMessage"
        sectionName="lang"
        width={37}
        height={80}
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
  width: 40%;
`;
