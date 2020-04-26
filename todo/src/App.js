import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/reducer";
import List from "./components/list";
import "./App.css";

function App() {
  const [item, dispatch] = useReducer(reducer, initialState);
  const [newTask, setTask] = useState("");

  const handleChanges = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask("");
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="iten"
          value={newTask}
          onChange={handleChanges}
          placeholder="Task"
        />
        <br></br>
        <button
          onClick={() => dispatch({ type: "ADD_TODO", payload: newTask })}
          type="submit"
        >
          Add Task
        </button>
        <List item={item} dispatch={dispatch} />
        <button
          onClick={() => dispatch({ type: "CLEAR_TODO", payload: newTask })}
        >
          Clear Task
        </button>
      </form>
    </div>
  );
}

export default App;
