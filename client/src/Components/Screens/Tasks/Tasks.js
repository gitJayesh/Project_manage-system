import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import TaskContext from "../../../Context/task/taskContext";
import AuthContext from "../../../Context/auth/authContext";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  const taskContext = useContext(TaskContext);
  const authContext = useContext(AuthContext);
  const { deleteTask, deleteAdminTask, updateTask, getTasks } = taskContext;
  const { user, loadUser } = authContext;
  const { taskname, taskdescription, duedate, status, _id } = props.task;

  const [edit, setEdit] = useState(false);

  const [progress, setProgress] = useState(0);

  const onClick = () => {
    if (edit === false) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  };

  // console.log(_id);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteTasks = () => {
    user?.isPM ? deleteAdminTask(_id) : deleteTask(_id);
    console.log("delete");
    props.onHide(true);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    updateTask(progress, _id);
    getTasks();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      keyboard="true"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{taskname}</Modal.Title>{" "}
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Task description</Form.Label>
          <p>{taskdescription}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Completion date</Form.Label>
          <p>{duedate}</p>
        </Form.Group>
        <form onSubmit={onSubmit} className="w-100">
          <Form.Group className=" w-100">
            <Form.Label>Progress</Form.Label>

            <ProgressBar now={status} animated label={`${status}%`} />
          </Form.Group>
          {edit && (
            <Form.Group className="mt-3 ">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setProgress(e.target.value)}
              >
                <option>Select the completed percentage</option>
                <option value="25">25%</option>
                <option value="50">50%</option>
                <option value="75">75%</option>
                <option value="100">100%</option>
              </Form.Select>
            </Form.Group>
          )}
          {edit ? (
            <Button type="Submit" className="mt-3 " variant="outline-primary">
              Submit Progress
            </Button>
          ) : (
            <Button
              onClick={onClick}
              className="mt-3 "
              variant="outline-secondary"
            >
              Edit Progress
            </Button>
          )}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={deleteTasks} variant="danger">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Tasks({ task }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Link onClick={() => setModalShow(true)}>
        {/* Open */}
        <i class="fa-sharp fa-solid fa-eye "></i>
      </Link>
      <MyVerticallyCenteredModal
        task={task}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default Tasks;
