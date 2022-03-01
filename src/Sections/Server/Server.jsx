import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import { toast } from "react-toastify";
import { ToastContainer, Slide } from "react-toastify";
import eqDownloadImage from "../../assets/images/eq-web-sort-download-link3.png";
import baseFilesImage from "../../assets/images/base-files3.png";
import serverOkButton from "../../assets/images/server-ok-button.png";
import serverFindIndexHtmlFile from "../../assets/images/server-find-index-html-file.png";
import settingsFiles from "../../assets/images/settings-files.png";

const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;
const { dialog } = require("electron").remote;
const { remote } = require("electron");
const mainWindow = remote.getCurrentWindow();

const copyToClipboard = (value) => {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
};

const notifySuccess = () => {
  toast.success("Address Copied", {
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

const copyText = () => {
  try {
    copyToClipboard("http://localhost:9990");
    notifySuccess();
  } catch (e) {
    notifyError();
  }
};

const handleClick = async () => {
  const data = await dialog
    .showOpenDialog(mainWindow, {
      properties: ["openDirectory"],
    })
    .then((result) => {
      console.log("server cancelled?: ", result.canceled);

      if (result.canceled === false) {
        console.log("server up!");
        console.log(result.filePaths);
        appState.userSelectedFilePath = result.filePaths;
        ipcRenderer.send("get-file-path", result.filePaths);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(data);
};

const Server = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <MainContent>
      <StyledToastContainer />
      <GlobalStyle />
      <Title>Testing Server Startup</Title>
      {displayMode && (
        <>
          <DisplayModeText>
            In this section you will set up the default EQ Web Sort files on
            your machine. Once everything is set up, you will be able to monitor
            the changes as you replace the default files with your project's
            information.
            <br />
            <br />
            The first step is to download the base files for EQ Web Sort and
            save them to an accessible place on your computer (for example, to
            the "Desktop" folder). To download, go to the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shawnbanasick/eq-web-sort"
            >
              EQ Web Sort
            </a>{" "}
            home page and click the download link (Figure 1).
          </DisplayModeText>
          <SpacerDiv />
          <StyledParagraph>Figure 1</StyledParagraph>
          <img src={eqDownloadImage} width="90%" alt="a" />
          <DisplayModeText>
            The files will be in a compressed format (*.zip), so don't forget to{" "}
            <b>
              <i>decompress</i>
            </b>{" "}
            them on your computer.
          </DisplayModeText>
          <SpacerDiv />

          <StyledParagraph>Figure 2</StyledParagraph>
          <img
            src={baseFilesImage}
            width="73%"
            style={{ maxWidth: "770px" }}
            alt="a"
          />

          <DisplayModeText>
            In the uncompressed folder (Figure 2) you will see the{" "}
            <b>index.html</b> file (#1) and a folder called "<b>settings</b>"
            (#2). Inside the settings folder are the four xml configuration
            files that will contain your project's information and the Firebase
            configuration file (Figure 3). In sections 2 - 6 of the Configurator
            you will modify these files. Firebase is the free online database
            that will store the participants' Q sort data.
          </DisplayModeText>
          <SpacerDiv />

          <StyledParagraph>Figure 3</StyledParagraph>
          <img
            src={settingsFiles}
            width="73%"
            style={{ maxWidth: "770px" }}
            alt="a"
          />
          <DisplayModeText>
            To get started with the editing of the settings files, start the
            local web server built into this software so that you can
            immediately see the changes that you make.
            <br />
            <br />
            Click the orange button below and navigate to the folder with the
            index.html file (see Figure 4) to start the server. You don't need
            to select a specific file - you just need to find the folder.
          </DisplayModeText>
          <SpacerDiv />
        </>
      )}

      <FindServerButton onClick={() => handleClick()}>
        Navigate to the EQ Web Sort setup files folder where "index.html" is
        located.
      </FindServerButton>
      {displayMode && (
        <DisplayModeText>
          When you find the folder, the file name will probably be dimmed so it
          will be hard to see (Figure 4).{" "}
          <b>You do not need to select the file. </b>
          Instead, click the "OK" button on the bottom right side of the dialog
          box (Figure 5).
        </DisplayModeText>
      )}
      <SpacerDiv />
      {displayMode && (
        <>
          <StyledParagraph>Figure 4</StyledParagraph>
          <img
            src={serverFindIndexHtmlFile}
            width="73%"
            style={{ maxWidth: "770px" }}
            alt="a"
          />
          <SpacerDiv />
          <StyledParagraph>Figure 5</StyledParagraph>
          <img
            src={serverOkButton}
            width="73%"
            style={{ maxWidth: "770px" }}
            alt="a"
          />
        </>
      )}
      <IntroText>
        After you click "OK" and the dialog box will close and the Configurator
        will send the location of the "index.html" file to the server. <br />
        <br />
        Next, copy the localhost address below and paste it into your web
        browser's address bar.
      </IntroText>
      <ProjectLinkDiv>
        <LinkSpan>http://localhost:9990</LinkSpan>
        <LinkCopyButton onClick={copyText}>Copy to Clipboard</LinkCopyButton>
      </ProjectLinkDiv>
      {displayMode && (
        <DisplayModeText>
          The default EQ Web Sort demo project should now load in your browser.
          The project is not on the internet yet - it is being hosted from your
          computer to your browser. <br />
          <br />
          Now, after you save any of the settings files with your project
          information, you can refresh your web browser and the updates will
          appear.
          <br />
          <br />
          After you set up your Firebase settings file you will be able to save
          completed Q sort data to the Firebase online realtime database using
          this localhost address (if you are connected to the Internet). This
          will allow you to test your complete setup - including data upload.
          Don't forget to delete any testing data from your database before you
          begin your actual project (there are instructions on how to do this in
          section "6. Firebase").
        </DisplayModeText>
      )}
      <SpacerDiv />
    </MainContent>
  );
};

export default view(Server);

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
  color: var(--font-color);

  img {
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
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 70vw;
  align-items: center;
  justify-content: center;
`;

const IntroText = styled.span`
  font-size: clamp(15px, 1.8vw, 30px);
  align-self: center;
  width: 55vw;
  padding: 15px;
  /* border: 2px solid red; */
`;

const FindServerButton = styled(GeneralButton)`
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 22px;
  width: 300px;
  align-self: center;
  background-color: #eb8100;
  border: 1px solid black;
`;

const ProjectLinkDiv = styled.div`
  display: inline-flex;
  /* flex-direction: row; */
  justify-content: center;
  gap: 10px;
`;

const LinkSpan = styled.span`
  font-size: 2vw;
  align-self: center;
  width: auto;
  font-weight: bold;
  padding: 15px;
  /* margin-right: 10px; */
  /* border: 2px solid red; */
`;

const LinkCopyButton = styled(GeneralButton)`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 22px;
  background-color: #eb8100;
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
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`;

const SpacerDiv = styled.div`
  margin-bottom: 50px;
`;

const StyledParagraph = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 30px;
`;
