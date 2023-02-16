import React, { useContext, useEffect } from "react";
import TaskContext from "../../../Context/task/taskContext.js";
import axios from "axios";
import TaskCard from "./TaskCard.js";
import Banner from "../../Layout/Banner";
import Container from "react-bootstrap/esm/Container.js";
import { Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import BackButton from "../../Layout/BackButton.js";

const TasksScreen = () => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.token}`;

  const taskContext = useContext(TaskContext);
  const { getAdminTasks, adminTasks } = taskContext;

  useEffect(() => {
    getAdminTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  var sortedAdminTasks = adminTasks?.sort(dynamicSort("duedate"));
  console.log(sortedAdminTasks);

  return (
    <>
      <Banner title="Tasks" />
      <Container>
        <BackButton />
      </Container>
      <Container>
        <Row
          md={3}
          lg={4}
          sm={2}
          xs={1}
          className="gap-4 mt-3 justify-content-center align-itmes-center"
        >
          <Table striped hover>
            <thead>
              <tr>
                <th>SR.</th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedAdminTasks &&
                sortedAdminTasks.map((task) => (
                  <TaskCard key={task._id} task={task} />
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default TasksScreen;
