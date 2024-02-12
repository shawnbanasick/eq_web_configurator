import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import Image from "../../assets/images/EQ-brand.svg";

const setMode = (event) => {
  if (event.target.id === "pro") {
    appState.displayMode = "pro";
  } else {
    appState.displayMode = "beginner";
  }
};

const Start = () => {
  let releaseVersion = `Version ${appState.releaseVersion}`;
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
      <HeroContainer>
        <img src={Image} height="180" alt="s" />
        <Title>
          EQ Web Sort Configurator <br />
          {releaseVersion}
        </Title>
      </HeroContainer>
      <IntroText>
        EQ Web Sort Configurator simplifies the set-up and testing of an{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shawnbanasick/eq-web-sort"
        >
          EQ Web Sort
        </a>{" "}
        project for online Q-sorting. It provides guided editing of the EQ Web
        Sort configuration files and offers increased control over the design of
        the Q sort. It also includes a built-in web server to immediately test
        your Q sort setup on any locally installed web browser.
      </IntroText>
      <IntroText>
        Citation:
        <br /> Banasick, S. (2023). EQ Web Sort Configurator (Version 6.0.0)
        [Computer software]. https://doi.org/10.5281/zenodo.8337125
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
        {showDescriptionPro && (
          <IntroText>shows only the essential configurations</IntroText>
        )}
        {showDescriptionBeginner && (
          <IntroText>displays in-depth descriptions and directions</IntroText>
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
  color: var(--font-color);

  /* border: 2px solid green; */
  a {
    padding-bottom: 1px;
    text-decoration: none;
    color: #000;
    box-shadow: inset 0 -4px 0 var(--second-theme-color);
    transition: background-color 0.25s ease-out;
    margin-left: 5px;
  }

  a:hover {
    background-color: var(--second-theme-color);
    padding-top: 2px;
    box-shadow: none;
  }
`;

const Title = styled.div`
  align-self: center;
  text-align: center;
  font-size: 70px;
  width: 450px;
  font-family: "Contrail";
  color: var(--font-color);
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
  padding: 10px;
  width: 70vw;
  font-size: 1.6vw;
`;

const CustomH2 = styled.h2`
  text-align: center;
`;

const DescriptionDiv = styled.div`
  text-align: center;
  margin-top: 25px;
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
`;
