import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import XMLParser from "react-xml-parser";
import shouldDisplayObject from "../Survey/shouldDisplayObject";
import decodeHTML from "../../Utils/decodeHtml";
// import getNameTranslationObject from "./getNameTranslationObject";
// import decodeHTML from "../../Utils/decodeHtml";
// import XmlUploadErrorModal from "./XmlUploadErrorModal";

const clone = require("rfdc/default");

const { dialog } = require("electron").remote;
const fs = require("fs");
const { remote } = require("electron");
const mainWindow = remote.getCurrentWindow();

const UploadXmlFileButton = () => {
  const surveyQuestArray = [];

  const handleOnClick = async () => {
    console.log("clicked");
    try {
      const files = await dialog.showOpenDialog(mainWindow, {
        properties: ["openFile"],
        filters: [
          {
            name: "XML",
            extensions: ["xml", "XML"],
          },
        ],
      });

      const path = files.filePaths[0];

      // dialog cancelled case
      if (path === undefined) {
        return;
      }

      fs.readFile(path, "utf8", (error, data) => {
        if (error != null) {
          alert("file open error.");
          return;
        }
        // console.log(JSON.stringify(data));

        const parser = new XMLParser();
        const xml = parser.parseFromString(data, "text/xml");

        const xmlObjectArray = xml.getElementsByTagName("item");
        console.log(xmlObjectArray[23]);
        console.log(xmlObjectArray[24].attributes?.id);
        console.log(xmlObjectArray[24].children[0].attributes?.type);
        console.log(xmlObjectArray[24].children[0].attributes?.required);
        console.log(xmlObjectArray[24].children[1]?.name);
        console.log(xmlObjectArray[24].children[1]?.value);
        console.log(xmlObjectArray[24].children[2]?.name);
        console.log(xmlObjectArray[24].children[2]?.value);
        console.log(xmlObjectArray[24]?.value);
        // console.log(JSON.stringify(xmlObjectArray, null, 2));

        // const translateObject = getNameTranslationObject();

        const inputObj = {};
        xmlObjectArray.forEach((item, index) => {
          // standard items
          let key = xmlObjectArray[index].attributes.id;
          let value = xmlObjectArray[index].value;
          inputObj[key] = value;

          if (xmlObjectArray[index].attributes.id === "survey") {
            let inputObj = xmlObjectArray[index].children;
            let questObj = {};
            let questType = inputObj[0].attributes?.type;
            questObj.type = questType;
            questObj.required = inputObj[0].attributes?.required;
            if (questType !== "information") {
              questObj.label = inputObj[1]?.value;
            }
            if (questType === "information") {
              questObj.note = inputObj[1]?.value;
              questObj.bg = inputObj[1]?.attributes?.bg;
            }
            if (questType === "text") {
              questObj.maxlength = inputObj[0].attributes?.maxlength;
            }
            if (questType === "textarea") {
              questObj.placeholder = inputObj[2]?.value;
            }
            if (questType === "radio") {
              questObj[inputObj[2].name] = inputObj[2]?.value;
              questObj.options = inputObj[0]?.value;
            }
            if (
              questType === "select" ||
              questType === "checkbox" ||
              questType === "rating2" ||
              questType === "rating5" ||
              questType === "rating10"
            ) {
              // questObj[inputObj[2].name] = inputObj[2]?.value;
              questObj.options = inputObj[0]?.value;
            }
            if (
              questType === "rating2" ||
              questType === "rating5" ||
              questType === "rating10"
            ) {
              // questObj[inputObj[2].name] = inputObj[2]?.value;
              // questObj.options = inputObj[0]?.value;
              questObj.scale = inputObj[0].attributes?.scale;
            }
            surveyQuestArray.push(questObj);
          }

          /*  localStorage.setItem(key, value);
          appState[key] = value;  */
        });

        inputObj.surveyQuestArray = surveyQuestArray;

        // START MODIFY SETTINGS

        // set  1. study title
        let title = inputObj.studyTitle;
        console.log(inputObj);
        localStorage.setItem("configTitle", title);
        appState["configTitle"] = title;

        // set  3. shuffle
        localStorage.setItem("configshuffleCards", inputObj.shuffleCards);
        appState["configshuffleCards"] = inputObj.shuffleCards;
        appState.configshuffleCardstrueActive = false;
        appState.configshuffleCardsfalseActive = false;
        if (inputObj.shuffleCards === "true") {
          appState.configshuffleCardstrueActive = true;
        }
        if (inputObj.shuffleCards === "false") {
          appState.configshuffleCardsfalseActive = true;
        }

        // set  4. title bar color
        localStorage.setItem("configHeaderBarColor", inputObj.headerBarColor);
        appState["configHeaderBarColor"] = inputObj.headerBarColor;

        // set  5a. project access
        //  ["anonymous", "Name only", "Name + access code", "access code only"]
        appState["configAccessanonymousActive"] = false;
        appState["configAccessName onlyActive"] = false;
        appState["configAccessName + access codeActive"] = false;
        appState["configAccessaccess code onlActive"] = false;
        if (inputObj.initialScreen === "anonymous") {
          appState["configAccessanonymousActive"] = true;
          localStorage.setItem("configAccess", "anonymous");
          appState["configAccess"] = "anonymous";
        }
        if (inputObj.initialScreen === "partId") {
          appState["configAccessName onlyActive"] = true;
          localStorage.setItem("configAccess", "Name only");
          appState["configAccess"] = "Name only";
        }
        if (inputObj.initialScreen === "partId-access") {
          appState["configAccessName + access codeActive"] = true;
          localStorage.setItem("configAccess", "Name + access code");
          appState["configAccess"] = "Name + access code";
        }
        if (inputObj.initialScreen === "access") {
          appState["configAccessaccess code onlyActive"] = true;
          localStorage.setItem("configAccess", "access code only");
          appState["configAccess"] = "access code only";
        }

        // set 5b. project access
        localStorage.setItem("configLogInPassword", inputObj.accessCode);
        appState["configLogInPassword"] = inputObj.accessCode;

        // set 6. Logo
        localStorage.setItem("configLogoHtml", inputObj.footerLogoName);
        appState["configLogoHtml"] = inputObj.footerLogoName;

        // set 7a. positive card color
        localStorage.setItem("greenCardColor", inputObj.greenCardColor);
        appState["greenCardColor"] = inputObj.greenCardColor;

        // set 7b. positive card color
        localStorage.setItem("yellowCardColor", inputObj.yellowCardColor);
        appState["yellowCardColor"] = inputObj.yellowCardColor;

        // set 7c. positive card color
        localStorage.setItem("pinkCardColor", inputObj.pinkCardColor);
        appState["pinkCardColor"] = inputObj.pinkCardColor;

        // set 8. Condition of instruction font size
        localStorage.setItem(
          "configCondOfInstFontSize",
          inputObj.condOfInstFontSize
        );
        appState["configCondOfInstFontSize"] = inputObj.condOfInstFontSize;

        // set 9. allow unforced sorts
        localStorage.setItem(
          "configAllowUnforcedSorts",
          inputObj.allowUnforcedSorts
        );
        appState["configAllowUnforcedSorts"] = inputObj.allowUnforcedSorts;
        appState.configAllowUnforcedSortstrueActive = false;
        appState.configAllowUnforcedSortsfalseActive = false;
        if (inputObj.allowUnforcedSorts === "true") {
          appState.configAllowUnforcedSortstrueActive = true;
        }
        if (inputObj.allowUnforcedSorts === "false") {
          appState.configAllowUnforcedSortsfalseActive = true;
        }

        // set 10. display overloaded column warning
        localStorage.setItem(
          "configDisplayOverloadedColWarn",
          inputObj.warnOverloadedColumn
        );
        appState["configDisplayOverloadedColWarn"] =
          inputObj.warnOverloadedColumn;
        appState.configDisplayOverloadedColWarntrueActive = false;
        appState.configDisplayOverloadedColWarnfalseActive = false;
        if (inputObj.warnOverloadedColumn === "true") {
          appState.configDisplayOverloadedColWarntrueActive = true;
        }
        if (inputObj.warnOverloadedColumn === "false") {
          appState.configDisplayOverloadedColWarnfalseActive = true;
        }

        // set 11. include individual card comments screen
        localStorage.setItem("configShowStep3", inputObj.showPostsort);
        appState["configShowStep3"] = inputObj.showPostsort;
        appState.configShowStep3trueActive = false;
        appState.configShowStep3falseActive = false;
        if (inputObj.showPostsort === "true") {
          appState.configShowStep3trueActive = true;
        }
        if (inputObj.showPostsort === "false") {
          appState.configShowStep3falseActive = true;
        }

        // set 12. display second positive column
        localStorage.setItem(
          "configShowSecondPosColumn",
          inputObj.showSecondPosColumn
        );
        appState["configShowSecondPosColumn"] = inputObj.showSecondPosColumn;
        appState.configShowSecondPosColumntrueActive = false;
        appState.configShowSecondPosColumnfalseActive = false;
        if (inputObj.showSecondPosColumn === "true") {
          appState.configShowSecondPosColumntrueActive = true;
        }
        if (inputObj.showSecondPosColumn === "false") {
          appState.configShowSecondPosColumnfalseActive = true;
        }

        // set 13. display second negative column
        localStorage.setItem(
          "configShowSecondNegColumn",
          inputObj.showPostsort
        );
        appState["configShowSecondNegColumn"] = inputObj.showSecondNegColumn;
        appState.configShowSecondNegColumntrueActive = false;
        appState.configShowSecondNegColumnfalseActive = false;
        if (inputObj.showSecondNegColumn === "true") {
          appState.configShowSecondNegColumntrueActive = true;
        }
        if (inputObj.showSecondNegColumn === "false") {
          appState.configShowSecondNegColumnfalseActive = true;
        }

        // set 14. show step 4
        localStorage.setItem("configShowStep4", inputObj.showPostsort);
        appState["configShowStep4"] = inputObj.showSurvey;
        appState.configShowStep4trueActive = false;
        appState.configShowStep4falseActive = false;
        if (inputObj.showSurvey === "true") {
          appState.configShowStep4trueActive = true;
        }
        if (inputObj.showSurvey === "false") {
          appState.configShowStep4falseActive = true;
        }

        // ADD SURVEY QUESTIONS
        const displayBoolean2 = shouldDisplayObject();
        let displayBoolean;

        const array = inputObj.surveyQuestArray;

        array.forEach((item, index) => {
          const newItemObj = {};

          displayBoolean = displayBoolean2[item.type];

          newItemObj.surveyQuestionType = item.type;
          const newItemArray = [`item type: ${item.type}`];

          if (displayBoolean.required === true) {
            newItemObj.required = item.required;
            newItemArray.push(`answer required (true/false): ${item.required}`);
          }

          if (displayBoolean.label === true) {
            newItemObj.label = item.label;
            newItemArray.push(`label text: ${decodeHTML(item.label)}`);
          }

          if (displayBoolean.note === true) {
            newItemObj.note = item.note;
            newItemArray.push(`question note: ${decodeHTML(item.note)}`);
          }
          if (displayBoolean.maxlength === true) {
            newItemObj.maxlength = item.maxlength;
            newItemArray.push(`max length: ${item.maxlength}`);
          }
          if (displayBoolean.placeholder === true) {
            newItemObj.placeholder = item.placeholder;
            newItemArray.push(`placeholder: ${item.placeholder}`);
          }
          if (displayBoolean.restricted === true) {
            newItemObj.restricted = item.restricted;
            newItemArray.push(
              `answer restricted to numbers "0-9" (true/false): ${item.restricted}`
            );
          }

          if (displayBoolean.scale === true) {
            newItemObj.scale = item.scale;
            newItemArray.push(
              `scale: ${decodeHTML(appState.surveyQuestionScale)}`
            );
          }

          if (displayBoolean.options === true) {
            newItemObj.options = item.options;
            newItemArray.push(`options: ${decodeHTML(item.options)}`);
          }

          if (displayBoolean.bg === true) {
            newItemObj.bg = item.bg;
            newItemArray.push(`background: ${item.bg}`);
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

          localStorage.setItem(
            "surveyQuestionsArray",
            JSON.stringify(newArray)
          );
        }); // end for each

        // console.log(JSON.stringify(inputObj, null, 2));
        console.log(JSON.stringify(surveyQuestArray, null, 2));
      });
    } catch (error) {
      // appState["triggerXmlUploadErrorModal"] = true;
      console.log("Error - Couldn't upload language.XML file");
    }
  };

  // <XmlUploadErrorModal />
  return (
    <>
      <UploadButton onClick={handleOnClick}>
        Load "config.xml" File Data
      </UploadButton>
    </>
  );
};

const UploadButton = styled(GeneralButton)`
  width: auto;
  align-self: flex-start;
  margin-top: 10px;
  margin-bottom: 50px;
  background-color: #eb8100;
  border: 2px solid black;
`;

export default view(UploadXmlFileButton);
