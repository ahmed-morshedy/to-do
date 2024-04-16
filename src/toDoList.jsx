/* eslint-disable no-unused-vars */
import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([
    "Take a shower",
    "Finish work",
    "go shopping",
    "Watch TV",
  ]);

  const [newTask, setNewTask] = useState("");

  function handelInput(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask != "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function moveTaskUP(index) {
    if (index > 0) {
      const updateTask = [...task];
      console.log(updateTask);
      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
      setTask(updateTask);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updateTask = [...task];
      console.log(updateTask);
      [updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ];
      setTask(updateTask);
    }
  }

  function deleteTask(index) {
    const updateTask = task.filter((_, i) => i !== index);
    setTask(updateTask);
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Your Task ..."
          value={newTask}
          onChange={handelInput}
          className="input"
        />

        <button onClick={addTask} className="add">
          Add
        </button>
      </div>

      <div className="container">
        {task.length == 0
          ? "No tasks added"
          : task.map((t, i) => {
              return (
                <div key={i} className="task">
                  <span>{t}</span>

                  <div>
                    {i != 0 && (
                      <button
                        className="moveUp sign"
                        onClick={() => moveTaskUP(i)}
                      >
                        ⬆
                      </button>
                    )}

                    {i != task.length - 1 && (
                      <button
                        className="MoveDown sign"
                        onClick={() => moveTaskDown(i)}
                      >
                        ⬇
                      </button>
                    )}

                    <button className="del sign" onClick={() => deleteTask(i)}>
                      ❌
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
export default ToDoList;
