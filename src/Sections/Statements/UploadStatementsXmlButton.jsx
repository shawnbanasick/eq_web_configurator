import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import XMLParser from "react-xml-parser";
import stripHtmlDivs from "./stripHtmlDivs";
import decodeHTML from "../../Utils/decodeHtml";

const { dialog } = require("electron").remote;
const fs = require("fs");
const { remote } = require("electron");
const mainWindow = remote.getCurrentWindow();

const UploadXmlFileButton = () => {
  const handleOnClick = async () => {
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

        // parse file
        const parser = new XMLParser();
        const xml = parser.parseFromString(data, "text/xml");
        const xmlObjectArray = xml.getElementsByTagName("statement");

        let statementString = "";

        xmlObjectArray.forEach((item) => {
          let strippedItem = stripHtmlDivs(item.value);
          let decodedItem = decodeHTML(strippedItem);
          let itemString = `${decodedItem}\n`;
          statementString += itemString;
        });

        // appState["currentStatements"] = statementString;
        localStorage.setItem("currentStatements", statementString);
        appState["currentStatements"] = localStorage.getItem(
          "currentStatements"
        );
      });
    } catch (error) {
      console.log("Error - Couldn't upload map.XML file");
    }
  };

  return (
    <>
      <UploadButton onClick={handleOnClick}>
        Load "statements.xml" File Data
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
  user-select: none;
`;

export default view(UploadXmlFileButton);
