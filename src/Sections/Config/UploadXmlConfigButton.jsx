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
const { remote, app } = require("electron");
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
              let inputLenVal = inputObj[0].attributes?.maxlength;
              if (
                inputLenVal === null ||
                inputLenVal === undefined ||
                isNaN(inputLenVal)
              ) {
                questObj.maxlength = inputObj[0].attributes?.limitLength;
              } else {
                questObj.maxlength = inputObj[0].attributes?.maxlength;
              }
              questObj.restricted = inputObj[0].attributes?.restricted;
              questObj.note = inputObj[2]?.value;
              questObj.placeholder = inputObj[3]?.value;
            }
            if (questType === "textarea") {
              questObj.note = inputObj[2]?.value;
              questObj.placeholder = inputObj[3]?.value;
            }
            if (questType === "radio") {
              questObj[inputObj[2].name] = inputObj[2]?.value;
              questObj.options = inputObj[0]?.value;
            }
            if (questType === "likert") {
              questObj.required = inputObj[0].attributes?.required;
              questObj.scale = inputObj[0].attributes?.scale;
              questObj.label = inputObj[1]?.value;
            }
            if (
              questType === "select" ||
              questType === "checkbox" ||
              questType === "rating2" ||
              questType === "rating5" ||
              questType === "rating10"
            ) {
              questObj.options = inputObj[0]?.value;
              questObj.note = inputObj[2]?.value;
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

        console.log("inputObj", JSON.stringify(inputObj, null, 2));

        // ***
        // *** GENERAL OPTIONS ***
        // ***
        // set  2-1. study title
        if (inputObj.studyTitle === undefined) {
          inputObj.studyTitle = "My_Q_project";
        }
        let title = inputObj.studyTitle;
        localStorage.setItem("configTitle", title);
        appState["configTitle"] = title;

        // set 2-2. Database Options
        if (inputObj.databaseOptions === undefined) {
          inputObj.databaseOptions = "Include_Google_Options";
        }
        localStorage.setItem("configDatabaseOptions", inputObj.databaseOptions);
        appState["configDatabaseOptions"] = inputObj.databaseOptions;

        if (inputObj.databaseOptions === "Include_Google_Options") {
          appState.configDatabaseOptionsInclude_Google_OptionsActive = true;
          appState.configDatabaseOptionsGoogle_FreeActive = false;
        } else {
          appState.configDatabaseOptionsInclude_Google_OptionsActive = false;
          appState.configDatabaseOptionsGoogle_FreeActive = true;
        }

        // set 2-2b Setup Target
        if (inputObj.setupTarget === undefined) {
          inputObj.setupTarget = "netlify";
        }
        localStorage.setItem("configSetupTarget", inputObj.setupTarget);
        appState["configSetupTarget"] = inputObj.setupTarget;
        if (inputObj.setupTarget === "local") {
          appState.configSetupTargetlocalActive = true;
          appState.configSetupTargetfirebaseActive = false;
          appState.configSetupTargetnetlifyActive = false;
          appState.configSetupTargetsheetsActive = false;
          appState.configSetupTargetemailActive = false;
          appState.configSetupTargetself_hostedActive = false;
        }
        if (inputObj.setupTarget === "netlify") {
          appState.configSetupTargetlocalActive = false;
          appState.configSetupTargetfirebaseActive = false;
          appState.configSetupTargetnetlifyActive = true;
          appState.configSetupTargetsheetsActive = false;
          appState.configSetupTargetemailActive = false;
          appState.configSetupTargetself_hostedActive = false;
        }
        if (inputObj.setupTarget === "firebase") {
          appState.configSetupTargetnetlifyActive = false;
          appState.configSetupTargetfirebaseActive = true;
          appState.configSetupTargetlocalActive = false;
          appState.configSetupTargetsheetsActive = false;
          appState.configSetupTargetemailActive = false;
          appState.configSetupTargetself_hostedActive = false;
        }
        if (inputObj.setupTarget === "sheets") {
          appState.configSetupTargetsheetsActive = true;
          appState.configSetupTargetnetlifyActive = false;
          appState.configSetupTargetfirebaseActive = false;
          appState.configSetupTargetlocalActive = false;
          appState.configSetupTargetemailActive = false;
          appState.configSetupTargetself_hostedActive = false;
        }
        if (inputObj.setupTarget === "email") {
          appState.configSetupTargetemailActive = true;
          appState.configSetupTargetsheetsActive = false;
          appState.configSetupTargetnetlifyActive = false;
          appState.configSetupTargetfirebaseActive = false;
          appState.configSetupTargetlocalActive = false;
          appState.configSetupTargetself_hostedActive = false;
        }
        if (inputObj.setupTarget === "self_hosted") {
          appState.configSetupTargetemailActive = false;
          appState.configSetupTargetsheetsActive = false;
          appState.configSetupTargetnetlifyActive = false;
          appState.configSetupTargetfirebaseActive = false;
          appState.configSetupTargetlocalActive = false;
          appState.configSetupTargetself_hostedActive = true;
        }

        // set 2-2b Stein API URL input
        if (inputObj.steinApiUrl === undefined) {
          inputObj.steinApiUrl = "http://";
        }
        let steinApiUrl = inputObj.steinApiUrl;
        localStorage.setItem("configSteinApiUrl", steinApiUrl);
        appState["configSteinApiUrl"] = steinApiUrl;

        // set 2-2b Email address and Email subject
        if (inputObj.emailAddress === undefined) {
          inputObj.emailAddress = "@email";
        }
        if (inputObj.emailSubject === undefined) {
          inputObj.emailSubject = "EQ Web Sort Results";
        }
        localStorage.setItem("configEmailAddress", inputObj.emailAddress);
        appState["configEmailAddress"] = inputObj.emailAddress;
        localStorage.setItem("configEmailSubject", inputObj.emailSubject);
        appState["configEmailSubject"] = inputObj.emailSubject;

        // set 2-2c Link to Second Q sort
        if (inputObj.linkToSecondProject === undefined) {
          inputObj.linkToSecondProject = "false";
        }
        localStorage.setItem(
          "configLinkToSecondQsort",
          inputObj.linkToSecondProject
        );
        appState["configLinkToSecondQsort"] = inputObj.linkToSecondProject;
        appState.configLinkToSecondQsorttrueActive = false;
        appState.configLinkToSecondQsortfalseActive = false;
        if (inputObj.linkToSecondProject === "true") {
          appState.configLinkToSecondQsorttrueActive = true;
        }
        if (inputObj.linkToSecondProject === "false") {
          appState.configLinkToSecondQsortfalseActive = true;
        }

        // set 2-2c Link to Second Q sort URL
        let linkToSecondQsortUrl = inputObj?.linkToSecondQsortUrl;
        if (linkToSecondQsortUrl === undefined) {
          linkToSecondQsortUrl = "http://";
        }
        localStorage.setItem(
          "configLinkToSecondQsortUrl",
          linkToSecondQsortUrl
        );
        appState["configLinkToSecondQsortUrl"] = linkToSecondQsortUrl;

        // *** set 2-4 Use images
        let useImages = inputObj?.useImages;
        if (useImages === undefined) {
          useImages = "false";
          appState.configUseImagesfalseActive = true;
        }
        if (useImages === "true") {
          appState.configUseImagestrueActive = true;
          appState.configUseImagesfalseActive = false;
        } else {
          appState.configUseImagesfalseActive = true;
          appState.configUseImagestrueActive = false;
        }
        localStorage.setItem("configUseImages", useImages);
        appState["configUseImages"] = useImages;

        // set 2-4a Number of images
        if (inputObj.numImages === undefined) {
          inputObj.numImages = 0;
        }
        localStorage.setItem("configNumImages", inputObj.numImages);
        appState["configNumImages"] = inputObj.numImages;

        // set 2-4b Image file types
        if (inputObj.imageFileType === undefined) {
          inputObj.imageFileType = "jpg";
        }
        localStorage.setItem("configImageFileType", inputObj.imageFileType);
        appState["configImageFileType"] = inputObj.imageFileType;
        if (inputObj.imageFileType === "jpg") {
          appState.configImageFileTypejpgActive = true;
          appState.configImageFileTypepngActive = false;
        } else {
          appState.configImageFileTypejpgActive = false;
          appState.configImageFileTypepngActive = true;
        }
        // set 2-4c Image format (set up export to fix wording)
        if (inputObj.imageFormat === undefined) {
          inputObj.imageFormat = "16x9";
        }
        if (inputObj.imageFormat === "postSortImageModal169") {
          inputObj.imageFormat = "16x9";
          localStorage.setItem("configImageFormat", inputObj.imageFormat);
          appState["configImageFormat"] = inputObj.imageFormat;
          appState.configImageFormat16x9Active = true;
          appState.configImageFormat4x3Active = false;
        } else {
          inputObj.imageFormat = "4x3";
          localStorage.setItem("configImageFormat", inputObj.imageFormat);
          appState["configImageFormat"] = inputObj.imageFormat;
          appState.configImageFormat16x9Active = false;
          appState.configImageFormat4x3Active = true;
        }

        // set 2-3 Shuffle cards
        if (inputObj.shuffleCards === undefined) {
          inputObj.shuffleCards = "true";
        }
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

        // set 2-4 Title bar color
        if (inputObj.headerBarColor === undefined) {
          inputObj.headerBarColor = "#337ab7";
        }
        localStorage.setItem("configHeaderBarColor", inputObj.headerBarColor);
        appState["configHeaderBarColor"] = inputObj.headerBarColor;

        // ***
        // *** PROJECT ACCESS ***
        // ***
        // set 2-5a. project access
        //  ["anonymous", "name only", "name + access code", "access code only"]
        if (inputObj.initialScreen === undefined) {
          inputObj.initialScreen = "anonymous";
        }
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

        // set 2-5b. Set project access password
        if (inputObj.accessCode === undefined) {
          inputObj.accessCode = "demo";
        }
        localStorage.setItem("configLogInPassword", inputObj.accessCode);
        appState["configLogInPassword"] = inputObj.accessCode;

        // ***
        // *** PRESORT OPTIONS ***
        // ***
        // set 2-6. font color
        if (inputObj.defaultFontColor === undefined) {
          inputObj.defaultFontColor = "#2a2a2a";
        }
        localStorage.setItem("defaultFontColor", inputObj.defaultFontColor);
        appState["defaultFontColor"] = inputObj.defaultFontColor;

        // set 2-7. Presort statement font size
        if (inputObj.defaultFontSizePresort === undefined) {
          inputObj.defaultFontSizePresort = 26;
        }
        appState["configDefaultFontSizePresort"] =
          inputObj.defaultFontSizePresort;
        localStorage.setItem(
          "configDefaultFontSizePresort",
          inputObj.defaultFontSizePresort
        );

        // set 2-8a. positive card color
        if (inputObj.greenCardColor === undefined) {
          inputObj.greenCardColor = "#ccffcc";
        }
        localStorage.setItem("greenCardColor", inputObj.greenCardColor);
        appState["greenCardColor"] = inputObj.greenCardColor;

        // set 2-8b. neutral card color
        if (inputObj.yellowCardColor === undefined) {
          inputObj.yellowCardColor = "#e0e0e0";
        }
        localStorage.setItem("yellowCardColor", inputObj.yellowCardColor);
        appState["yellowCardColor"] = inputObj.yellowCardColor;

        // set 2-8c. negative card color
        if (inputObj.pinkCardColor === undefined) {
          inputObj.pinkCardColor = "#ffe0f0";
        }
        localStorage.setItem("pinkCardColor", inputObj.pinkCardColor);
        appState["pinkCardColor"] = inputObj.pinkCardColor;

        // set 2-11 link presort values
        if (inputObj.traceSorts === undefined) {
          inputObj.traceSorts = false;
        }
        if (inputObj.traceSorts === "true" || inputObj.traceSorts === true) {
          appState.configPresortTracetrueActive = true;
          appState.configPresortTracefalseActive = false;
        } else {
          appState.configPresortTracetrueActive = false;
          appState.configPresortTracefalseActive = true;
        }
        localStorage.setItem("configPresortTrace", inputObj.traceSorts);
        appState["configPresortTrace"] = inputObj.traceSorts;

        // ***
        // *** SORT OPTIONS ***
        // ***

        // set 2-9. Sort statement font size
        if (inputObj.defaultFontSizeSort === undefined) {
          inputObj.defaultFontSizeSort = 16;
        }
        localStorage.setItem(
          "configDefaultFontSizeSort",
          inputObj.defaultFontSizeSort
        );
        appState["configDefaultFontSizeSort"] = inputObj.defaultFontSizeSort;

        // set 2-9. Sort card height size
        if (inputObj.minCardHeightSort === undefined) {
          inputObj.minCardHeightSort = 120;
        }
        localStorage.setItem(
          "configMinCardHeightSort",
          inputObj.minCardHeightSort
        );
        appState["configMinCardHeightSort"] = inputObj.minCardHeightSort;

        // set 2-10. Condition of instruction font size
        if (inputObj.condOfInstFontSize === undefined) {
          inputObj.condOfInstFontSize = 20;
        }
        localStorage.setItem(
          "configCondOfInstFontSize",
          inputObj.condOfInstFontSize
        );
        appState["configCondOfInstFontSize"] = inputObj.condOfInstFontSize;

        // set 2-11a Allow unforced sorts
        if (inputObj.allowUnforcedSorts === undefined) {
          inputObj.allowUnforcedSorts = "false";
        }
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

        // set 2-11b Display overloaded column warning
        if (inputObj.warnOverloadedColumn === undefined) {
          inputObj.warnOverloadedColumn = "true";
        }
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

        // set 2-13 Set sort direction
        if (inputObj.sortDirection === undefined) {
          inputObj.sortDirection = "positive";
        }
        localStorage.setItem("configSortDirection", inputObj.sortDirection);
        appState["configSortDirection"] = inputObj.sortDirection;
        appState.configSortDirectionpositiveActive = false;
        appState.configSortDirectionnegativeActive = false;
        if (inputObj.sortDirection === "positive") {
          appState.configSortDirectionpositiveActive = true;
        }
        if (inputObj.sortDirection === "negative") {
          appState.configSortDirectionnegativeActive = true;
        }

        // ***
        // *** POSTSORT OPTIONS ***
        // ***
        // set 2-14 Include Postsort comments screen
        if (inputObj.showPostsort === undefined) {
          inputObj.showPostsort = "true";
        }
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

        // set 2-17. Sort statement font size
        if (inputObj.defaultFontSizePostsort === undefined) {
          inputObj.defaultFontSizePostsort = 16;
        }
        localStorage.setItem(
          "configDefaultFontSizePostsort",
          inputObj.defaultFontSizePostsort
        );
        appState["configDefaultFontSizePostsort"] =
          inputObj.defaultFontSizePostsort;

        // set 2-12 Set min card height
        if (inputObj.minCardHeightPostsort === undefined) {
          inputObj.minCardHeightPostsort = 120;
        }
        localStorage.setItem(
          "configMinCardHeightPostsort",
          inputObj.minCardHeightPostsort
        );
        appState["configMinCardHeightPostsort"] =
          inputObj.minCardHeightPostsort;

        // set 2-15. Display second positive column
        if (inputObj.showSecondPosColumn === undefined) {
          inputObj.showSecondPosColumn = "false";
        }
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

        // set 2-16 Display second negative column
        if (inputObj.showSecondNegColumn === undefined) {
          inputObj.showSecondNegColumn = "false";
        }
        localStorage.setItem(
          "configShowSecondNegColumn",
          inputObj.showPSecondNegColumn
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

        // set 2-17 Display previous page navigation button in footer
        if (inputObj.showBackButton === undefined) {
          inputObj.showBackButton = "false";
        }
        localStorage.setItem("configShowBackButton", inputObj.showBackButton);
        appState["configShowBackButton"] = inputObj.showBackButton;
        appState.configShowBackButtontrueActive = false;
        appState.configShowBackButtonfalseActive = false;
        if (inputObj.showBackButton === "true") {
          appState.configShowBackButtontrueActive = true;
        }
        if (inputObj.showBackButton === "false") {
          appState.configShowBackButtonfalseActive = true;
        }

        // set 2-18 force participants to comment in postsort
        if (inputObj.postsortCommentsRequired === undefined) {
          inputObj.postsortCommentsRequired = "false";
        }
        localStorage.setItem(
          "configPostsortCommentsRequired",
          inputObj.postsortCommentsRequired
        );
        appState["configPostsortCommentsRequired"] =
          inputObj.postsortCommentsRequired;
        appState.configPostsortCommentsRequiredtrueActive = false;
        appState.configPostsortCommentsRequiredfalseActive = false;
        if (inputObj.postsortCommentsRequired === "true") {
          appState.configPostsortCommentsRequiredtrueActive = true;
        }
        if (inputObj.postsortCommentsRequired === "false") {
          appState.configPostsortCommentsRequiredfalseActive = true;
        }

        // ***
        // *** SURVEY OPTIONS ***
        // ***
        // set 2-16 show step 4 - Survey
        if (inputObj.showSurvey === undefined) {
          inputObj.showSurvey = "true";
        }
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
          const newItemArray = [`<b>Item type:</b> ${item.type}`];

          if (displayBoolean?.required === true) {
            newItemObj.required = item.required;
            newItemArray.push(`<b>Answer required:</b> ${item.required}`);
          }

          if (displayBoolean?.label === true) {
            newItemObj.label = item.label;
            newItemArray.push(`<b>Label:</b> ${decodeHTML(item.label)}`);
          }

          if (displayBoolean?.note === true) {
            newItemObj.note = item.note;
            newItemArray.push(`<b>Question note:</b> ${decodeHTML(item.note)}`);
          }
          if (displayBoolean?.options === true) {
            newItemObj.options = item.options;
            newItemArray.push(`<b>Options:</b> ${decodeHTML(item.options)}`);
          }

          if (displayBoolean?.scale === true) {
            newItemObj.scale = item.scale;
            newItemArray.push(`<b>Scale:</b> ${decodeHTML(item.scale)}`);
          }

          if (displayBoolean?.placeholder === true) {
            newItemObj.placeholder = item.placeholder;
            newItemArray.push(`<b>Placeholder:</b> ${item.placeholder}`);
          }

          if (displayBoolean?.limited === true) {
            console.log(item.maxlength);
            console.log(item.limitLength);
            let lengthValue = 999;
            if (
              item.maxlength === null ||
              item.maxlength === undefined ||
              isNaN(item.maxlength)
            ) {
              newItemObj.maxlength = item.limitLength;
              lengthValue = item.limitLength;
            } else {
              newItemObj.maxlength = item.maxlength;
              lengthValue = item.maxlength;
            }
            newItemObj.limited = item.limited;
            newItemArray.push(`<b>Limit answer length:</b> ${item.limited}`);
            console.log(lengthValue);
            if (item?.limited === true || item?.limited === "true") {
              newItemArray.push(`<b>Answer max length:</b> ${lengthValue}`);
            }
          }

          if (displayBoolean?.restricted === true) {
            newItemObj.restricted = item.restricted;
            newItemArray.push(
              `<b>Answer restricted to numbers "0-9":</b> ${item.restricted}`
            );
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
