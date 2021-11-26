import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import XMLParser from "react-xml-parser";
import getNameTranslationObject from "./getNameTranslationObject";
import decodeHTML from "../../Utils/decodeHtml";
import XmlUploadErrorModal from "./XmlUploadErrorModal";

const { dialog } = require("electron").remote;
const fs = require("fs");
const { remote } = require("electron");
const mainWindow = remote.getCurrentWindow();

const UploadXmlFileButton = () => {
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

        console.log(xmlObjectArray[0].attributes.id);
        console.log(xmlObjectArray[0].value);

        const translateObject = getNameTranslationObject();

        xmlObjectArray.forEach((item, index) => {
          let key1 = xmlObjectArray[index].attributes.id;

          let key = translateObject[key1];
          let value = decodeHTML(xmlObjectArray[index].value);

          localStorage.setItem(key, value);
          appState[key] = value;
        });
      });
    } catch (error) {
      appState["triggerXmlUploadErrorModal"] = true;
      console.log("Error - Couldn't upload language.XML file");
    }
  };

  return (
    <>
      <XmlUploadErrorModal />
      <UploadButton onClick={handleOnClick}>
        Load "language.xml" File Data
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
