import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";
import XMLParser from "react-xml-parser";
import decodeHTML from "../../Utils/decodeHtml";

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
        // const xmlObjectArray2 = xml.getElementsByTagName("column");

        console.log(xmlObjectArray);

        console.log(xmlObjectArray[0].value);
        console.log(xmlObjectArray[1].value);
        console.log(xmlObjectArray[2].value);
        console.log(xmlObjectArray[3].value);
        console.log(xmlObjectArray[4].value);

        let nameArray = xmlObjectArray[1].value.split(",");
        let countArray = xmlObjectArray[2].value.split(",");
        let colorsArray = xmlObjectArray[3].value.split(",");

        console.log(countArray);

        const clearArray = [
          "M6",
          "M5",
          "M4",
          "M3",
          "M2",
          "M1",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
        ];

        clearArray.forEach((item) => {
          // clear counts
          let designation = `activeValue${item}`;
          appState[designation] = 0;
          localStorage.setItem(designation, JSON.stringify(0));
          // clear colors
          let designation2 = item.replace("M", "N");
          let designation3 = `colCol${designation2}`;
          appState[designation3] = "#e0e0e0";
          localStorage.setItem(designation3, "#e0e0e0");
        });

        nameArray.forEach((item, index) => {
          // set counts
          let designation = item.replace("N", "M");
          let stateDesig = `activeValue${designation}`;
          let value = +countArray[index];
          appState[stateDesig] = value;
          localStorage.setItem(stateDesig, JSON.stringify(value));

          // set colors
          let designation3 = `colCol${item}`;
          appState[designation3] = colorsArray[index];
          localStorage.setItem(designation3, colorsArray[index]);
        });

        /*
        console.log(xmlObjectArray[0].attributes.id);
        console.log(xmlObjectArray[0].value);

        
        xmlObjectArray.forEach((item, index) => {
          let key1 = xmlObjectArray[index].attributes.id;

          let key = translateObject[key1];
          let value = decodeHTML(xmlObjectArray[index].value);

          localStorage.setItem(key, value);
          appState[key] = value;
        });
        */
      });
    } catch (error) {
      appState["triggerXmlUploadErrorModal"] = true;
      console.log("Error - Couldn't upload language.XML file");
    }
  };

  return (
    <>
      <UploadButton onClick={handleOnClick}>
        Load "map.xml" File Data
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
