import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import RadioButtons from "../../Utils/RadioButtons";
import UserNumberInput from "../../Utils/UserNumberInput";

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
        label="2-14. Include individual card comments screen (Step 3):"
        buttonIdArray={["true", "false"]}
        stateId="configShowStep3"
        sectionName="config"
      />

      <UserNumberInput
        label="2-15. Default sort statement font size:"
        step={1}
        value={20}
        upperLimit={800}
        lowerLimit={6}
        stateId="configDefaultFontSizePostsort"
        sectionName="config"
      />

      <UserNumberInput
        label="2-16. Default card height:"
        step={1}
        value={20}
        upperLimit={800}
        lowerLimit={50}
        stateId="configMinCardHeightPostsort"
        sectionName="config"
      />

      <RadioButtons
        label="2-17. Display cards from second most positive column:"
        buttonIdArray={["true", "false"]}
        stateId="configShowSecondPosColumn"
        sectionName="config"
      />

      <RadioButtons
        label="2-18. Display cards from second most negative column:"
        buttonIdArray={["true", "false"]}
        stateId="configShowSecondNegColumn"
        sectionName="config"
      />

      <RadioButtons
        label="2-19. Display previous page navigation button in footer:"
        buttonIdArray={["true", "false"]}
        stateId="configShowBackButton"
        sectionName="config"
      />

      <RadioButtons
        label="2-20. Force participant to add comments before navigation:"
        buttonIdArray={["true", "false"]}
        stateId="configPostsortCommentsRequired"
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
