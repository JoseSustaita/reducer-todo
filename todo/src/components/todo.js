import React from "react";

const Todo = (props) => {
  return (
    <div
      style={{ textDecoration: props.item.completed ? "line-through" : "" }}
      onClick={() =>
        props.dispatch({ type: "COMPLETED_TODO", payload: props.item })
      }
    >
      <h3>{props.item.item}</h3>
    </div>
  );
};

export default Todo;
