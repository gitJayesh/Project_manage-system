import React from "react";
import { Card } from "react-bootstrap";
import "../../../style/style.css";
import Tasks from "../Tasks/Tasks";

const TasksGrid = ({ adminTasks, id }) => {
  console.log(id);

  return (
    <div className="card-grid">
      {adminTasks &&
        adminTasks.map(
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
