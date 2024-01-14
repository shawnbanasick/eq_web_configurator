import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";

const ImagesBypass = () => {
  let displayMode = true;

  appState.currentStatements = localStorage.getItem("currentStatements");

  return (
    <Container>
      {displayMode && (
        <DisplayModeText>
          Because you have selected the "<b>Use images</b>" option for Config
          Option 2-4, you do not need to enter any statements. However, do not
          delete the default statements.xml file in the settings folder.
          <br />
          <br />
          Continue to Section "<b>4. Map</b>".
        </DisplayModeText>
      )}
    </Container>
  );
};

export default view(ImagesBypass);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-top: 40px;
  margin-bottom: 30px;
  width: 78vw;
  max-width: 1200px;
  font-size: 20px;
  padding: 10px;
  background: whitesmoke;
  border-radius: 3px;

  border: 2px solid black;
`;
