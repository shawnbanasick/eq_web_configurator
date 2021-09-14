import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { useTranslation } from "react-i18next";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import Start from "./Sections/Start/Start";
import Config from "./Sections/Config/Config";
import Statements from "./Sections/Statements/Statements";
import Map from "./Sections/Map/Map";
import Language from "./Sections/Language/Language";
import Firebase from "./Sections/Firebase/Firebase";
import License from "./Sections/License/License";
import Server from "./Sections/Server/Server";
import Github from "./Sections/Github/Github";
import Weblinks from "./Sections/Weblinks/Weblinks";
import Styles from "./Sections/Styles/Styles";
import appState from "./GlobalState/appState";
import ErrorBoundary from "./Utils/ErrorBoundary";
import indicateDataButtonColor from "./Sections/Start/indicateDataButtonColor";
import "./Utils/UserSelectionSwitch.css";

const handleClick = (target) => {
  const activeWindow = appState.activeWindow;
  // console.log(activeWindow);
  appState[activeWindow] = false;
  appState[target] = true;
  // console.log(target);
  appState.activeWindow = target;
};

const App = (props) => {
  const [t] = useTranslation();

  const {
    viewStart,
    viewConfig,
    viewStatements,
    viewMap,
    viewLanguage,
    viewFirebase,
    viewServer,
    viewWeblinks,
    viewStyles,
    viewGithub,
    viewLicense,
  } = appState;

  const { isDataButtonGreen, hasUnforcedBeenConfirmed } = appState;

  // getState
  const inputButtonColor = appState.isInputButtonGreen
    ? "var(--main-theme-color)"
    : "#d6dbe0";
  const correlationsButtonColor = appState.isCorrelationsButtonGreen
    ? "var(--main-theme-color)"
    : "#d6dbe0";
  const factorsButtonColor = appState.isFactorsButtonGreen
    ? "var(--main-theme-color)"
    : "#d6dbe0";
  const rotationButtonColor = appState.isRotationButtonGreen
    ? "var(--main-theme-color)"
    : "#d6dbe0";
  const loadingsButtonColor = appState.isLoadingsButtonGreen
    ? "var(--main-theme-color)"
    : "#d6dbe0";

  return (
    <ErrorBoundary>
      <AppWrap>
        <FilesWindow>
          <StartButton
            active={viewStart}
            onClick={() => handleClick("viewStart")}
          >
            <p className="title">Start</p>
          </StartButton>
          <FileButton
            buttonColor={inputButtonColor}
            active={viewServer}
            onClick={() => handleClick("viewServer")}
          >
            <p className="title">{`1. ${t("Server")}`}</p>
          </FileButton>
          <FileButton
            buttonColor={inputButtonColor}
            active={viewConfig}
            onClick={() => handleClick("viewConfig")}
          >
            <p className="title">{`2. ${t("Config")}`}</p>
          </FileButton>
          <FileButton
            buttonColor={indicateDataButtonColor(
              isDataButtonGreen,
              hasUnforcedBeenConfirmed
            )}
            active={viewStatements}
            onClick={() => handleClick("viewStatements")}
          >
            <p className="title">{`3. ${t("Statements")}`}</p>
          </FileButton>
          <FileButton
            buttonColor={correlationsButtonColor}
            active={viewMap}
            onClick={() => handleClick("viewMap")}
          >
            <p className="title">{`4. ${t("Map")}`}</p>
          </FileButton>
          <FileButton
            buttonColor={factorsButtonColor}
            active={viewLanguage}
            onClick={() => handleClick("viewLanguage")}
          >
            <p className="title">{`5. ${t("Language")}`}</p>
          </FileButton>
          <FileButton
            buttonColor={loadingsButtonColor}
            active={viewStyles}
            onClick={() => handleClick("viewStyles")}
          >
            <p className="title">{`6. ${t("Styles")}`}</p>
          </FileButton>

          <FileButton
            buttonColor={rotationButtonColor}
            active={viewFirebase}
            onClick={() => handleClick("viewFirebase")}
          >
            <p className="title">{`7. ${t("Firebase")}`}</p>
          </FileButton>
          <FileButton
            buttonColor={rotationButtonColor}
            active={viewGithub}
            onClick={() => handleClick("viewGithub")}
          >
            <p className="title">{`8. ${t("Upload")}`}</p>
          </FileButton>
          <Spacer />
          <FileButton
            buttonColor={loadingsButtonColor}
            style={{ textAlign: "center" }}
            active={viewWeblinks}
            onClick={() => handleClick("viewWeblinks")}
          >
            <p className="title">{`${t("Related Software")}`}</p>
          </FileButton>

          <FileButton
            buttonColor={loadingsButtonColor}
            style={{ textAlign: "center" }}
            active={viewLicense}
            onClick={() => handleClick("viewLicense")}
          >
            <p className="title">{`${t("Licenses")}`}</p>
          </FileButton>
        </FilesWindow>
        <ActionWindow>
          {viewStart && <Start view={viewStart} />}
          {viewConfig && <Config view={viewConfig} />}
          {viewServer && <Server view={viewServer} />}
          {viewStatements && <Statements view={viewStatements} />}
          {viewMap && <Map view={viewMap} />}
          {viewLanguage && <Language view={viewLanguage} />}
          {viewFirebase && <Firebase view={viewFirebase} />}
          {viewStyles && <Styles view={viewStyles} />}
          {viewGithub && <Github view={viewGithub} />}
          {viewWeblinks && <Weblinks view={viewWeblinks} />}
          {viewLicense && <License view={viewLicense} />}
        </ActionWindow>
      </AppWrap>
    </ErrorBoundary>
  );
};

