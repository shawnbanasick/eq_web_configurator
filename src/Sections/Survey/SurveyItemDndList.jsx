import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";

const clone = require("rfdc/default");

const SurveyItemDndList = () => {
  const grid = 5;
  let testItems = clone(appState.surveyQuestionsArray);

  const getItemStyle = (isDragging, draggableStyle) => ({
    // drag container style
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    borderRadius: "15px",

    // change background colour if dragging
    background: isDragging ? "#e6bbad" : "#d6dbe0",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver
      ? "var(--second-theme-color)"
      : "var(--second-theme-color)",
    padding: grid,
    width: "740px",
    borderRadius: "3px",
    minHeight: "125px",
  });

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      testItems,
      result.source.index,
      result.destination.index
    );

    testItems = [...items];
    appState.surveyQuestionsArray = testItems;
  };

  const callDelete = (e) => {
    const item = e.target.value;
    testItems.splice(item, 1);
    appState.surveyQuestionsArray = testItems;
  };

  return (
    <DragAndDropContainer>
      <h2 style={{ marginBottom: 5, marginTop: 25 }}>
        Question List &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Drag to
        change question order)
      </h2>
      <DragDropContext style={{ display: "flex" }} onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {testItems.map((item, index) => (
                <Draggable
                  key={item.id}
                  data-id={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Container>
                        <UlDiv>
                          <ul>
                            {item.content.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </UlDiv>
                        <DelDiv>
                          <DeleteButton value={index} onClick={callDelete}>
                            Delete
                          </DeleteButton>
                        </DelDiv>
                      </Container>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </DragAndDropContainer>
  );
};

export default view(SurveyItemDndList);

const DragAndDropContainer = styled.div`
  width: 750px;
`;

const DeleteButton = styled(GeneralButton)`
  background: #b2b2b2;
`;

const DelDiv = styled.div`
  display: flex;
  width: 75px;
  align-items: center;
  justify-content: center;
`;

const UlDiv = styled.div`
  width: 660px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 715px;
`;
