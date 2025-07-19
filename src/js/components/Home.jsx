import React, { useState } from "react";

function Home() {
  const [tasks, setTasks] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog",
    "Do my homework",
  ]);
  const [taskInput, setTaskInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && taskInput.trim() !== "") {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput("");
    }
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="bg-white shadow p-4 rounded w-100" style={{ maxWidth: "500px" }}>
        <h1 className="h4 mb-4">What needs to be done?</h1>

        <input
          type="text"
          placeholder="Add new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="form-control mb-3"
        />

        <ul className="list-group">
          {tasks.length === 0 ? (
            <li className="list-group-item text-muted fst-italic">
              there are no pending tasks
            </li>
          ) : (
            tasks.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
                onMouseEnter={(e) => {
                  const btn = e.currentTarget.querySelector("button");
                  if (btn) btn.style.display = "inline";
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget.querySelector("button");
                  if (btn) btn.style.display = "none";
                }}
              >
                <span>{task}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-sm btn-outline-danger"
                  style={{ display: "none" }}
                >
                  X
                </button>
              </li>
            ))
          )}
        </ul>

        <p className="text-secondary small mt-3 mb-0">
          {tasks.length} {tasks.length === 1 ? "Pending task" : "Pending tasks"}
        </p>
      </div>
    </div>
  );
}

export default Home;