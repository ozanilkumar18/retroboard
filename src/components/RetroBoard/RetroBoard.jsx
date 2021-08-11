import React, { useState } from "react";
import { DroppableBoard } from "../DroppableBoard";

// fake data generator
const getItems = (count, offset = 0) => {
  const dummyData = Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible ${
      k + offset
    }`,
  }));

  return dummyData;
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

function QuoteApp() {
  const [state, setState] = useState([
    getItems(10),
    getItems(5, 10),
    getItems(5, 15),
  ]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter((group) => group.length));
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setState([...state, []]);
        }}
      >
        Add new group
      </button>
      <button
        type="button"
        onClick={() => {
          setState([...state, getItems(1)]);
        }}
      >
        Add new item
      </button>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <DroppableBoard
          onDragEnd={onDragEnd}
          state={state}
          setState={setState}
        />
      </div>
    </div>
  );
}

export default QuoteApp;