export default view(App);

const AppWrap = styled.div`
  display: grid;
  grid-template-columns: 135px 1fr;
  font-family: Helvetica;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
`;

const FilesWindow = styled.div`
  box-sizing: border-box;
  background: #d6dbe0;
  width: 135px;
  min-width: 135px;
  height: 100vh;
  overflow: hidden;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
`;

const ActionWindow = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background-color: white;
  width: calc(100vw - 135px);
  overflow: auto;
`;

const FileButton = styled.button`
  box-sizing: border-box;
  padding: 10px;
  padding-bottom: 8px;
  padding-top: 15px;
  width: 100%;
  height: auto;
  background: ${(props) => props.buttonColor || "#d6dbe0"};
  color: black;
  border: none;
  text-align: left;
  transition: 0.3s ease all;
  outline: none !important;
  user-select: none;

  &:hover {
    opacity: 1;
    box-shadow: inset 0 0 0 4px #666, 0 0 1px transparent;
  }

  ${({ active }) =>
    active &&
    `
    background-color: white;
    opacity: 1;
    `};

  .title {
    font-weight: bold;
    font-size: 0.9rem;
    margin: 0 0 5px;
    color: black;
  }
`;

// border-bottom: solid 1px gray;
// ${props => props.width};

const StartButton = styled.button`
  box-sizing: border-box;
  height: 45px;
  padding: 5px;
  padding-right: 25px;
  width: 100%;
  background-color: var(--second-theme-color);
  border: none;
  text-align: center;
  transition: 0.3s ease all;
  outline: none !important;
  user-select: none;

  .title {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 5px 0 5px;
    color: black;
  }

  &:hover {
    opacity: 1;
    box-shadow: inset 0 0 0 4px #666, 0 0 1px transparent;
  }

  ${({ active }) =>
    active &&
    `
    background-color: white;
    opacity: 1;
    .title {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 5px 0 5px;
    color: black;
  } 
    `};
`;

// const NoUpdateSpacer = styled.button`
//   box-sizing: border-box;
//   padding: 10px;
//   width: 100%;
//   height: 75px;
//   background: #d6dbe0;
//   color: black;
//   border: none;
//   text-align: left;
//   transition: 0.3s ease all;
// `;

const Spacer = styled.div`
  margin-top: 50px;
`;
