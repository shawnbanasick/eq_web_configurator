import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import Firebase from "./Firebase";
import GeneralButton from "../../Utils/GeneralButton";
import Sheets from "./Sheets";
import appState from "../../GlobalState/appState";
import Netlify from "./Netlify";

const Database = () => {
  const handleClick = (e) => {
    console.log(e.target.id);
    if (e.target.id === "netlify") {
      appState.showFirebase = false;
      appState.showSheets = false;
      appState.showNetlify = true;
      appState.firebaseButtonColor = "#d6dbe0";
      appState.sheetsButtonColor = "#d6dbe0";
      appState.netlifyButtonColor = "#a5d6a7";
    } else if (e.target.id === "firebase") {
      appState.showFirebase = true;
      appState.showSheets = false;
      appState.firebaseButtonColor = "#a5d6a7";
      appState.sheetsButtonColor = "#d6dbe0";
      appState.netlifyButtonColor = "#d6dbe0";
    } else {
      appState.showFirebase = false;
      appState.showSheets = true;
      appState.firebaseButtonColor = "#d6dbe0";
      appState.sheetsButtonColor = "#a5d6a7";
      appState.netlifyButtonColor = "#d6dbe0";
    }
  };

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Database Settings</Title>
      <DisplayModeText>
        Currently, the recommended data storage option is to use <b>Netlify</b>{" "}
        forms. It is very easy to setup. It is free for projects with less than
        100 participant responses per month. To set up Netlify as the database
        for your project, click the "Netlify" button below.
        <br /> <br />
        If anticipate having more than 100 participants in your project, then
        you might want to use Firebase or Sheets. <b>Firebase</b> is a "database
        as a service" company owned by Google. It provides a free and robust way
        to store the participants' response data. The number of participants is
        not limited. The participant data is stored in JSON format and can be
        imported into KADE or other software. Click on the "Firebase" button
        below to display the guide for setting up Firebase for your project.
        <br />
        <br />
        <b>Google Sheets</b> uses the familiar spreadsheet format and is easier
        to setup than Firebase, but it requires the use of a third-party web
        application called "Stein". It is free for projects with less than 200
        participant responses. To set up Google Sheets as the database for your
        project, click the "Sheets" button below to display the guide.
        <br />
        <br />
        If you don't have a Google account, you'll have to make one before you
        begin the setup process for Firebase or Sheets.
        <br /> <br />
      </DisplayModeText>
      <SpacerDiv />
      <ButtonDiv>
        <p>Display Database Type:</p>
        <SelectFirebaseButton
          id="netlify"
          onClick={handleClick}
          color={appState.netlifyButtonColor}
        >
          Netlify
        </SelectFirebaseButton>
        <SelectFirebaseButton
          id="firebase"
          onClick={handleClick}
          color={appState.firebaseButtonColor}
        >
          Firebase
        </SelectFirebaseButton>
        <SelectSheetsButton
          id="sheets"
          onClick={handleClick}
          color={appState.sheetsButtonColor}
        >
          Sheets
        </SelectSheetsButton>
      </ButtonDiv>
      {appState.showFirebase && <Firebase />}
      {appState.showSheets && <Sheets />}
      {appState.showNetlify && <Netlify />}
    </MainContent>
  );
};

export default view(Database);

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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-size: 18px;
  padding-bottom: 30px;
  /* user-select: none; */
  color: var(--font-color);

  img {
    /* width: 150px; */
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 1000px;
  }

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
    color: white;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  align-self: center;
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-top: 40px;
  width: 78vw;
  max-width: 1200px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`;

const SpacerDiv = styled.div`
  height: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SelectFirebaseButton = styled(GeneralButton)`
  background-color: ${(props) => props.color};
  font-weight: bold;
  font-size: 20px;
  // visibility: ${(props) => (props.view ? "hidden" : "visible")};

  width: 180px;
`;

const SelectSheetsButton = styled(GeneralButton)`
  background-color: ${(props) => props.color};

  font-weight: bold;
  font-size: 20px;
  // visibility: ${(props) => (props.view ? "hidden" : "visible")};

  width: 180px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  width: 800px;
`;
