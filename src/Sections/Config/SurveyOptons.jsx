import React from "react";
import { view, store } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import appState from "../../GlobalState/appState";
import Survey from "../Survey/Survey";
import RadioButtons from "../../Utils/RadioButtons";

const SurveyOptions = (props) => {
  const localState = store({ displayItem: true });

  const convertToFalse = (value) => {
    if (value === false || value === "false") {
      localState.displayItem = false;
      return false;
    } else {
      localState.displayItem = true;
      return true;
    }
  };

  let configShowStep5 = convertToFalse(appState.configShowStep5);
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <React.Fragment>
      <QuestionContainer>
        <SubTitle>Survey Options (Optional Step 4)</SubTitle>
        <DisplayModeText>
          Eight types of survey questions are available. If a question is
          required and the participant fails to answer, navigation to the next
          step is blocked and the question is outlined in pink.
          <br />
          <br />
          Html tags can be used to style the questions. Wrapping text with
        </DisplayModeText>
        <RadioButtons
          label="14. Include survey (Step 4):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep5"
          sectionName="config"
        />
      </QuestionContainer>
      <SurveyContainer displayVar={configShowStep5}>
        <Survey />
      </SurveyContainer>
    </React.Fragment>
  );
};

export default view(SurveyOptions);

// todo - try onTransitionEnd for proper fade out and remove from dom

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    height: auto;
  }

  to {
    opacity: 0;
    height: 0px;
  }
`;

const SubTitle = styled.h1`
  font-size: 30px;
  width: 70vw;
  margin-left: 10px;
  margin-top: 50px;
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`;

const QuestionContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 25px;
  width: 78vw;
`;

const SurveyContainer = styled.div`
  display: ${({ displayVar }) => (displayVar ? "inline-block" : "none")};
  animation: ${(displayVar) => (displayVar ? fadeIn : fadeOut)} 1s ease-in-out;
`;