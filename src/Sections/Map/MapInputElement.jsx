import { view, store } from "@risingstack/react-easy-state";
import styled from "styled-components";
import React from "react";
import InputDiv from "./InputDiv";
import convertQsortObjectToArray from "./convertQsortObjectToArray";
import appState from "../../GlobalState/appState";

const QsortDesignInputElement = () => {
  const localStore = store({
    qSortPatternObject: {},
    activeValueM6: "",
    activeValueM5: "",
    activeValueM4: "",
    activeValueM3: "",
    activeValueM2: "",
    activeValueM1: "",
    activeValue0: "",
    activeValue1: "",
    activeValue2: "",
    activeValue3: "",
    activeValue4: "",
    activeValue5: "",
    activeValue6: "",
    activeValue7: "",
    activeValue8: "",
    activeValue9: "",
    activeValue10: "",
    activeValue11: "",
    activeValue12: "",
    activeValue13: "",
    inputTitle: "Enter the Number of Statements in Each Column",
    inputColor: "white",
  });
  //   const { t } = useTranslation();

  // getState
  const statementsLength = appState.statements.length;
  localStore.statementsLength = statementsLength;

  const {
    activeValueM6,
    activeValueM5,
    activeValueM4,
    activeValueM3,
    activeValueM2,
  } = appState;
  const {
    activeValueM1,
    activeValue0,
    activeValue1,
    activeValue2,
    activeValue3,
    activeValue4,
    activeValue5,
  } = appState;
  const {
    activeValue6,
    activeValue7,
    activeValue8,
    activeValue9,
    activeValue10,
    activeValue11,
    activeValue12,
    activeValue13,
  } = appState;

  const valuesArray = [
    activeValueM6,
    activeValueM5,
    activeValueM4,
    activeValueM3,
    activeValueM2,
    activeValueM1,
    activeValue0,
    activeValue1,
    activeValue2,
    activeValue3,
    activeValue4,
    activeValue5,
    activeValue6,
    activeValue7,
    activeValue8,
    activeValue9,
    activeValue10,
    activeValue11,
    activeValue12,
    activeValue13,
  ];

  const valuesTextArray = [
    "activeValueM6",
    "activeValueM5",
    "activeValueM4",
    "activeValueM3",
    "activeValueM2",
    "activeValueM1",
    "activeValue0",
    "activeValue1",
    "activeValue2",
    "activeValue3",
    "activeValue4",
    "activeValue5",
    "activeValue6",
    "activeValue7",
    "activeValue8",
    "activeValue9",
    "activeValue10",
    "activeValue11",
    "activeValue12",
    "activeValue13",
  ];

  valuesTextArray.forEach((item, index) => {
    let storedValue = localStorage.getItem(item);
    if (!storedValue) {
      localStore[item] = valuesArray[index];
      localStorage.setItem(item, valuesArray[index]);
    } else {
      localStore[item] = storedValue;
    }
  });

  // handle # cards input in each column
  const calcQsortDesign = (event) => {
    let columnName = event.target.name;

    // set column in local state to new value
    localStore[`activeValue${event.target.name}`] = event.target.value;

    // to get local state of all current values
    // const qSortPatternObject = localStore.qSortPatternObject;
    let qSortPatternObject = JSON.parse(
      localStorage.getItem("qSortPatternObject")
    );
    if (!qSortPatternObject) {
      qSortPatternObject = localStore.qSortPatternObject;
    }

    // if negative, substitute - for M
    if (columnName.charAt(0) === "M") {
      columnName = +columnName.replace("M", "-");
    }

    // set new key - value in qSortPatternObject
    qSortPatternObject[columnName] = event.target.value;
    // send all current values back to local state
    localStore.qSortPatternObject = qSortPatternObject;

    // process array for completeness and UI feedback
    const qSortPattern = convertQsortObjectToArray(qSortPatternObject);
    const enteredStatements = qSortPattern.length;
    const difference = localStore.statementsLength - enteredStatements;
    const fullColumnName = `activeValue${event.target.name}`;
    const targetValue = event.target.value;

    if (difference === 0) {
      localStore.inputTitle = "All Statements Allocated";
      localStore.inputColor = "rgba(144,	238,	144, .6)";
    }
    if (difference > 0) {
      localStore.inputTitle = `${difference} Statements Left`;
      localStore.inputColor = "white";
    }
    if (difference < 0) {
      localStore.inputTitle = `Over-Allocated: ${-difference} statements`;
      localStore.inputColor = "lightpink";
    }
    appState[fullColumnName] = targetValue;
    localStorage.setItem(`${fullColumnName}`, targetValue);
    appState.qSortPattern = qSortPattern;
    appState.qSortPatternObject = qSortPatternObject;
    localStorage.setItem(
      "qSortPatternObject",
      JSON.stringify(qSortPatternObject)
    );
  };

  if (true) {
    return (
      <DesignDiv>
        <TitleDiv>
          <TextDiv inputColor={localStore.inputColor}>Q Sort Pattern</TextDiv>
          {statementsLength ? (
            <TextDiv2>{localStore.inputTitle}</TextDiv2>
          ) : (
            <TextDiv2>No Statements Loaded</TextDiv2>
          )}
        </TitleDiv>
        <InputRow>
          <InputDiv
            label={"-6"}
            name={"M6"}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM6}
            stateDesig={"colColN6"}
            default={appState.colColN6}
          />
          <InputDiv
            label={"-5"}
            name={"M5"}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM5}
            stateDesig={"colColN5"}
            default={appState.colColN5}
          />
          <InputDiv
            label={"-4"}
            name={"M4"}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM4}
            stateDesig={"colColN4"}
            default={appState.colColN4}
          />
          <InputDiv
            label={"-3"}
            name={"M3"}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM3}
            stateDesig={"colColN3"}
            default={appState.colColN3}
          />
          <InputDiv
            label={"-2"}
            name={"M2"}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM2}
            stateDesig={"colColN2"}
            default={appState.colColN2}
          />
          <InputDiv
            label={"-1"}
            name={"M1"}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM1}
            stateDesig={"colColN1"}
            default={appState.colColN1}
          />
          <InputDiv
            label={"0"}
            name={0}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue0}
            stateDesig={"colCol0"}
            default={appState.colCol0}
          />
          <InputDiv
            label={"1"}
            name={1}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue1}
            stateDesig={"colCol1"}
            default={appState.colCol1}
          />
          <InputDiv
            label={"2"}
            name={2}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue2}
            stateDesig={"colCol2"}
            default={appState.colCol2}
          />
          <InputDiv
            label={"3"}
            name={3}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue3}
            stateDesig={"colCol3"}
            default={appState.colCol3}
          />
          <InputDiv
            label={"4"}
            name={4}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue4}
            stateDesig={"colCol4"}
            default={appState.colCol4}
          />
          <InputDiv
            label={"5"}
            name={5}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue5}
            stateDesig={"colCol5"}
            default={appState.colCol5}
          />
          <InputDiv
            label={"6"}
            name={6}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue6}
            stateDesig={"colCol6"}
            default={appState.colCol6}
          />
          <InputDiv
            label={"7"}
            name={7}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue7}
            stateDesig={"colCol7"}
            default={appState.colCol7}
          />
          <InputDiv
            label={"8"}
            name={8}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue8}
            stateDesig={"colCol8"}
            default={appState.colCol8}
          />
          <InputDiv
            label={"9"}
            name={9}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue9}
            stateDesig={"colCol9"}
            default={appState.colCol9}
          />
          <InputDiv
            label={"10"}
            name={10}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue10}
            stateDesig={"colCol10"}
            default={appState.colCol10}
          />
          <InputDiv
            label={"11"}
            name={11}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue11}
            stateDesig={"colCol11"}
            default={appState.colCol11}
          />
          <InputDiv
            label={"12"}
            name={12}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue12}
            stateDesig={"colCol12"}
            default={appState.colCol12}
          />
          <InputDiv
            label={"13"}
            name={13}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue13}
            stateDesig={"colCol13"}
            default={appState.colCol13}
          />
        </InputRow>
      </DesignDiv>
    );
  }
  return <div />;
};

export default view(QsortDesignInputElement);

const InputRow = styled.div`
  display: flex;
`;

const DesignDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  /* grid-column-start: 1; */
  width: auto;
`;

const TextDiv = styled.div`
  background-color: ${(props) => props.inputColor};
  font-size: 20px;
  margin-bottom: 5px;
  width: 400px;
  padding-top: 4px;
  padding-left: 4px;
  height: 25px;
`;

const TextDiv2 = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
  padding-top: 4px;
  padding-left: 4px;
  width: 700px;
  height: 25px;
`;

const TitleDiv = styled.div`
  display: flex;
  width: 700px;
  /* border: 2px solid red; */
`;
