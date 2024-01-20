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
import netlify1 from "../../assets/images/netlify1.png";
import netlify2 from "../../assets/images/netlify2.png";
import netlify3 from "../../assets/images/netlify3.png";
import netlify4 from "../../assets/images/netlify4.png";
import netlify5 from "../../assets/images/netlify5.png";
import netlify6 from "../../assets/images/netlify6.png";
import netlify7 from "../../assets/images/netlify7.png";
import netlify8 from "../../assets/images/netlify8.png";
import netlify9 from "../../assets/images/netlify9.png";
import netlify10 from "../../assets/images/netlify10.png";
import netlify11 from "../../assets/images/netlify11.png";
import netlify12 from "../../assets/images/netlify12.png";
import netlify13 from "../../assets/images/netlify13.png";
import netlify14 from "../../assets/images/netlify14.png";
import excel1 from "../../assets/images/excel1.png";
import excel2 from "../../assets/images/excel2.png";
import excel3 from "../../assets/images/excel3.png";
import excel4 from "../../assets/images/excel4.png";
import excel5 from "../../assets/images/excel5.png";

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
        The last step is to <b>upload</b> your EQ Web Sort files to a web
        server. I recommend
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netlify.com/"
        >
          Netlify
        </a>
        , which will host your project for free. Also, you can now{" "}
        <b>store the participant data directly on your Netlify web site</b>, so{" "}
        <b>
          <mark>you don't need to add a database to your project.</mark>
        </b>{" "}
        The number of responses that can be stored is limited to 100 per site
        per month, so if you expect to have more than 100 participants, you can
        create another identical web site and split your participants between
        the two sites (or you can use Google Firebase / Google Sheets to store
        your data).
      </DisplayModeText>
      <SpacerDiv50 />

      {displayNetlify && (
        <>
          <Title2>Upload Project to Netlify and set up Data Storage</Title2>
          <DisplayModeText>
            <b>1-A.</b>
            <br />
            You will need a user account, so go to{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.netlify.com/"
            >
              Netlify
            </a>{" "}
            and make one first. Once you are in the main "<b>Team Overview</b>"
            Netlify page, click on "<b>Add a new site</b>".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify1} width="90%" alt="a" />
          <SpacerDiv20 />

          <DisplayModeText>
            <b>1-B.</b>
            <br />
            In the dropdown selection, click on "<b>Deploy manually</b>".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify2} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1-C.</b>
            <br />
            Drag and drop your EQ Web Sort <b>FOLDER</b> and drop it on the
            target.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify3} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1-D.</b>
            <br />
            Click "<b>Upload"</b> to confirm the folder upload.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify4} width="90%" alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1-E.</b>
            <br />
            If you are using Google Firebase or Google Sheets for data storage,
            skip ahead to step 1-I. If you are going to use Netlify to store the
            participant data (recommended), click on "<b>Forms</b>".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify5} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1-F.</b>
            <br />
            Click on "<b>Enable form detection</b>".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify6} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1-G.</b>
            <br />
            Confirm that the the page indicates "Form detection is enabled". To
            get the form submissions working, however, you will need to
            re-deploy the website. Click on "<b>Deploys</b>".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify7} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1-H.</b>
            <br />
            Scroll down and once again drop the EQ Web Sort <b>folder</b> on the
            target.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify8} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1-I.</b>
            <br />
            Now it is time to change the website name. Click on "
            <b>Site configuration</b>".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify9} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>1-J.</b>
            <br />
            Scroll down and click on "<b>Change site name</b>". After changing
            the name, your site is ready for participants to use.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify10} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>How to Retrieve Participant Data - 1</b>
            <br />
            <br />
            If you are using Netlify to store the participant data and you are
            ready to retrieve the data, log into your Netlify account, and click
            on "<b>Forms</b>". Then, click on "<b>contact</b>".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify11} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>How to Retrieve Participant Data - 1</b>
            <br />
            <br />
            Click on "<b>Download as CSV</b>"
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify12} alt="a" />
          <DisplayModeText>
            <b>How to Retrieve Participant Data - 2</b>
            <br />
            <br />
            Open your spreadsheet software (LibreOffice Numbers, MS Excel, etc.)
            and open the CSV file. Delete the information in columns B to E.
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={excel1} alt="a" />
          <DisplayModeText>
            <b>How to Retrieve Participant Data - 3</b>
            <br />
            <br />
            Next, select all of the data in column A
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={excel2} alt="a" />
          <DisplayModeText>
            <b>How to Retrieve Participant Data - 4</b>
            <br />
            <br />
            In your spreadsheet software, find the "<b>Text to Columns</b>"
            function. In Excel, click on "Data", then "Text to Columns"
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={excel3} alt="a" />
          <DisplayModeText>
            <b>How to Retrieve Participant Data - 5</b>
            <br />
            <br />
            Select "<b>Delimited</b>", then click "Next".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={excel4} alt="a" />
          <DisplayModeText>
            <b>How to Retrieve Participant Data - 6</b>
            <br />
            <br />
            Un-check "Tab" and check "<b>Other</b>". Then, input a{" "}
            <b>vertical bar "|"</b> in the text box. Click "<b>Finish</b>" and
            your data variables will now be in individual columns. To analyze
            your data, use{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shawnbanasick/kade"
            >
              <b>KADE</b>
            </a>{" "}
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={excel5} alt="a" />

          <DisplayModeText>
            <b>How to Delete a Netlify Site - 1</b>
            <br />
            To delete a Netlify site, click on "<b>Site configuration</b>".
            Then, scroll to the bottom of the page, and click "
            <b>Delete this site</b>".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify13} alt="a" />
          <SpacerDiv20 />
          <DisplayModeText>
            <b>How to Delete a Netlify Site - 2</b>
            <br />
            Type in the name of the site, and click "<b>Delete</b>".
          </DisplayModeText>
          <SpacerDiv20 />
          <img src={netlify14} alt="a" />
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
            Drag-and-drop or choose your configured EQ Web Sort <b>files</b>.
            You can see the upload progress below the drop zone.
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
  color: var(--font-color);

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

  img {
    /* width: 150px; */
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
    margin-bottom: 20px;
    max-width: 1000px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
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
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`;

const SpacerDiv50 = styled.div`
  height: 10px;
  margin-bottom: 40px;
`;
