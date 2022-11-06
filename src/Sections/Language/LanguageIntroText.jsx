import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";

const LocalLanguage = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <>
      <DisplayModeText>
        <b>**Important**</b> The input options will change according to the
        setup target (firebase, gSheets, or local). If you want to set up the
        language.xml file for a local, offline data collection project, be sure
        to choose "local" for Question 2-2 "Setup target" in the Config section{" "}
        <b>before</b> you input the language data here.
        <br />
        <br />
        If you have a language.xml file from another EQ Web Sort project, you
        can load it into the Configurator by clicking the orange "
        <b>Load 'language.xml' File Data</b>" button below. If you don't have a
        file from a previous project, you can load the default English settings
        by clicking the section buttons, or you can create a new file by
        inputting all of the data yourself.
        <br />
        <br />
        <h4>Section Buttons</h4>
        The "Use Defaults" button will insert the default text into all of the
        input boxes in that section. The "Clear Section" button will clear all
        of the input boxes in that section. The "View Reference Image" buttons
        give hints about the location of the text in the application.
        <br />
        <br />
        <h4>Simple HTML Formatting</h4>
        {`Simple text formatting is available here by using tags before and after the text to be modified. Simple formatting options include bold <b> </b>, italics <i> </i>, and underline <u> </u>.`}{" "}
        <br />
        <br />
        {`A new line can be inserted using a single break tag <br/>, and an open line between text can be created by using two break tags <br/> <br/>.`}
        <br />
        <br />
        {`A web page link can be inserted by using this pattern:`}
        <br />
        {`<a href="https://qmethod.org/" target="_blank" rel="noreferrer"> <u>qmethod.org</u> </a>.`}
        <br />
        <br />
        <h4>Complex HTML Layouts</h4>
        Complex HTML layouts are possible for the Welcome message, Submit Data
        text, Goodbye message, and pop-up modal texts. In-line CSS styling can
        be used to modify the HTML elements.
        <br />
        <br />
        {`You can use `}
        <a href="https://codepen.io" rel="noopener noreferrer" target="_blank">
          CodePen
        </a>{" "}
        {`to interactively develop complex layouts. In CodePen, click on the "Start Coding" button on the top left side of the page, then put your code in the "HTML" box on the left. When you are happy with the layout, copy and paste the HTML code from CodePen into the input boxes below.`}
        <br />
        <br />
        {`CodePen Examples: `}
        <ListContainer>
          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/gOxOQrr"
              target="_blank"
              rel="noreferrer"
            >
              Headers and text
            </a>{" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/QWMWJEM"
              target="_blank"
              rel="noreferrer"
            >
              Lists
            </a>{" "}
          </li>
          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/WNENYNp"
              target="_blank"
              rel="noreferrer"
            >
              Font size adjustment
            </a>{" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/vYJYQxN"
              target="_blank"
              rel="noreferrer"
            >
              Side-by-side layouts
            </a>{" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/NWvWGMY"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vertical and horizontal centering
            </a>
            &nbsp;(for Landing section){" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/mdMdQby"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vertical and horizontal centering
            </a>
            &nbsp;(for modals){" "}
          </li>

          <li>
            <a
              href="https://codepen.io/shawnbanasick/pen/WNEqVJM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Combined example - a complex &quot;Welcome Message&quot;
            </a>{" "}
          </li>
        </ListContainer>
        {`See the default text below for more HTML examples.`}
        <br />
        <br />
        <h4>Save Data</h4>
        When you have finished adding your language data, click the orange
        button at the bottom of the page and save your information as
        'language.xml' in the settings folder (replace the default file).
      </DisplayModeText>
    </>
  );
};

export default view(LocalLanguage);

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-bottom: 50px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`;

const ListContainer = styled.ul`
  margin-top: 5px;
`;
