import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import UserDropdown from "./UserDropdown";
import appState from "../../GlobalState/appState";
import RadioButtons from "../../Utils/RadioButtons";
import UserTextInput from "../../Utils/UserTextInput";
import TextImage from "./textQuestion";
import TextAreaImage from "./textAreaQuestion";
import RadioImage from "./radioQuestion";
import Scale2Image from "./scale2Question";
import Scale5Image from "./scale5Question";
import Scale10Image from "./scale10Question";
import CheckboxImage from "./checkboxQuestion";
import SelectImage from "./selectQuestion";
import LikertImage from "./likertQuestion";
import InformationImage from "./informationQuestion";
import shouldDisplayObject from "./shouldDisplayObject";
import GeneralButton from "../../Utils/GeneralButton";
import SurveyItemDndList from "./SurveyItemDndList";
import FadeIn from "./FadeIn";
import { toast } from "react-toastify";
import { ToastContainer, Slide } from "react-toastify";
import clearAddItemForm from "./clearAddItemForm";
import ConfigColorPicker from "../Config/ConfigColorPicker";
import decodeHTML from "../../Utils/decodeHtml";
import OptionsWarningModal from "../Language/OptionsWarningModal";
import HtmlParser from "react-html-parser";

const clone = require("rfdc/default");

const defaultArray = [
  "Answer required (not shown in image): true",
  "Label text: 'Age'",
  "Question note: 'Please enter your year of birth (YYYY, eg. 1980).'",
  "Maxlength (not shown in image): 4",
  `Restricted: "0-9"`,
];

