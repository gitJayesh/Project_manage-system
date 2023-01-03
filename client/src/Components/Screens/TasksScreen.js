import React, { useContext, useEffect } from "react";

import TaskContext from "../../Context/task/taskContext.js";
import axios from "axios";
import TaskCard from "./Tasks/TaskCard.js";
import Banner from "../Layout/Banner.js";
import Container from "react-bootstrap/esm/Container.js";

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
        {tasks && tasks.map((task) => <TaskCard key={task.id} task={task} />)}
      </Container>
    </>
  );
};

export default TasksScreen;
