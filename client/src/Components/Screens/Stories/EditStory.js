import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import storyContext from "../../../Context/story/storyContext";
import authContext from "../../../Context/auth/authContext";

function MyVerticallyCenteredModal(props) {
  // const [edit, setEdit] = useState(true);

  console.log(props);

  const [editStory, setEditStory] = useState({
    id: props.story?._id,
    user: props.story?.user,
    storyname: props.story?.storyname,
    description: props.story?.description,
    duedate: props.story?.duedate,
    status: props.story?.status,
  });

  const options = [];

  const StoryContext = useContext(storyContext);

  const AuthContext = useContext(authContext);

  const { updateStory } = StoryContext;
  const { users, loadAllUsers } = AuthContext;
  const now = 60;
  // const onClick = () => {
  //   setEdit(false);
  // };

  useEffect(() => {
    loadAllUsers();
  }, []);

  console.log(users);

  users?.forEach((user) => {
    if (!user.isPM) {
      options.push({ value: user._id, label: user.name });
    }
  });

  console.log(options);

  const handleChange = (e) => {
    let newStory = { ...editStory, [e.target.id]: e.target.value };
    // console.log(newStory);
    setEditStory(newStory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(editStory);
    updateStory(editStory);
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
        <Modal.Title id="contained-modal-title-vcenter">Edit Story</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="user">
            <Form.Label>User</Form.Label>
            <Form.Control as="select" onChange={(e) => handleChange(e)}>
              {options?.map((option) => {
                if (editStory.user === option.value) {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                }
              })}

              {options?.map((option) => {
                if (editStory.user !== option.value) {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                }
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="storyname">
            <Form.Label>Story Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Story Name"
              onChange={(e) => handleChange(e)}
              value={editStory.storyname}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Story description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Story Description"
              onChange={(e) => handleChange(e)}
              value={editStory.description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="duedate">
            <Form.Label>Completion Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Completion Date"
              onChange={(e) => handleChange(e)}
              value={editStory.duedate}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
function EditStory({ story }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        Edit Story
      </Button>
      <MyVerticallyCenteredModal
        story={story}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default EditStory;
