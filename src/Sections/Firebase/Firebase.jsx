import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import FirebaseTextArea from "./FirebaseTextArea";
import exportToXml from "../../Utils/exportToXml";
import GeneralButton from "../../Utils/GeneralButton";
import generateHtmlWithFirebase from "./generateHtmlWithFirebase";
import { toast } from "react-toastify";
import { ToastContainer, Slide } from "react-toastify";
import addProject from "../../assets/images/firebase_add_project.png";
import realtimeDatabase from "../../assets/images/firebase-realtime-database.png";
import authentication from "../../assets/images/firebase-authentication.png";
import authentication1 from "../../assets/images/authentication1.png";
import authentication4 from "../../assets/images/authentication4.png";
import authentication3 from "../../assets/images/authentication3.png";
import authentication2 from "../../assets/images/authentication2.png";
import addProjectName from "../../assets/images/firebase-add-project-name.png";
import createProject from "../../assets/images/firebase-create-project.png";
import projectCreated from "../../assets/images/firebase-project-created.png";
import getJavascriptApi from "../../assets/images/firebase-get-javascript-api.png";
import addNickname from "../../assets/images/firebase-add-nickname.png";
import newSetupFirebaseConfig from "../../assets/images/newSetupFirebaseConfig.png";
import createDatabase from "../../assets/images/firebase-create-database.png";
import databaseLocation from "../../assets/images/firebase-database-location.png";
import defaultRules from "../../assets/images/firebase-default-rules.png";
import initialDatabase from "../../assets/images/firebase-initial-database.png";
import clickRules from "../../assets/images/firebase-click-rules.png";
import editRules from "../../assets/images/firebase-edit-rules.png";
import newRules from "../../assets/images/firebase-new-rules.png";
import publishRules from "../../assets/images/firebase-publish-rules.png";
import databaseData from "../../assets/images/firebase-database-data.png";
import exportJson from "../../assets/images/firebase-export-json.png";
import gotoConsole from "../../assets/images/firebase-goto-console.png";
import firebaseDeleteParticipant from "../../assets/images/firebase-delete-participant.png";
import firebaseDeleteConfirm from "../../assets/images/firebase-delete-confirm.png";

const text = `
    {
      "rules": {
      ".read": false,
      ".write": "auth.uid !== null"
      }
    }
    `;

const handleClick = () => {
  const data = generateHtmlWithFirebase();
  console.log(data);
  if (data !== undefined) {
    exportToXml("firebaseInfo.js", data, "js");
  }
};

