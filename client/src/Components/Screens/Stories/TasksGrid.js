import React from "react";
import { Card } from "react-bootstrap";
import Tasks from "../Tasks/Tasks";

const TasksGrid = ({ adminTasks, id }) => {
  console.log(id);

  return (
    <div>
      {adminTasks &&
        adminTasks.map(
          (task) =>
            task.story === id && (
              <Card
                style={{ width: "100%" }}
                className=" card-test d-flex justify-content-between"
              >
                <div className="d-flex justify-content-between">
                  <Card.Text className="place-center">
                    <h4>{task.taskname}</h4>
                  </Card.Text>
                  <Tasks key={task} task={task} />
                  {/* </div> */}
                </div>
              </Card>
            )
        )}
    </div>
  );
};

export default TasksGrid;
