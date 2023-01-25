import React, { useContext, useEffect } from "react";

import TaskContext from "../../Context/task/taskContext.js";
import axios from "axios";
import TaskCard from "./Tasks/TaskCard.js";
import Banner from "../Layout/Banner.js";
import Container from "react-bootstrap/esm/Container.js";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";

const TasksScreen = () => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.token}`;
  const taskContext = useContext(TaskContext);
  const { getTasks, tasks } = taskContext;

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(tasks);
  return (
    <>
      <Banner title="Tasks" />

      <Container>
        <Row
          md={3}
          lg={4}
          sm={2}
          xs={1}
          className="gap-4 mt-5 justify-content-center align-itmes-center"
        >
          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Story Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks &&
                tasks.map((task) => <TaskCard key={task.id} task={task} />)}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default TasksScreen;
