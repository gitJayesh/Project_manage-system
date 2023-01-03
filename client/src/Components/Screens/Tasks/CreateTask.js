import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import ProgressBar from "react-bootstrap/ProgressBar";
import TaskContext from "../../../Context/task/taskContext";

function MyVerticallyCenteredModal(props) {
  const taskContext = useContext(TaskContext);
  const { addTask } = taskContext;

  const [taskname, setName] = useState("");
  const [story] = useState(props.id);

  const [taskdescription, setTaskDescription] = useState("");
  const [duedate, setDuedate] = useState("");
  const [status] = useState(0);
  // console.log(props.name);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      "createtask",
      story,
      taskname,
      taskdescription,
      duedate,
      status
    );
    if (duedate < currentDate) {
      alert("Enter valid date!!");
    } else {
      addTask(props.user, taskname, story, taskdescription, duedate, status);
      props.onHide(true);
    }
  };

  let currentDate = new Date().toJSON().slice(0, 10);

  // console.log(currentDate);
  // console.log(props.id);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      keyboard="true"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Name"
              value={taskname}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Story</Form.Label>
            <Form.Control type="text" value={props.name} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Task description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Task Description"
              value={taskdescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Completion Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Completion Date"
              value={duedate}
              onChange={(e) => setDuedate(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
function CreateTask({ name, id, user }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create Task
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={name}
        id={id}
        user={user}
      />
    </>
  );
}
export default CreateTask;
