import React, { useContext, useEffect } from "react";
import StoryContext from "../../Context/story/storyContext.js";
import CreateStory from "./Stories/CreateStory.js";
import StoryCard from "./Stories/StoryCard.js";
import AuthContext from "../../Context/auth/authContext.js";
import axios from "axios";
import Banner from "../Layout/Banner.js";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import BackButton from "../Layout/BackButton.js";

const StoriesScreen = () => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.token}`;
  // const navigate = useNavigate();
  const storyContext = useContext(StoryContext);
  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;
  const { getStories, stories } = storyContext;
  console.log(stories);

  useEffect(() => {
    loadUser();
    getStories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Banner title="Engineer Stories" />
      <div className="create-task">{user && user.isPM && <CreateStory />}</div>
      <Container>
        <BackButton />
      </Container>
      <Container>
        <Row
          md={3}
          lg={4}
          sm={2}
          xs={1}
          className="gap-4  justify-content-center align-itmes-center"
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
              {stories &&
                stories.map((story) => (
                  <StoryCard key={story._id} story={story} />
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};
export default StoriesScreen;
// {stories &&
// stories.map((story) => <StoryCard key={story._id} story={story} />)}