const notifySuccess = () => {
  toast.success("Item Added", {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const notifyError = () => {
  toast.error("Error - Item Not Added", {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const getOptionsArray = (options) => {
  console.log(options);
  let array = options.split(";;;");
  array = array.filter(function (e) {
    return e;
  });
  array = array.map((x) => x.replace(/\s/g, ""));
  return array;
};

const Survey = () => {
  // let showSurvey = appState.config8ShowStep5;
  let detailsArray = appState.detailsArray || defaultArray;

  let showSurveytextImage = appState.showSurveytextImage;
  let showSurveytextareaImage = appState.showSurveytextareaImage;
  let showSurveyradioImage = appState.showSurveyradioImage;
  let showSurveyselectImage = appState.showSurveyselectImage;
  let showSurveycheckboxImage = appState.showSurveycheckboxImage;
  let showSurveyrating2Image = appState.showSurveyrating2Image;
  let showSurveyrating5Image = appState.showSurveyrating5Image;
  let showSurveyrating10Image = appState.showSurveyrating10Image;
  let showSurveyinformationImage = appState.showSurveyinformationImage;
  let showSurveylikertImage = appState.showSurveylikertImage;

  const surveyQuestionType = appState.surveyQuestionType;
  const displayBoolean2 = shouldDisplayObject();
  const displayBoolean = displayBoolean2[surveyQuestionType];
  let displayOptionsSemiWarn = false;

  if (
    showSurveyrating5Image === true ||
    showSurveyrating10Image === true ||
    showSurveyrating2Image === true ||
    showSurveyradioImage === true ||
    showSurveyselectImage === true ||
    showSurveycheckboxImage === true ||
    showSurveylikertImage === true
  ) {
    displayOptionsSemiWarn = true;
  }

  const addItem = () => {
    console.log(JSON.stringify(displayBoolean));

    try {
      displayOptionsSemiWarn = false;
      const newItemObj = {};
      newItemObj.surveyQuestionType = surveyQuestionType;
      const newItemArray = [`<b>item type:</b> ${surveyQuestionType}`];

      if (displayBoolean.required === true) {
        newItemObj.required = appState.surveyAnswerRequired;
        newItemArray.push(
          `<b>answer required (true/false):</b> ${appState.surveyAnswerRequired}`
        );
      }
      if (displayBoolean.label === true) {
        newItemObj.label = appState.surveyQuestionLabel;
        newItemArray.push(
          `<b>label text:</b> ${decodeHTML(appState.surveyQuestionLabel)}`
        );
      }
      if (displayBoolean.note === true) {
        newItemObj.note = appState.surveyQuestionNote;
        newItemArray.push(
          `<b>note:</b> ${decodeHTML(appState.surveyQuestionNote)}`
        );
      }
      if (displayBoolean.limited === true) {
        newItemObj.limited = appState.surveyAnswerLenIsLimited;
        newItemObj.length = appState.surveyAnswerLenMax;
        if (
          appState.surveyAnswerLenIsLimited === "false" ||
          appState.surveyAnswerLenIsLimited === false
        ) {
          newItemArray.push(`<b>length limit:</b> false`);
        } else {
          newItemArray.push(
            `<b>length limit:</b> ${appState.surveyAnswerLenIsLimited}`,
            `<b>max length:</b> ${appState.surveyAnswerLenMax}`
          );
        }
      }
      if (displayBoolean.placeholder === true) {
        newItemObj.placeholder = appState.surveyPlaceholder;
        newItemArray.push(`<b>placeholder:</b> ${appState.surveyPlaceholder}`);
      }
      if (displayBoolean.restricted === true) {
        newItemObj.restricted = appState.surveyAnswerRestricted;
        newItemArray.push(
          `<b>answer restricted to numbers "0-9" (true/false):</b> ${appState.surveyAnswerRestricted}`
        );
      }
      if (displayBoolean.scale === true) {
        newItemObj.scale = appState.surveyQuestionScale;
        let currentScale = decodeHTML(appState.surveyQuestionScale);

        let testArray = getOptionsArray(currentScale);
        console.log(testArray);
        if (testArray.length < 2) {
          console.log("there is an issue");
          appState.triggerOptionsWarningModal = true;
          return null;
        }

        newItemArray.push(`scale: ${decodeHTML(appState.surveyQuestionScale)}`);
      }
      if (displayBoolean.options === true) {
        let currentOptions = decodeHTML(appState.surveyQuestionOptions);
        console.log(currentOptions);

        let testArray = getOptionsArray(currentOptions);
        console.log(testArray);
        if (testArray.length < 2) {
          if (surveyQuestionType !== "information") {
            console.log("there is an issue");
            appState.triggerOptionsWarningModal = true;
            return null;
          }
        }

        displayOptionsSemiWarn = true;
        console.log(appState.surveyQuestionOptions);
        newItemObj.options = appState.surveyQuestionOptions;
        newItemArray.push(
          `options: ${decodeHTML(appState.surveyQuestionOptions)}`
        );
      }
      if (displayBoolean.bg === true) {
        newItemObj.bg = appState.configSurveyInfoBarColor;
        newItemArray.push(`background: ${appState.configSurveyInfoBarColor}`);
      }
      const val = Math.floor(1000 + Math.random() * 9000);
      newItemObj.id = `item-${val}`;
      newItemObj.content = newItemArray;

      // get survey questions from STATE
      let surveyQuestionsArray = clone(appState.surveyQuestionsArray);

      // ADD new question to ARRAY and save to STATE

      console.log(JSON.stringify(newItemObj));

      surveyQuestionsArray.push(newItemObj);
      appState.surveyQuestionsArray = surveyQuestionsArray;

      const newArray = [...surveyQuestionsArray];

      localStorage.setItem("surveyQuestionsArray", JSON.stringify(newArray));

      notifySuccess();
      clearAddItemForm();
      // console.log(JSON.stringify(appState, null, 2));
    } catch (error) {
      notifyError();
      console.log(error);
    }
  }; // end add item

  return (
    <>
      <GlobalStyle />
      <StyledToastContainer />
      <OptionsWarningModal />
      <Title>Survey Question Creator</Title>
      {/* {showSurvey === "true" && ( */}
      <SurveyContainer>
        <ExampleContainer>
          <h3>Example Item:</h3>
          <ImageContainer>
            {showSurveytextImage && (
              <FadeIn delay={150} duration={450}>
                <TextImage />
              </FadeIn>
            )}
            {showSurveytextareaImage && (
              <FadeIn delay={150} duration={450}>
                <TextAreaImage />
              </FadeIn>
            )}
            {showSurveyradioImage && (
              <FadeIn delay={150} duration={450}>
                <RadioImage />
              </FadeIn>
            )}
            {showSurveyselectImage && (
              <FadeIn delay={150} duration={450}>
                <SelectImage />
              </FadeIn>
            )}
            {showSurveycheckboxImage && (
              <FadeIn delay={150} duration={450}>
                <CheckboxImage />
              </FadeIn>
            )}
            {showSurveyrating2Image && (
              <FadeIn delay={150} duration={450}>
                <Scale2Image />
              </FadeIn>
            )}
            {showSurveyrating5Image && (
              <FadeIn delay={150} duration={450}>
                <Scale5Image />
              </FadeIn>
            )}
            {showSurveyrating10Image && (
              <FadeIn delay={150} duration={450}>
                <Scale10Image />
              </FadeIn>
            )}
            {showSurveyinformationImage && (
              <FadeIn delay={150} duration={450}>
                <InformationImage />
              </FadeIn>
            )}
            {showSurveylikertImage && (
              <FadeIn delay={150} duration={450}>
                <LikertImage />
              </FadeIn>
            )}
          </ImageContainer>
          <SettingsTextContainer>
            <b>Example Settings:</b>
            {detailsArray && (
              <ul>
                {detailsArray.map((item) => (
                  <li key={item}>{HtmlParser(item)}</li>
                ))}
              </ul>
            )}
            {displayOptionsSemiWarn && (
              <SeparatorWarning>
                Separate scale or options with three semicolons
                &nbsp;&nbsp;&nbsp; ;;;
              </SeparatorWarning>
            )}
          </SettingsTextContainer>
        </ExampleContainer>
        <SettingsContainer>
          <h3 style={{ marginBottom: 5, marginTop: 5 }}>New Item Settings:</h3>
          <UserDropdown />
          {displayBoolean.required && (
            <RadioButtons
              label="Answer required:"
              buttonIdArray={["true", "false"]}
              stateId="surveyAnswerRequired"
              sectionName="survey"
            />
          )}
          {displayBoolean.label && (
            <UserTextInput
              label="Label:"
              stateId="surveyQuestionLabel"
              sectionName="survey"
              width={50}
              left={0}
            />
          )}
          {displayBoolean.note && (
            <UserTextInput
              label="Question note:"
              stateId="surveyQuestionNote"
              sectionName="survey"
              width={44}
              left={0}
            />
          )}
          {displayBoolean.options && (
            <UserTextInput
              label="Options:"
              stateId="surveyQuestionOptions"
              sectionName="survey"
              width={48}
              left={0}
            />
          )}
          {displayBoolean.scale && (
            <UserTextInput
              label="Scale:"
              stateId="surveyQuestionScale"
              sectionName="survey"
              width={50}
              left={0}
            />
          )}

          {displayBoolean.placeholder && (
            <UserTextInput
              label="Placeholder:"
              stateId="surveyPlaceholder"
              sectionName="survey"
              width={45.5}
              left={0}
            />
          )}
          {displayBoolean.limited && (
            <RadioButtons
              label="Limit answer length:"
              buttonIdArray={["true", "false"]}
              stateId="surveyAnswerLenIsLimited"
              sectionName="survey"
            />
          )}
          {displayBoolean.limited && (
            <UserTextInput
              label="Answer maximum length:"
              stateId="surveyAnswerLenMax"
              sectionName="survey"
              width={-24}
              left={0}
            />
          )}

          {displayBoolean.restricted && (
            <RadioButtons
              label="Answer restricted to numbers (0-9):"
              buttonIdArray={["true", "false"]}
              stateId="surveyAnswerRestricted"
              sectionName="survey"
            />
          )}
          {displayBoolean.bg && (
            <ColorLabel>
              <div> Information bar background color:</div>
              <ConfigColorPicker
                stateDesig="configSurveyInfoBarColor"
                default="#fde047"
              />
            </ColorLabel>
          )}

          <AddItemButton onClick={addItem}>Add Item</AddItemButton>
        </SettingsContainer>
        <SurveyItemDndList />
      </SurveyContainer>
      {/* )} */}
    </>
  );
};

export default view(Survey);

const Title = styled.h1`
  font-size: 25px;
  width: 70vw;
  margin-left: 10px;
`;

const SurveyContainer = styled.div`
  margin-bottom: 25px;
  padding-left: 10px;
`;

const ExampleContainer = styled.div`
  border: 3px solid black;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background: var(--second-theme-color);
  margin-top: 20px;
  margin-bottom: 0px;
  padding-left: 10px;
  width: 75vw;
  max-width: 1200px;
  height: auto;
  transition: opacity 3s ease-in-out;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  border-top: 0px solid black;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-top: 0px;
  margin-bottom: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 5px;
  width: 75vw;
  max-width: 1200px;
`;

const AddItemButton = styled(GeneralButton)`
  margin-left: 70px; // 68vw;
  margin-top: 50px; // 68vw;
  margin-bottom: 10px; // 68vw;
  width: 150px;
`;

const ImageContainer = styled.div`
  width: clamp(250px, 70vw, 1175px);
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

const ColorLabel = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 70px;
  margin-top: 20px;
  align-items: center;
  gap: 20px;
`;

const SettingsTextContainer = styled.h3`
  margin-top: 30px;
  margin-bottom: 0px;
  margin-left: 30px;

  ul {
    font-family: arial;
    font-weight: normal;
    margin-top: 3px;
    list-style-type: none;
  }
`;

const SeparatorWarning = styled.div`
  background-color: goldenrod;
  font-weight: bold;
  padding: 10px;
  width: 465px;
  margin-bottom: 10px;
  margin-left: 20px;
  border-radius: 5px;
`;
