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
  const handleOnClick = async () => {
    const surveyQuestArray = [];
    appState.surveyQuestArray = [];
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

        const parser = new XMLParser();
        const xml = parser.parseFromString(data, "text/xml");

        const xmlObjectArray = xml.getElementsByTagName("item");

        const inputObj = {};
        xmlObjectArray.forEach((item, index) => {
          // standard items
          if (xmlObjectArray[index].attributes.id === "textAlign") {
            appState.triggerIncompatibleFileModal = true;
            return;
          }
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
              questObj.limited = inputObj[0].attributes?.limited;
              questObj.maxlength = inputObj[0].attributes?.maxlength;
              questObj.restricted = inputObj[0].attributes?.restricted;
              questObj.note = inputObj[2]?.value;
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
              questObj.scale = inputObj[0].attributes?.scale;
            }
            surveyQuestArray.push(questObj);
          }
        });

        inputObj.surveyQuestArray = surveyQuestArray;

        // START MODIFY SETTINGS

        // set  1. study title
        let title = inputObj.studyTitle;
        localStorage.setItem("configTitle", title);
        appState["configTitle"] = title;

        // set 2. setup target
        localStorage.setItem("configSetupTarget", inputObj.setupTarget);
        appState["configSetupTarget"] = inputObj.setupTarget;
        if (inputObj.setupTarget === "local") {
          appState.configSetupTargetlocalActive = true;
          appState.configSetupTargetfirebaseActive = false;
        }
        if (inputObj.setupTarget === "firebase") {
          appState.configSetupTargetfirebaseActive = true;
          appState.configSetupTargetlocalActive = false;
        }

        // set  3. shuffle
        localStorage.setItem("configShuffleCards", inputObj.shuffleCards);
        appState["configShuffleCards"] = inputObj.shuffleCards;
        appState.configShuffleCardstrueActive = false;
        appState.configShuffleCardsfalseActive = false;
        if (inputObj.shuffleCards === "true") {
          appState.configShuffleCardstrueActive = true;
        }
        if (inputObj.shuffleCards === "false") {
          appState.configShuffleCardsfalseActive = true;
        }

        // set  4. title bar color
        localStorage.setItem("configHeaderBarColor", inputObj.headerBarColor);
        appState["configHeaderBarColor"] = inputObj.headerBarColor;

        // set  5a. project access
        //  ["anonymous", "name only", "name + access code", "access code only"]
        appState["configAccessanonymousActive"] = false;
        appState["configAccessname onlyActive"] = false;
        appState["configAccessname + access codeActive"] = false;
        appState["configAccessaccess code onlActive"] = false;
        if (inputObj.initialScreen === "anonymous") {
          appState["configAccessanonymousActive"] = true;
          localStorage.setItem("configAccess", "anonymous");
          appState["configAccess"] = "anonymous";
        }
        if (inputObj.initialScreen === "partId") {
          appState["configAccessname onlyActive"] = true;
          localStorage.setItem("configAccess", "name only");
          appState["configAccess"] = "name only";
        }
        if (inputObj.initialScreen === "partId-access") {
          appState["configAccessname + access codeActive"] = true;
          localStorage.setItem("configAccess", "name + access code");
          appState["configAccess"] = "name + access code";
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

        let newArray = [];
        localStorage.setItem("surveyQuestionsArray", JSON.stringify(newArray));
        appState.surveyQuestionsArray = [...newArray];

        // iterate through question array
        array.forEach((item, index) => {
          const newItemObj = {};

          displayBoolean = displayBoolean2[item.type];

          newItemObj.surveyQuestionType = item.type;
          const newItemArray = [`<b>item type:</b> ${item.type}`];

          if (displayBoolean?.required === true) {
            newItemObj.required = item.required;
            newItemArray.push(
              `<b>answer required (true/false):</b> ${item.required}`
            );
          }

          if (displayBoolean?.label === true) {
            newItemObj.label = item.label;
            newItemArray.push(`<b>label text:</b> ${decodeHTML(item.label)}`);
          }

          if (displayBoolean?.note === true) {
            newItemObj.note = item.note;
            newItemArray.push(`<b>note:</b> ${decodeHTML(item.note)}`);
          }
          if (displayBoolean?.limited === true) {
            newItemObj.maxlength = item.maxlength;
            newItemObj.limited = item.limited;
            newItemArray.push(`<b>length limit</b>:</b> ${item.limited}`);
            if (item?.limited === true || item?.limited === "true") {
              newItemArray.push(`<b>max length:</b> ${item.maxlength}`);
            }
          }
          if (displayBoolean?.placeholder === true) {
            newItemObj.placeholder = item.placeholder;
            newItemArray.push(`<b>placeholder:</b> ${item.placeholder}`);
          }
          if (displayBoolean?.restricted === true) {
            newItemObj.restricted = item.restricted;
            newItemArray.push(
              `<b>answer restricted to numbers "0-9" (true/false):</b> ${item.restricted}`
            );
          }

          if (displayBoolean?.scale === true) {
            newItemObj.scale = item.scale;
            newItemArray.push(`<b>scale:</b> ${decodeHTML(item.scale)}`);
          }

          if (displayBoolean?.options === true) {
            newItemObj.options = item.options;
            newItemArray.push(`<b>options:</b> ${decodeHTML(item.options)}`);
          }

          if (displayBoolean?.bg === true) {
            newItemObj.bg = item.bg;
            newItemArray.push(`<b>background:</b> ${item.bg}`);
          }

          const val = Math.floor(1000 + Math.random() * 9000);
          newItemObj.id = `item-${val}`;
          newItemObj.content = newItemArray;

          // get survey questions from STATE
          let surveyQuestionsArray = clone(appState.surveyQuestionsArray);

          // ADD new question to ARRAY and save to STATE

          surveyQuestionsArray.push(newItemObj);
          appState.surveyQuestionsArray = surveyQuestionsArray;

          const newArray = [...surveyQuestionsArray];

          localStorage.setItem(
            "surveyQuestionsArray",
            JSON.stringify(newArray)
          );
        }); // end for each
      });
    } catch (error) {
      console.log("Error - Couldn't upload language.XML file");
    }
  };

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
