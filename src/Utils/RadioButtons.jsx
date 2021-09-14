import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import GeneralButton from "../Utils//GeneralButton";
import { useTranslation } from "react-i18next";
import appState from "../GlobalState/appState";

const SelectionButtons = (props) => {
  // props = label, buttonIdArray=[], stateId, sectionName

  const clearAllButtons = () => {
    const array = props.buttonIdArray;
    array.forEach((element) => {
      let key = `${props.stateId}${element}Active`; //
      appState[key] = false;
    });
  };

  const { t } = useTranslation();

  const handleOnclick = (event) => {
    event.preventDefault();
    clearAllButtons();
    const value = event.target.id;
    const buttonActiveState = event.target.dataset.value;
    const key = `${props.stateId}`; //
    appState[buttonActiveState] = true;
    appState[key] = value;
  };

  return (
    <ButtonsContainerDiv>
      <TitleSpan>{`${t(props.label)} `}</TitleSpan>
      {props.buttonIdArray.map((item) => (
        <SelcButtons
          tabindex="0"
          key={`buttonSelect${item}`}
          id={item}
          isActive={appState[`${props.stateId}${item}Active`]}
          // disabled={isRadioSelectDisabled}
          onClick={handleOnclick}
          data-value={`${props.stateId}${item}Active`}
        >
          {item}
        </SelcButtons>
      ))}
    </ButtonsContainerDiv>
  );
};

export default view(SelectionButtons);

const ButtonsContainerDiv = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 70px;
  width: 800px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SelcButtons = styled(GeneralButton)`
  min-width: 70px;
`;

const TitleSpan = styled.span`
  margin-right: 10px;
`;
