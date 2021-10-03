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

  let configShowStep4 = convertToFalse(appState.configShowStep4);
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
          Questions can include HTML paired tag formatting:
          <ul>
            <li>
              &lt;b&gt;&nbsp;bold words&nbsp;&lt;/b&gt; produces{" "}
              <b>bold words</b>
            </li>
            <li>
              &lt;u&gt;&nbsp;underlined words&nbsp;&lt;/u&gt; produces{" "}
              <u>underlined words</u>
            </li>
            <li>
              &lt;i&gt;&nbsp;italicized words&nbsp;&lt;/i&gt; produces{" "}
              <i>italicized words</i>
            </li>
            <li>
              &lt;b&gt;&lt;u&gt;&lt;i&gt;&nbsp;nested
              tags&nbsp;&lt;/i&gt;&lt;/u&gt;/b&gt; can produce{" "}
              <b>
                <u>
                  <i>all three</i>
                </u>
              </b>
            </li>
          </ul>
          Since the text is converted to html format, all &lt; (less than) and
          &gt; (greater than) characters will be interpreted as being part of
          HTML pair tags. If you want to use them in different context, you will
          need to use special codes to represent the character. These codes
          begin with the "<b>&amp;</b>" character and end with a semi-colon.
          <ul>
            <li>
              For the "less than" symbol "&lt;", use <b>&amp;lt;</b> in your
              text (for example, if you input "hamburgers &amp;lt; pizza" here,
              it will become "hamburgers &lt; pizza" on the web
            </li>
            <li>
              For the "greater than" symbol "&gt;", use <b>&amp;gt;</b> in your
              text (for example, "hamburgers &amp;gt; pizza" here, it will
              become "hamburgers &gt; pizza" on the web
            </li>
          </ul>
          Because it is used for these types of special codes, the <b>&amp;</b>{" "}
          character cannot be used by itself. It is an invalid character and{" "}
          <b>will cause an error</b>. So, if you use text like "hamburgers &amp;
          pizza" in the input below it <b>prevent your web page from loading</b>
          .
        </DisplayModeText>
        <RadioButtons
          label="14. Include survey (Step 4):"
          buttonIdArray={["true", "false"]}
          stateId="configShowStep4"
          sectionName="config"
        />
      </QuestionContainer>
      <SurveyContainer displayVar={configShowStep4}>
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
