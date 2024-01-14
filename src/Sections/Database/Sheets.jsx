import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import stein_1 from "../../assets/images/stein-1.png";
import stein_2 from "../../assets/images/stein-2.png";
import stein_3 from "../../assets/images/stein-3.png";
import stein_4 from "../../assets/images/stein-4.png";
import stein_5 from "../../assets/images/stein-5.png";
import stein_6 from "../../assets/images/stein-6.png";
import stein_8 from "../../assets/images/stein-8.png";
import stein_9 from "../../assets/images/stein-9.png";
import stein_10 from "../../assets/images/stein-10.png";
import stein_11 from "../../assets/images/stein-11.png";
import stein_14 from "../../assets/images/stein-14.png";
import stein_15 from "../../assets/images/stein-15.png";
import stein_16 from "../../assets/images/stein-16.png";
import stein_17 from "../../assets/images/stein-17.png";

const SheetsInfo = () => {
  return (
    <MainContent>
      <GlobalStyle />

      <SpacerDiv />
      <SpacerDiv />

      <Title>SHEETS SETUP</Title>

      <DisplayModeText>
        <b>1.</b>
        <br /> Go to the
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://steinhq.com/"
        >
          Stein
        </a>{" "}
        website and then click on the "Sign up free" button.
      </DisplayModeText>
      <img src={stein_1} width="700px" alt="stein-1" />
      <DisplayModeText>
        <b>2.</b>
        <br /> Sign in with your Google Account.
      </DisplayModeText>
      <img src={stein_2} width="700px" alt="add a project to firebase" />
      <DisplayModeText>
        <b>3.</b>
        <br /> Allow Stein to access your Google Sheets.
      </DisplayModeText>
      <img src={stein_3} alt="s" />
      <DisplayModeText>
        <b>4.</b>
        <br /> Fill out the survey form.
      </DisplayModeText>
      <img src={stein_4} width="700px" alt="s" />
      <DisplayModeText>
        <b>5.</b>
        <br /> Stein is now ready to input the Google Sheet URL.
      </DisplayModeText>
      <img src={stein_5} width="700px" alt="s" />

      <DisplayModeText>
        <b>6.</b>
        <br />
        Go to your Google account and create a new sheet.{" "}
        <b>Do not change the name of the worksheet.</b> Click on the "Sheet1"
        tab to begin formatting. <br />
        <br />
        <b>**IMPORTANT**</b> If you are working with a non-English language
        version of Google Sheets, you{" "}
        <b>
          <u>must change the name of the first sheet to "Sheet1" in English</u>
        </b>
        .
      </DisplayModeText>
      <img src={stein_6} width="700px" alt="database" />
      <DisplayModeText>
        <b>7.</b>
        <br />A new Google Sheet has only 26 columns so you need to add more
        columns. First select all of the current columns by clicking on the top
        left header cell..
      </DisplayModeText>
      <img src={stein_8} width="700px" alt="s" />
      <DisplayModeText>
        <b>8.</b>
        <br /> Next, put the cursor over the selected columns and right click.
        In the context menu, click on “Insert 26 columns left”. The sheet will
        now have 52 columns. If you have a large project with many survey
        questions, repeat this process to add more columns.
      </DisplayModeText>
      <img src={stein_9} width="700px" alt="s" />
      <DisplayModeText>
        <b>9.</b>
        <br />
        Once the columns are setup, you need to add a numbered header row.
        Starting in the first three cells, type “1”, “2”, and “3”. Then, select
        those three cells. Click on the small blue square and drag to the right.
        This will auto input numbers into the cells.
      </DisplayModeText>
      <img src={stein_10} width="700px" alt="s" />
      <DisplayModeText>
        <b>10.</b>
        <br /> Continue to drag to the right until you have more numbers than
        you need. Each project will be different, depending on the number and
        type of questions in the survey after the Q sort.{" "}
        <u>You need more numbered columns than response items.</u>
        <br />
        <br />
        If your EQ web sort project has more participant response items than the
        numbered columns in this Google Sheet, those excess data will be dropped
        and not recorded in the Sheet.
        <br />
        <br />
        Therefore, it is important to test your setup before you start your
        research to <b>confirm</b> that you have{" "}
        <b>more numbered columns than response items</b>.
      </DisplayModeText>
      <img src={stein_11} width="700px" alt="s" />
      <SpacerDiv />
      <SpacerDiv />
      <SpacerDiv />
      <DisplayModeText>
        <b>11.</b>
        <br />
        The Google Sheet setup is now complete. Next, copy the sheet URL.
      </DisplayModeText>
      <img src={stein_14} width="700px" alt="s" />
      <DisplayModeText>
        <b>12.</b>
        <br /> Go back to Stein, paste the sheet URL into the form and click the
        “Create API” button.
      </DisplayModeText>
      <img src={stein_15} width="700px" alt="s" />
      <DisplayModeText>
        <b>13.</b>
        <br /> Stein will go to the Dashboard screen. Click the “Copy API URL”
        link for your sheet.
      </DisplayModeText>
      <img src={stein_16} width="700px" alt="s" />
      <DisplayModeText>
        <b>14.</b>
        <br /> Finally, paste the link into the config.xml setup box in Section
        2 of this Configurator. Complete any other settings you need, and then
        save the config.xml file to your project’s settings folder. Your Google
        Sheet is now ready to receive data from your EQ Web Sort project.
      </DisplayModeText>
      <img src={stein_17} width="700px" alt="s" />
      <SpacerDiv />
      <SpacerDiv />
    </MainContent>
  );
};

export default view(SheetsInfo);

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
