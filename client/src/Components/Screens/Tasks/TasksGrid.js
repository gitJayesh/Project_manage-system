import React from "react";
import { Card, Alert } from "react-bootstrap";
import "../../../style/style.css";
import Tasks from "./Tasks";

const TasksGrid = ({ adminTasks, id }) => {
  console.log(id);

  const storyTasks = [];

  adminTasks &&
    adminTasks.filter((task) => task.story === id && storyTasks.push(task));

  console.log(storyTasks, "Story tasks");

  return (
    <div className="card-grid">
      {storyTasks.length === 0 && (
        <Alert variant="info">No Tasks added for this story.</Alert>
      )}
      {storyTasks &&
        storyTasks.map(
          (task) =>
            task.story === id && (
              <div className="card-test">
                <div style={{ height: "100%" }}>
                  <h5 className="text-capitalize task-name">{task.taskname}</h5>
                  <p>{task.duedate}</p>
                </div>
                <div>
                  <Tasks key={task} task={task} />
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default TasksGrid;
