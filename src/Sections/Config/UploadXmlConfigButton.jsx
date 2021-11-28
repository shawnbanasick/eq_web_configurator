import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import XMLParser from "react-xml-parser";
// import getNameTranslationObject from "./getNameTranslationObject";
// import decodeHTML from "../../Utils/decodeHtml";
// import XmlUploadErrorModal from "./XmlUploadErrorModal";

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

        // START MODIFY SETTINGS

        // set study title
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

        console.log(JSON.stringify(inputObj, null, 2));
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
