import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";

const generateCsvFile = () => {
  const rows = [
    ["section", "designation", "text"],
    [
      "multiple 1",
      "langStepCompleted",
      "You have completed this step. Please click on the <b> blue 'Continue' button </b> at the bottom right-side of your screen to go to the next step",
    ],
    ["multiiple ", "", ""],
    ["multiiple ", "", ""],
    ["multiiple ", "", ""],
    ["multiiple ", "", ""],
    ["multiiple ", "", ""],
    ["multiiple ", "", ""],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
};

const DownloadCsvButton = () => {
  const handleOnClick = () => {};
  return (
    <DownloadButton onClick={handleOnClick}>Download as CSV</DownloadButton>
  );
};

const DownloadButton = styled(GeneralButton)`
  width: auto;
  align-self: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #eb8100;
  border: 1px solid black;
`;

export default view(DownloadCsvButton);
