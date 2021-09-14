import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import appState from "../../GlobalState/appState";
import githubNewRepo from "../../assets/images/github-new-repo.png";
import githubRepoName from "../../assets/images/github-repo-name.png";
import githubAddReadme from "../../assets/images/github-add-readme.png";
import githubNewRepoView from "../../assets/images/github-new-repo-view.png";
import githubAddFile from "../../assets/images/github-add-file.png";
import githubFileUploading from "../../assets/images/github-file-uploading.png";
import githubCommitUploads from "../../assets/images/github-commit-uploads.png";
import githubSettings from "../../assets/images/github-settings.png";
import githubSetPages from "../../assets/images/github-set-pages.png";
import githubSavePagesSettings from "../../assets/images/github-save-pages-setting.png";
import githubPagesUrl from "../../assets/images/github-pages-url.png";
import github404 from "../../assets/images/github-404.png";
import githubDeleteSection from "../../assets/images/github-delete-section.png";
import githubDeleteSection2 from "../../assets/images/github-delete-section2.png";
import netMain from "../../assets/images/net-main.png";
import netDropFiles from "../../assets/images/net-drop-files.png";
import netSiteSettings from "../../assets/images/net-site-settings.png";
import netChangeName from "../../assets/images/net-change-name.png";
import netInputName from "../../assets/images/net-input-name.png";
import netFinished from "../../assets/images/net-finished.png";
import netDeleteSite from "../../assets/images/net-delete-site.png";
import netDeleteName from "../../assets/images/net-delete-name.png";
import RadioButtons from "../../Utils/RadioButtons";

const Server = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  let displayNetlify = false;
  let displayGithub = false;
  let uploadService = appState.uploadService;
  if (uploadService === "Netlify") {
    displayNetlify = true;
  }
  if (uploadService === "Github") {
    displayGithub = true;
  }

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Upload Your Files to the Web</Title>

      <DisplayModeText>
        The next step is to <strong>upload</strong> your Easy HTMLQ files to a
        web server. I recommend either
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netlify.com/"
        >
          Netlify
        </a>{" "}
        or{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/">
          Github
        </a>
        . Both options are free to use for small, non-commercial projects.
        Netlify is quicker and easier to setup. With Github it is easier to make
        small changes to your project after you have uploaded it. Note that if
        you use Github your user account name becomes part of the url for your
        project.
      </DisplayModeText>
      <RadioButtons
        label="Display instructions for:"
        buttonIdArray={["Netlify", "Github"]}
        stateId="uploadService"
        sectionName="upload"
      />
      <SpacerDiv50 />

      {displayNetlify && (
        <>
          <Title2>Option 1 - Upload to Netlify</Title2>
          <DisplayModeText>
            <b>1a.</b>
            <br />
            You will need a user account, so go to{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.netlify.com/"
            >
              Netlify
            </a>{" "}
            and make one first. Once you are in the main Netlify page, click on
            "Sites"
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netMain} width="90%" alt="a" />
          <SpacerDiv20 />

          <DisplayModeText>
            <b>1b.</b>
            <br />
            Drag the Easy HTMLQ <b>folder</b> to the Netlify page and drop it
            into the box.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netDropFiles} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1c.</b>
            <br />
            Netlify will upload your files to the web and generate a random name
            for your site. To change the name, click on "Site settings".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netSiteSettings} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1d.</b>
            <br />
            Click on "Change site name"
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netChangeName} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1e.</b>
            <br />
            Input your new site name. Then click "Save".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netInputName} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1f.</b>
            <br />
            Your project site is now ready. The link is listed at the top of the
            Settings page.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netFinished} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>How to Delete a Netlify Site - 1</b>
            <br />
            To delete a Netlify site, got to the Netlify Settings page for the
            site. Scroll to the bottom of the page, and click "Delete this
            site".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netDeleteSite} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>How to Delete a Netlify Site - 2</b>
            <br />
            Type in the name of the site, and click "Delete".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netDeleteName} alt="a" />
          <SpacerDiv20 />
        </>
      )}

      {displayGithub && (
        <>
          <Title2>Option 2 - Upload to Github</Title2>
          <DisplayModeText>
            <b>2a.</b>
            <br />
            You will need a Github user account, so to to{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/"
            >
              Github
            </a>{" "}
            and make one first. <b>**Important**</b> - the name of your account
            will be in the url of your project, so choose your account name
            carefully.
            <br />
            <br />
            Navigate to your main Github account page and click "Repositories"
            and "New".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={githubNewRepo} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>2b.</b>
            <br />
            Input a name for your project.
          </DisplayModeText>
          <SpacerDiv50 />
          <img src={githubRepoName} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>2c.</b>
            <br />
            Click "Add a Readme file", and then click the green "Create
            repository" button.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={githubAddReadme} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>2d.</b>
            <br />
            You will now have a new empty repository that looks like this image.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={githubNewRepoView} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>2e.</b>
            <br />
            The next step is to upload your files to the repository. Click on
            "Add file", and "Upload files".
          </DisplayModeText>
          <SpacerDiv20 />
          <SpacerDiv20 />
          <img src={githubAddFile} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>2f.</b>
            <br />
            Drag-and-drop or choose your configured Easy HTMLQ <b>files</b>. You
            can see the upload progress below the drop zone.
          </DisplayModeText>
          <img src={githubFileUploading} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>2g.</b>
            <br />
            Once all the files have uploaded, scroll to the bottom of the page
            and click the "Commit changes" button.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={githubCommitUploads} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>2h.</b>
            <br />
            Back on the main page of your repository, click "Settings".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={githubSettings} width="90%" alt="a" />
          <SpacerDiv20 />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>2i.</b>
            <br />
            Scroll down the page to find the "Github Pages" section. Click
            "None" and "Main".
          </DisplayModeText>
          <img src={githubSetPages} width="90%" alt="a" />
          <SpacerDiv20 />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>2j.</b>
            <br />
            Click "Save".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={githubSavePagesSettings} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>2k.</b>
            <br />
            The page will reload. Scroll down the page to find the "Github
            Pages" section again. The url for your project will be listed there.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={githubPagesUrl} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>2l.</b>
            <br />
            If you click on your project url immediately you will get a 404
            error. This is because it takes some time for the Github servers to
            put your site on the web. Wait about 30 minutes and check again and
            your page should be live on the web.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={github404} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>How to Delete a Github Page</b>
            <br />
            In the main Github page for your site, click on "Settings". Scroll
            to the bottom of the page and click "Delete this repository"
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={githubDeleteSection} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>How to Delete a Github Page - 2</b>
            <br />
            Type the name of the repository, then click "I understand the
            consequences, delete this repository"
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={githubDeleteSection2} alt="a" />
        </>
      )}
      <SpacerDiv50 />
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
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-size: 18px;

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

  img {
    /* width: 150px; */
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
    margin-bottom: 20px;
    max-width: 1000px;
  }
`;

const Title = styled.h1`
  width: 80vw;
  max-width: 700px;
  align-self: center;
`;

const SpacerDiv20 = styled.div`
  margin-bottom: 20px;
`;

const Title2 = styled.h1`
  margin-left: 10px;
  font-size: 35px;
  width: 70vw;
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-top: 40px;
  width: 78vw;
  max-width: 1200px;
  font-size: 20px;
  padding: 0 10px 0 10px;
  border: 2px solid black;
`;

const SpacerDiv50 = styled.div`
  height: 10px;
  margin-bottom: 40px;
`;
