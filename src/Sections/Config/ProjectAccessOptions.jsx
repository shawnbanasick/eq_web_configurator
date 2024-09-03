import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UserTextInput from "../../Utils/UserTextInput";
import RadioButtons from "../../Utils/RadioButtons";
import FadeIn from "./FadeIn";

const ProjectAccessOptions = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  let configAccess = appState.configAccess;
  let showAccessCodeInput;
  if (configAccess === "name only" || configAccess === "anonymous") {
    showAccessCodeInput = false;
  } else {
    showAccessCodeInput = true;
  }

  return (
    <React.Fragment>
      <SubTitle>Project Access</SubTitle>
      {displayMode && (
        <DisplayModeText>
          There are <b>four options</b> available for the participants to access
          the project:
          <br />
          <br />* Anonymous (no sign-in screen shown)
          <br />* Project Access Code only
          <br />* Participant name only
          <br />* Participant name and project access code
          <br />
          <br />
          The project access code will be the same for all participants. The
          access code can be a phrase or a single word, and is case-sensitive.
          <br />
          <br />
          In addition, you can also combine any of the four options with a
          participant-specific <b>"usercode"</b> embedded in the URL link. So,
          for example, if your project URL is https://eq-web-demo.netlify.app/
          you can add <br />
          <br />
          ?usercode=
          <br />
          <br />
          to the URL with a unique designation (a single word or phrase - no
          spaces allowed) at the end, so that it looks something like this:
          <br />
          <br />
          https://eq-web-demo.netlify.app/?usercode=participant17
          <br />
          <br />
          When the participant clicks on the link, they are taken to the project
          web page and the participant's usercode is automatically added to the
          database.
        </DisplayModeText>
      )}

      <RadioButtons
        label="2-7. Project Access:"
        buttonIdArray={[
          "anonymous",
          "name only",
          "name + access code",
          "access code only",
        ]}
        stateId="configAccess"
        sectionName="config"
      />

      {showAccessCodeInput && (
        <FadeIn delay={150} duration={1050}>
          <UserTextInput
            label="2-7b. Project Access Code:"
            stateId="configLogInPassword"
            sectionName="config"
            width={30}
            left={0}
          />
        </FadeIn>
      )}
      <SubTitle>Informed Consent</SubTitle>
      {displayMode && (
        <DisplayModeText>
          If you need a separate research consent page to appear as the first
          page of your project, set 2.8 to true.
          <br />
          <br />
          <a
            href="https://consent-page-demo.netlify.app/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sample project with consent page
          </a>
        </DisplayModeText>
      )}

      <RadioButtons
        label="2-8. Add Consent Page to Project:"
        buttonIdArray={["true", "false"]}
        stateId="configShowConsentPage"
        sectionName="config"
      />
      <RadioButtons
        label="2-9. Include Consent Page information modal:"
        buttonIdArray={["true", "false"]}
        stateId="configShowConsentPageHelpModal"
        sectionName="config"
      />
    </React.Fragment>
  );
};

export default view(ProjectAccessOptions);

const SubTitle = styled.h1`
  font-size: 30px;
  width: 70vw;
  margin-left: 10px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`;
