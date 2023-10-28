import React from "react";
import Tasks from "./Tasks";
import "./App.css";

class App extends Tasks {
  state = { tasks: [], currentTask: "" };

  render() {
    const { tasks } = this.state;
    return (
      <div className="App container">
        <div className="container1">
          <h1 className="heading">TO-DO</h1>
          <form
            onSubmit={this.handleSubmit}
            className="form-group"
            style={{ margin: "15px 0" }}
          >
            <input
              type="text"
              className="form-control"
              style={{ width: "80%" }}
              value={this.state.currentTask}
              required={true}
              onChange={this.handleChange}
              placeholder="Add New TO-DO"
            />
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </form>
          <div>
            {tasks.map((task) => (
              <div
                key={task._id}
                className={`task_container ${task.completed ? "completed" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => this.handleUpdate(task._id)}
                  className="form-check-input"
                />
                <div className={`task ${task.completed ? "line_through" : ""}`}>
                  {task.task}
                </div>
                <button
                  onClick={() => this.handleDelete(task._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
