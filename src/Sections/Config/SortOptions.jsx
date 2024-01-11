import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import UserNumberInput from "../../Utils/UserNumberInput";
import RadioButtons from "../../Utils/RadioButtons";

const SortOptions = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <React.Fragment>
      <SubTitle>Sort Options (Step 2)</SubTitle>

      {displayMode && (
        <DisplayModeText>
          The default is to have forced Q sorts. When the participant puts too
          many cards into a column the software will indicate an overload by
          changing the column background color to orange and the column border
          to a dashed line. Also, navigation to the next step is disabled if
          there is an overloaded column.
          <br /> <br />"<b>Sort direction</b>" refers to the orientation of the
          unsorted cards in the bottom horozontal row. If the sort direction is
          set to "positive", the postive cards are shown first and the
          horozontal row scrolls from right to left. If the sort direction is
          set to "negative", the negative cards are shown first and the
          horozontal row scrolls from left to right.
        </DisplayModeText>
      )}

      <UserNumberInput
        label="2-9. Conditions of Instruction font size:"
        step={1}
        value={20}
        upperLimit={80}
        lowerLimit={8}
        stateId="configCondOfInstFontSize"
        sectionName="config"
      />
      <UserNumberInput
        label="2-10. Default sort statement font size:"
        step={1}
        value={20}
        upperLimit={800}
        lowerLimit={6}
        stateId="configDefaultFontSizeSort"
        sectionName="config"
      />

      <UserNumberInput
        label="2-11. Default card height:"
        step={1}
        value={20}
        upperLimit={800}
        lowerLimit={50}
        stateId="configMinCardHeightSort"
        sectionName="config"
      />

      <RadioButtons
        label="2-12a. Allow unforced sorts:"
        buttonIdArray={["true", "false"]}
        stateId="configAllowUnforcedSorts"
        sectionName="config"
      />

      <RadioButtons
        label="2-12b. Display overloaded column warning:"
        buttonIdArray={["true", "false"]}
        stateId="configDisplayOverloadedColWarn"
        sectionName="config"
      />

      <RadioButtons
        label="2-13. Sort Direction:"
        buttonIdArray={["positive", "negative"]}
        stateId="configSortDirection"
        sectionName="config"
      />
    </React.Fragment>
  );
};

export default view(SortOptions);

const SubTitle = styled.h1`
  font-size: 30px;
  width: 70vw;
  margin-left: 10px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-top: 20px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`;
