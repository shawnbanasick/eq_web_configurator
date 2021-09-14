import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";

const setMode = (event) => {
  if (event.target.id === "pro") {
    appState.displayMode = "pro";
  } else {
    appState.displayMode = "beginner";
  }
};

const Start = () => {
  let showDescriptionPro;
  let showDescriptionBeginner;
  const displayMode = appState.displayMode;
  if (displayMode === "pro") {
    appState.beginnerButtonActive = false;
    appState.proButtonActive = true;
    showDescriptionPro = true;
    showDescriptionBeginner = false;
  } else {
    appState.beginnerButtonActive = true;
    appState.proButtonActive = false;
    showDescriptionPro = false;
    showDescriptionBeginner = true;
  }

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Easy HTMLQ Configurator</Title>
      <IntroText>
        Easy HTMLQ Configurator simplifies the set-up and testing of an online Q
        sort project. It provides simplified editing of the HTMLQ configuration
        files and offers increased control over the appearance of the Q-sort. It
        also includes a local web server to immediately test the setup on any
        installed web browser.
      </IntroText>
      <CustomH2>Select Configurator Display Mode:</CustomH2>
      <ButtonContainer>
        <BeginnerButton
          id="beginner"
          isActive={appState.beginnerButtonActive}
          onClick={setMode}
        >
          Novice
        </BeginnerButton>
        <ProButton
          id="pro"
          isActive={appState.proButtonActive}
          onClick={setMode}
        >
          Expert
        </ProButton>
      </ButtonContainer>
      <DescriptionDiv>
        {showDescriptionPro && <IntroText>just the essentials</IntroText>}
        {showDescriptionBeginner && (
          <IntroText>in-depth descriptions and directions</IntroText>
        )}
      </DescriptionDiv>
    </MainContent>
  );
};

export default view(Start);

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
  justify-content: center;
  flex-direction: column;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  width: calc(100vw - 137px);
  box-sizing: border-box;
  min-height: calc(100vh - 3px);
  overflow: auto;
  user-select: none;
  /* border: 2px solid green; */
`;

const Title = styled.h1`
  align-self: center;
  text-align: center;
  font-size: 5vw;
  width: 70vw;
`;

const BeginnerButton = styled(GeneralButton)`
  box-sizing: border-box;
  text-align: center;
  vertical-align: center;
  height: 100px;
  width: 200px;
  font-size: 40px;
  font-weight: bold;
`;

const ProButton = styled(GeneralButton)`
  box-sizing: border-box;
  text-align: center;
  vertical-align: center;
  height: 100px;
  width: 200px;
  font-weight: bold;
  font-size: 40px;
`;

const ButtonContainer = styled.div`
  /* align-self: center; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  width: 100%;
  /* max-width: 1200px; */
  margin-top: 0px;
`;

const IntroText = styled.span`
  /* font-size: 22px; */
  align-self: center;
  padding: 30px;
  width: 70vw;
  font-size: 2vw;
`;

const CustomH2 = styled.h2`
  text-align: center;
`;

const DescriptionDiv = styled.div`
  text-align: center;
  margin-top: 25px;
`;
