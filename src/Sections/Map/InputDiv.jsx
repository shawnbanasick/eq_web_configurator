import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import React from "react";
import MapColorPicker from "../Config/MapColorPicker";

const InputDiv = (props) => {
  const saveInputValueToState = (event) => {
    props.onChangeCallback(event);
    console.log(event);
    console.log(props);
  };

  return (
    <InputColumn>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInput
        type="text"
        name={props.name}
        onChange={saveInputValueToState}
        value={props.value}
      />
      <MapColorPicker stateDesig={props.stateDesig} default={props.default} />
    </InputColumn>
  );
};

export default view(InputDiv);

const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  width: 40px;
  height: 85px;
  border: 1px solid darkgray;
  background-color: #d6dbe0;
  padding-right: 2px;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
`;

const StyledInput = styled.input`
  width: 26px;
  text-align: center;
  margin-left: 3px;
  margin-bottom: 5px;
`;

const StyledLabel = styled.label`
  margin-left: 4px;
  text-align: center;
  padding-right: 1px;
`;
