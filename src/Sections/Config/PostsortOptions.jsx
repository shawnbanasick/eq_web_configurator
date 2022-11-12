import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import RadioButtons from "../../Utils/RadioButtons";

const PostsortOptions = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <React.Fragment>
      <SubTitle>Postsort Options (Optional Step 3)</SubTitle>

      {displayMode && (
        <DisplayModeText>
          Optional step 3 gives the participant an opportunity to add additional
          comments to the card(s) that were placed in the most extreme positive
          and negative columns. In some research designs there might only be one
          statement in the extreme columns, so in that case you may want to
          include the second most extreme columns as well.
        </DisplayModeText>
      )}

      <RadioButtons
        label="2-11. Include individual card comments screen (Step 3):"
        buttonIdArray={["true", "false"]}
        stateId="configShowStep3"
        sectionName="config"
      />

      <RadioButtons
        label="2-12. Display cards from second most positive column:"
        buttonIdArray={["true", "false"]}
        stateId="configShowSecondPosColumn"
        sectionName="config"
      />

      <RadioButtons
        label="2-13. Display cards from second most negative column:"
        buttonIdArray={["true", "false"]}
        stateId="configShowSecondNegColumn"
        sectionName="config"
      />
    </React.Fragment>
  );
};

export default view(PostsortOptions);

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
