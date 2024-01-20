import React from "react";
import { view, store } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UserTextInput from "../../Utils/UserTextInput";
import RadioButtons from "../../Utils/RadioButtons";
import ConfigColorPicker from "./ConfigColorPicker";
import IncompatibleFileModal from "./IncompatibleFileModal";
import UserNumberInput from "../../Utils/UserNumberInput";
import FadeIn from "./FadeIn";
import imagesFolder from "../../assets/images/imagesFolder.png";

const GeneralOptions = () => {
  // local state for this component
  const localState = store({
    displayItem: true,
    databaseOptionsArray: ["netlify", "firebase", "sheets", "email", "local"],
    displaySecondQsortUrl: false,
    displayEmail: false,
  });

  let displayMode = appState.displayMode;

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  if (
    appState.configSetupTarget === "email" ||
    appState.configSetupTarget === "local"
  ) {
    appState.configLinkToSecondQsorttrueDisabled = true;
    appState.configLinkToSecondQsortfalseDisabled = true;
  } else {
    appState.configLinkToSecondQsorttrueDisabled = false;
    appState.configLinkToSecondQsortfalseDisabled = false;
  }

  const setDisplay = (value) => {
    if (value === "sheets") {
      localState.displayItem = true;
      localState.displayEmail = false;
      return true;
    } else if (value === "email") {
      localState.displayEmail = true;
      return false;
    } else {
      localState.displayItem = false;
      localState.displayEmail = false;
      return false;
    }
  };

  const getDatabaseOptions = (value) => {
    if (value === "Include_Google_Options") {
      localState.databaseOptionsArray = [
        "netlify",
        "firebase",
        "sheets",
        "email",
        "local",
      ];
      return ["netlify", "firebase", "sheets", "email", "local"];
    } else {
      localState.databaseOptionsArray = ["self_hosted", "local", "email"];
      return ["self_hosted", "local", "email"];
    }
  };

  const setLinkingDisplay = (value) => {
    if (value === "true") {
      localState.displaySecondQsortUrl = true;
      return true;
    } else {
      localState.displaySecondQsortUrl = false;
      return false;
    }
  };

  const setImagesDisplay = (value) => {
    if (value === "true") {
      localState.displayImageOptions = true;
      return true;
    } else {
      localState.displayImageOptions = false;
      return false;
    }
  };

  let showSheetsConfigMessage = setDisplay(appState.configSetupTarget);
  let databaseOptionsArray = getDatabaseOptions(appState.configDatabaseOptions);
  let showSecondQsortUrl = setLinkingDisplay(appState.configLinkToSecondQsort);
  let displayImageOptions = setImagesDisplay(appState.configUseImages);

  return (
    <React.Fragment>
      <SubTitle>General Options</SubTitle>
      <IncompatibleFileModal />
      {displayMode && (
        <DisplayModeText>
          First, you need to decide how to handle the participant data.
          <br />
          <br />
          The current recommendation is to use the "<b>netlify</b>" option. It
          is free and easy to set up. It also allows you to download the data as
          a CSV file. It is limited to 100 submissions per month, but if you
          need more submissions you can use two identical websites and split
          your participants between them, or upgrade to a paid plan.
          <br />
          <br />
          The "<b>sheets</b>" option allows you to use a Google Sheet as a
          database for the application, but requires use of third-party web
          application called "Stein". It is free for projects with less than 200
          participant responses. If you decide to use Stein with Google Sheets,
          I recommend that you make a new Google account because you'll need to
          give Stein read and write access to your Sheets files.
          <br />
          <br />
          To set up sheets, go to section "6. Database" of this configurator to
          setup Stein and Google Sheets first. Then come back to this section
          and finish creating the config.xml file.
          <br />
          <br />"<b>Firebase</b>" is a Google-owned company. Its database is
          more robust than the Google Sheets option, but the setup process is
          more complex. Step-by-step instructions on how to set up Firebase are
          in Section 6.
          <br />
          <br />
          The "<b>email</b>" option is the easiest to set up since it does not
          require a database. When the participants click the "Submit" button,
          it opens their default email application with the destination email
          address, subject line, and their results automatically added to the
          email.
          <br />
          <br />
          The "<b>local</b>" option transforms EQ Web Sort into a tool for
          in-person, offline data collection using a notebook computer. For more
          information see the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/viewer?url=https://github.com/shawnbanasick/eq-web-sort/raw/main/readme_assets/local_guide_A4.pdf"
          >
            <b>User Guide</b>
          </a>
          . <br />
          <br />
          For option 2-4 - title bar color - you can set the color by moving the
          selector in the color picker (click on the blue square below) or by
          using html hex codes (input the code at the bottom of the color picker
          box). To find an appropriate color, there are many websites that can
          help you find the hex codes for custom colors, but I usually use{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.colorhexa.com/"
          >
            ColorHexa
          </a>
          .{" "}
        </DisplayModeText>
      )}
      <UserTextInput
        label="2-1. Project name:"
        stateId="configTitle"
        sectionName="config"
        width={30}
        left={0}
      />

      <RadioButtons
        label="2-2. Setup target:"
        buttonIdArray={databaseOptionsArray}
        stateId="configSetupTarget"
        sectionName="config"
      />

      <br />
      {showSheetsConfigMessage && (
        <FadeIn delay={150} duration={1050}>
          <UserTextInput
            label="2-2b. Stein API URL:"
            stateId="configSteinApiUrl"
            sectionName="config"
            width={30}
            left={0}
          />
        </FadeIn>
      )}

      {localState.displayEmail && (
        <FadeIn delay={150} duration={1050}>
          <UserTextInput
            label="2-2b. Email address:"
            stateId="configEmailAddress"
            sectionName="config"
            width={30}
            left={0}
          />
        </FadeIn>
      )}

      {localState.displayEmail && (
        <FadeIn delay={150} duration={1050}>
          <UserTextInput
            label="2-2b. Email subject:"
            stateId="configEmailSubject"
            sectionName="config"
            width={30}
            left={0}
          />
        </FadeIn>
      )}
      <br />
      <DisplayModeText>
        Q sort linking is now available. When the participant finishes the first
        Q sort project, the web page for the second Q sort project automatically
        opens. Link participant data between the two Q sorts using a URL
        usercode for the first Q sort project. See the "Project Access" section
        below for more information on usercodes. Q sort linking is not available
        for email or local setup targets.
      </DisplayModeText>
      <RadioButtons
        label="2-3. Link to second Q sort:"
        buttonIdArray={["true", "false"]}
        stateId="configLinkToSecondQsort"
        sectionName="config"
      />

      {showSecondQsortUrl && (
        <FadeIn delay={150} duration={1050}>
          <UserTextInput
            label="2-3a. Second Q sort URL:"
            stateId="configLinkToSecondQsortUrl"
            sectionName="config"
            width={30}
            left={0}
          />
        </FadeIn>
      )}

      <RadioButtons
        label="2-4. Sort images / pictures instead of text statements"
        buttonIdArray={["true", "false"]}
        stateId="configUseImages"
        sectionName="config"
      />

      {displayImageOptions && (
        <FadeIn delay={150} duration={1050}>
          <br />
          <DisplayModeText>
            <b>Important - Image / Photo setup information:</b> <br />
            <br />
            The images must be named in the following format: image1, image2,
            image3, etc. Also, all of the images must be the same type (jpg or
            png). <br />
            <br />
            So, the naming should be like this: image1.png, image2.png,
            image3.png..., or image1.jpg, image2.jpg, image3.jpg... The images
            must be put into the "<b>images</b>" folder located inside the "
            <b>settings</b>" folder (where this config.xml file is saved).
            <br />
            <br />
            <center>
              <img src={imagesFolder} width="50%" alt="s" />
            </center>
            <br />
            It is important to reduce the size of the images before adding them
            to the project. You can use an online tool like{" "}
            <a
              href=" https://jpeg-optimizer.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JPEG Optimizer
            </a>{" "}
            to reduce the file size. The images should be no larger than 250kb
            each.
          </DisplayModeText>
          <UserNumberInput
            label="2-4a. Number of images to sort"
            step={1}
            value={0}
            upperLimit={200}
            lowerLimit={0}
            stateId="configNumImages"
            sectionName="config"
          />

          <RadioButtons
            label="2-4b. Image type (all images must be the same type)"
            buttonIdArray={["jpg", "png"]}
            stateId="configImageType"
            sectionName="config"
          />

          <RadioButtons
            label="2-4c. Image format"
            buttonIdArray={["16x9", "4x3"]}
            stateId="configImageFormat"
            sectionName="config"
          />
        </FadeIn>
      )}

      <RadioButtons
        label="2-5. Randomize presentation order of statements / images"
        buttonIdArray={["true", "false"]}
        stateId="configShuffleCards"
        sectionName="config"
      />

      <ColorLabel>
        <div>2-6. Title bar color (for all pages):</div>
        <ConfigColorPicker
          stateDesig="configHeaderBarColor"
          default="#337ab7"
        />
        (Default color is "337ab7")
      </ColorLabel>
    </React.Fragment>
  );
};

export default view(GeneralOptions);

const SubTitle = styled.h1`
  font-size: 30px;
  width: 70vw;
  margin-left: 10px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const ColorLabel = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 70px;
  margin-top: 20px;
  align-items: center;
  gap: 20px;
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
  margin-bottom: 10px;
`;

/*
const AdditionalInfo = styled.div`
  align-self: left;
  margin-left: 10px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
  margin-bottom: 10px;
`;
*/
