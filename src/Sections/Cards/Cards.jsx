import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
// import StatementTextArea from "./StatementTextArea";
import generateStep2Html from "./generateStep2Html";
import exportToXml from "../../Utils/exportToXml";
import RadioButtons from "../../Utils/RadioButtons";
import UserNumberInput from "../../Utils/UserNumberInput";

// import generateStatementsXml from "./generateStatementXml";
import GeneralButton from "../../Utils/GeneralButton";

const handleClickStep2 = () => {
  const data = generateStep2Html();
  exportToXml("htmlq.js", data, "js");
};

const handleClickStep3 = () => {
  //   const data = generateStatementsXml();
  //   exportToXml("statements.xml", data, "xml");
};

const Cards = () => {
  return (
    <MainContent>
      <GlobalStyle />
      <Title>Cards Settings</Title>
      <DisplayModeText>
        The default mode for Easy HTMLQ is for a responsive Q-sort card size. In
        other words, the size of the cards will change according to the size of
        the participant's browser on the initial web page load of Easy HTMLQ.
        All of the cards will be visible on the screen and no page scrolling is
        needed.
        <br />
        <br />
        If you want to specify a constant size for the Q-sort cards across all
        browsers and screen sizes, need to set a fixed height and width here. In
        this case, the participants will need to scroll to view all of the
        Q-sort cards. You should also set a constant font size for all screen
        sizes in the "Styles" section.
      </DisplayModeText>
      {/* <StatementTextArea /> */}

      <SettingsDiv>
        <SectionHeader>
          Step #2 Settings (initial Q-sorting screen)
        </SectionHeader>

        <RadioButtons
          label="Use constant card height:"
          buttonIdArray={["true", "false"]}
          stateId="cardsStep2ConstantHeight"
          sectionName="cards"
        />
        <UserNumberInput
          label="Q-sort card height (pixels):"
          step={1}
          value={20}
          upperLimit={500}
          lowerLimit={10}
          stateId="cardsStep2CardHeight"
          sectionName="cards"
        ></UserNumberInput>
        <RadioButtons
          label="Use constant card width:"
          buttonIdArray={["true", "false"]}
          stateId="cardsStep2ConstantWidth"
          sectionName="cards"
        />

        <UserNumberInput
          label="Q-sort card width (pixels):"
          step={1}
          value={20}
          upperLimit={500}
          lowerLimit={10}
          stateId="cardsStep2CardWidth"
          sectionName="cards"
        ></UserNumberInput>
      </SettingsDiv>

      <GeneralButton onClick={() => handleClickStep2()}>
        Save file to <b>SRC</b> folder and replace the "htmlq.js" file
      </GeneralButton>

      <SettingsDiv>
        <SectionHeader>
          Step #3 Cards (Card position swapping screen)
        </SectionHeader>

        <RadioButtons
          label="Use constant card height:"
          buttonIdArray={["true", "false"]}
          stateId="cardsStep3ConstantHeight"
          sectionName="cards"
        />
        <UserNumberInput
          label="Q-sort card height (pixels):"
          step={1}
          value={20}
          upperLimit={500}
          lowerLimit={10}
          stateId="cardsStep3CardHeight"
          sectionName="cards"
        ></UserNumberInput>
        <RadioButtons
          label="Use constant card width:"
          buttonIdArray={["true", "false"]}
          stateId="cardsStep3ConstantWidth"
          sectionName="cards"
        />

        <UserNumberInput
          label="Q-sort card width (pixels):"
          step={1}
          value={20}
          upperLimit={500}
          lowerLimit={10}
          stateId="cardsStep3CardWidth"
          sectionName="cards"
        ></UserNumberInput>
      </SettingsDiv>

      <GeneralButton onClick={() => handleClickStep3()}>
        Save file to <b>TEMPLATES</b> folder and replace the "step3.html" file
      </GeneralButton>
    </MainContent>
  );
};

export default view(Cards);

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
  }

  to {
    opacity: 0;
  }
`;

const MainContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  width: calc(100vw - 137px);
  box-sizing: border-box;
  max-height: calc(100vh - 3px);
  overflow: auto;
  user-select: none;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;

const DisplayModeText = styled.div`
  align-self: center;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 900px;
  font-size: 20px;
  padding: 0 10px 0 10px;
  border: 2px solid black;
`;

const SectionHeader = styled.h3`
  margin-top: 50px;
  text-align: left;
`;

const SettingsDiv = styled.div`
  margin-bottom: 30px;
  text-align: left;
  /* border: 2px solid red; */
  padding-left: 20px;
  width: 90%;
`;
