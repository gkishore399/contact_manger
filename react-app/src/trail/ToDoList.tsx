import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["breakfast", "takeshower"]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event: any) {
    setNewTask(event?.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteIndex(index: any) {
    setTasks(() => tasks.filter((task, i) => i !== index));
  }
  function moveUp(index) {
    if (index <= 0 || index >= tasks.length) {
      return; // Prevent moving up the first element or out of bounds
    }
    const updateTasks = [...tasks];
    const temp = updateTasks[index - 1];
    updateTasks[index - 1] = updateTasks[index];
    updateTasks[index] = temp;
    setTasks(() => updateTasks);
  }
  function moveDown(index) {
    if (index < 0 || index >= tasks.length - 1) {
      return; // Prevent moving up the first element or out of bounds
    }
    const updateTasks = [...tasks];
    const temp = updateTasks[index + 1];
    updateTasks[index + 1] = updateTasks[index];
    updateTasks[index] = temp;
    setTasks(() => updateTasks);
  }
  return (
    <div>
      <div className="to-do-list">
        <h1>To-do-List</h1>
        <input
          value={newTask}
          onChange={(e) => handleInputChange(e)}
          placeholder="enter task"
        ></input>
        <button className="add-button" onClick={addTask}>
          AddTask
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteIndex(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveUp(index)}>
                Up
              </button>
              <button className="delete-button" onClick={() => moveDown(index)}>
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
