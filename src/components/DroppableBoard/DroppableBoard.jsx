import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { CardItem } from "../CardItem";

const DroppableBoard = ({ onDragEnd, state, setState }) => {
  const grid = 8;

  const getListStyle = (isDraggingOver) => ({
    // background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: "30%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.map((el, ind) => (
        <Droppable key={ind} droppableId={`${ind}`}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {el.map((item, index) => (
                <CardItem
                  item={item}
                  index={index}
                  setState={setState}
                  state={state}
                  ind={ind}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

export default DroppableBoard;
