import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import TaskContext from "../../../Context/task/taskContext";
import TaskCard from "../Tasks/TaskCard";
import CreateTask from "../Tasks/CreateTask";
import StoryContext from "../../../Context/story/storyContext";
import Button from "react-bootstrap/Button";
import Banner from "../../Layout/Banner.js";
import AuthContext from "../../../Context/auth/authContext.js";
import Container from "react-bootstrap/esm/Container";
import EditStory from "./EditStory";
import { Col, Row } from "react-bootstrap";
const Story = () => {
  let { id } = useParams();
  // console.log(id);
  const storyContext = useContext(StoryContext);
  const taskContext = useContext(TaskContext);
  const { adminTasks, getAdminTasks } = taskContext;

  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;
  const { story, getStory, deleteStory } = storyContext;
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteStory(id);
    navigate("/adminstories");
  };

  useEffect(() => {
    loadUser();
    getStory(id);
    getAdminTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(story);
  console.log("jayesh ", adminTasks);
  // console.log("id", id);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Banner title={story?.storyname} />
            <div className="project-desc">
              <h2 style={{ color: "black" }}>Story Description</h2>
              {story && <p className="lead">{story.description}</p>}
            </div>

            <div className="create-task d-flex justify-content-evenly align-items-centre">
              <CreateTask
                className="mr-2"
                id={id}
                name={story?.storyname}
                user={story?.user}
              />
              {user && user.isPM && (
                <>
                  <EditStory story={story} />
                  <Button onClick={handleDelete} variant="danger" type="submit">
                    Delete
                  </Button>
                </>
              )}
            </div>
          </Col>
          <Col className="mt-5">
            <h1>Tasks</h1>
            <div className="task-scroll">
              <Row lg={1} md={1} sm={1}>
                {adminTasks &&
                  adminTasks.map(
                    (task) =>
                      task.story === id && (
                        <TaskCard key={task._id} task={task} />
                      )
                  )}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Story;
