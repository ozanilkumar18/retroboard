import { Card } from "rebass";
import { Draggable } from "react-beautiful-dnd";

const StyledCard = (props) => {
  return (
    <Card
      {...props}
      sx={{
        ":hover": {
          "z-index": 5,
          // transform: "rotate(-6deg)",
          transform: "scale(1.25)",
        },
      }}
    />
  );
};

const CardItem = ({ item, index, setState, state, ind }) => {
  const getItemStyle = (isDragging, draggableStyle, index) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    // padding: "5px",
    boxShadow: "5px 5px 7px rgba(33,33,33,.7)",
    margin: `5px`,
    width: "22vh",
    height: "17vh",
    background: index % 2 === 0 ? "#ffc" : "#cfc",
    // change background colour if dragging
    // background: isDragging ? "lightgreen" : "grey",
    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <StyledCard width="10rem">
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style,
              index
            )}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                content: "x",
                fontWeight: 300,
              }}
              onClick={() => {
                const newState = [...state];
                newState[ind].splice(index, 1);
                setState(newState.filter((group) => group.length));
              }}
            >
              x
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "0.75rem",
              }}
            >
              <span>{item.content}</span>
            </div>
          </div>
        )}
      </Draggable>
    </StyledCard>
  );
};

export default CardItem;