const notifySuccess = () => {
  toast.success("Rules Copied", {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const notifyError = () => {
  toast.error("Error", {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const copyToClipboard = (value) => {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
};

const copyText = () => {
  try {
    copyToClipboard(text);
    notifySuccess();
  } catch (e) {
    notifyError();
  }
};

const FirebaseInfo = () => {
  return (
    <MainContent>
      <StyledToastContainer />
      <GlobalStyle />
      <Title>Database Settings</Title>
      <DisplayModeText>
        There are two options for storing the participant response data created
        by EQ Web Sort. <b>Firebase</b> is a "database as a service" company
        owned by Google. It provides a free and robust way to store the
        participants' response data. The number of participants is not limited,
        but the participant data is stored in JSON format. Follow the guide
        below to set up Firebase.
        <br />
        <br />
        <b>Google Sheets</b> uses the familiar spreadsheet format and is much
        easier to setup, but requires the use of a 3rd party web application
        called
        <b>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://steinhq.com/"
          >
            "Stein"
          </a>
        </b>
        . It is free for projects with less than 200 participant responses. To
        set up Google Sheets as the database for your project, go back to
        Section "2. Config", select "Google Sheets", and follow the guide to get
        the Stein API URL.
        <br />
        <br />
        If you don't have a Google account, you'll have to make one before you
        begin the setup process.
        <br /> <br />
      </DisplayModeText>
      <SpacerDiv />

      <Title>FIREBASE SETUP</Title>

      <DisplayModeText>
        Information on how to export the Firebase data for analysis and how to
        delete individual data entries is at the bottom of this page. <br />{" "}
        <br />
        There are four steps needed to provide a database for EQ Web Sort:
        <br /> &nbsp;&nbsp;&nbsp;1&#41; create a new Firebase project;
        <br /> &nbsp;&nbsp;&nbsp;2&#41; set up anonymous log-ins;
        <br /> &nbsp;&nbsp;&nbsp;3&#41; initialize the database;
        <br /> &nbsp;&nbsp;&nbsp;4&#41; set the database access rules.
      </DisplayModeText>

      <Title2>Step 1 of 4 - Create a New Project</Title2>

      <DisplayModeText>
        <b>1a.</b>
        <br /> Using your Google account, "Sign-in" to{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://firebase.google.com/"
        >
          Firebase
        </a>{" "}
        and then click on "Go to console".
      </DisplayModeText>
      <img src={gotoConsole} alt="s" />

      <DisplayModeText>
        <b>1b.</b>
        <br /> In your Firebase console, click on "Add project"
      </DisplayModeText>
      <img src={addProject} alt="add a project to firebase" />
      <DisplayModeText>
        <b>1c.</b>
        <br /> Input your project name and then click "Continue"
      </DisplayModeText>
      <img src={addProjectName} alt="s" />
      <DisplayModeText>
        <b>1d.</b>
        <br /> Disable Google Analytics and then click "Create Project"
      </DisplayModeText>
      <img src={createProject} width="90%" alt="s" />
      <DisplayModeText>
        <b>1e.</b>
        <br /> You will get confirmation that the project is ready. Then click
        "Continue".
      </DisplayModeText>
      <img src={projectCreated} alt="s" />
      <DisplayModeText>
        <b>1f.</b>
        <br /> Add the Firebase Javascript SDK information by clicking on the
        Javascript icon indicated in the image below.
      </DisplayModeText>
      <img src={getJavascriptApi} alt="s" />
      <DisplayModeText>
        <b>1g.</b>
        <br /> Input a nickname for your app, then click on "Register app".
      </DisplayModeText>

      <img src={addNickname} alt="s" />

      <DisplayModeText>
        <b>1h.</b>
        <br /> Click "Use a script tag" at the top of the page. Then highlight
        the "firebaseConfig" section (as shown in the image). Right-click and
        &nbsp;<b>COPY</b> only this section.
      </DisplayModeText>

      <img src={newSetupFirebaseConfig} width="700" alt="s" />

      <DisplayModeText>
        <b>1i.</b>
        <br /> Paste the Firebase Javascript SDK information into the text area
        below. Then click the orange button to save the new file to the{" "}
        <b>settings folder</b> and replace the "<b>firebaseInfo.js</b>" file.
      </DisplayModeText>
      <SpacerDiv />
      <FirebaseTextArea />
      <SaveFileButton onClick={() => handleClick()}>
        Click here to save file to the <b>settings folder</b> and replace the
        "firebaseInfo.js" file
      </SaveFileButton>
      <SpacerDiv />
      <SpacerDiv />
      <SpacerDiv />

      <Title2>Step 2 of 4 - Allow Anonymous Log-ins</Title2>
      <DisplayModeText>
        <b>2a.</b>
        <br /> Go back to Firebase and click on "Authentication" in the
        navigation panel on the left side of the page.
      </DisplayModeText>
      <img src={authentication} alt="a" />
      <DisplayModeText>
        <b>2b.</b>
        <br /> Click on "Sign-in method"
      </DisplayModeText>
      <img src={authentication1} width="700" alt="a" />
      <DisplayModeText>
        <b>2c.</b>
        <br />
        Find "Anonymous" and click it.
      </DisplayModeText>
      <img src={authentication2} width="700" alt="ae" />
      <DisplayModeText>
        <b>2d.</b>
        <br /> Click the slider in the top right to enable anonymous sign-in,
        and then click "<b>Save</b>".
      </DisplayModeText>
      <img src={authentication3} width="700" alt="a" />
      <DisplayModeText>
        <b>2e.</b>
        <br /> Anonymous mode should now indicate "Enabled".
      </DisplayModeText>
      <img src={authentication4} width="700" alt="ad" />
      <SpacerDiv />
      <SpacerDiv />
      <SpacerDiv />
      <Title2>Step 3 of 4 - Initialize the Database</Title2>
      <DisplayModeText>
        <b>3a.</b>
        <br /> In the navigation panel on the left side, click on "Realtime
        Datebase".
      </DisplayModeText>
      <img src={realtimeDatabase} alt="database" />
      <DisplayModeText>
        <b>3b.</b>
        <br />
        Click on "Create Database".
      </DisplayModeText>
      <img src={createDatabase} alt="s" />
      <DisplayModeText>
        <b>3c.</b>
        <br /> Select location and then click "Next".
      </DisplayModeText>
      <img src={databaseLocation} width="90%" alt="s" />
      <DisplayModeText>
        <b>3d.</b>
        <br /> Select "Start in locked mode", then click "Enable".
      </DisplayModeText>
      <img src={defaultRules} width="90%" alt="s" />
      <DisplayModeText>
        <b>3e.</b>
        <br /> You should now be able to see your database (written in yellow in
        the image below).
      </DisplayModeText>
      <img src={initialDatabase} width="90%" alt="s" />
      <Title2>Step 4 of 4 - Set the Database Access Rules</Title2>
      <DisplayModeText>
        <b>4a.</b>
        <br />
        Click on "Rules".
      </DisplayModeText>
      <img src={clickRules} width="90%" alt="s" />
      <DisplayModeText>
        <b>4b.</b>
        <br /> Click on "Edit Rules"
      </DisplayModeText>
      <img src={editRules} alt="s" />
      <DisplayModeText>
        <b>4c.</b>
        <br /> Click the gray button below to copy the new rules to your
        clipboard.
      </DisplayModeText>
      <FirebaseRulesLink>
        <pre>{text}</pre>
      </FirebaseRulesLink>
      <LinkCopyButton onClick={copyText}>
        Copy Rules to Clipboard
      </LinkCopyButton>
      <DisplayModeText>
        <b>4d.</b>
        <br /> Go back to Firebase. Select all of the old rules and delete them.
        Paste the new rules into the text area.
      </DisplayModeText>
      <img src={newRules} width="90%" alt="s" />
      <DisplayModeText>
        <b>4e.</b>
        <br /> Click "Publish" to activate the new rules.
      </DisplayModeText>
      <img src={publishRules} width="90%" alt="s" />
      <DisplayModeText>
        <b>4f.</b>
        <br /> Firebase setup is now complete. Use the local server to test the
        submission of your project's data. Remember to delete the test data
        before you begin the survey (See the information below on how to delete
        test data from the database).
      </DisplayModeText>
      <SpacerDiv />
      <SpacerDiv />
      <SpacerDiv />
      <Title2>Exporting Data for Analysis</Title2>
      <DisplayModeText>
        <b></b>
        <br /> After you have finished your Q study, you need to access the
        data. In your project's navigation panel, click on "Realtime Database".
        Then click on the three dots on the top right.
      </DisplayModeText>
      <img src={databaseData} width="90%" alt="s" />
      <DisplayModeText>
        <b></b>
        <br /> The data is in JSON (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/JSON"
        >
          JavaScript Object Notation
        </a>
        ) format. Click on "Export JSON". You can use{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shawnbanasick/kade"
        >
          KADE
        </a>{" "}
        or another program to analyze the data.
      </DisplayModeText>
      <img src={exportJson} width="90%" alt="s" />
      <SpacerDiv />
      <SpacerDiv />
      <Title2>Deleting Data for Individual Participants</Title2>
      <DisplayModeText>
        <b></b>
        <br /> To delete an individual participant's data, open the "Realtime
        database" and then click the "X" to the right side of the participant's
        data that you want to delete.
      </DisplayModeText>
      <img src={firebaseDeleteParticipant} alt="s" />
      <DisplayModeText>
        <b></b>
        <br /> Click the red "Delete" button.
      </DisplayModeText>
      <img src={firebaseDeleteConfirm} alt="s" />
    </MainContent>
  );
};

export default view(FirebaseInfo);

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

const FirebaseRulesLink = styled.div`
  background-color: white;
  width: 500px;
  height: 380px;
  margin-top: 80px;
  margin-bottom: 0px;
  border: 3px solid black;
`;

const LinkCopyButton = styled(GeneralButton)`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #eb8100;

  font-weight: bold;
  font-size: 20px;
`;

const StyledToastContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast--success {
    padding-left: 40px;
    background-color: var(--main-theme-color);
    width: 200px;
  }
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

const Title2 = styled.h1`
  margin-left: 10px;
  font-size: 35px;
  width: 70vw;
`;

const SpacerDiv = styled.div`
  height: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SaveFileButton = styled(GeneralButton)`
  background-color: #eb8100;
  width: 280px;
`;
