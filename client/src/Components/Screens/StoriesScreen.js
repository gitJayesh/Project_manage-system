import React, { useContext, useEffect, useState } from "react";
// import Sidebar from "../Layout/SideBar.js";
import NavbarUser from "../Layout/NavbarUser.js";
import Story from "./Stories/Story.js";
import { useNavigate } from "react-router-dom";
import StoryContext from "../../Context/story/storyContext.js";
import CreateStory from "./Stories/CreateStory.js";
import StoryCard from "./Stories/StoryCard.js";
import AuthContext from "../../Context/auth/authContext.js";
import axios from "axios";
import Banner from "../Layout/Banner.js";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const StoriesScreen = () => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.token}`;
  const navigate = useNavigate();
  const storyContext = useContext(StoryContext);
  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;
  const { getStories, stories } = storyContext;
  console.log(stories);
  const [modalStyle, setModalStyle] = useState("none");

  useEffect(() => {
    loadUser();
    getStories();
  }, []);
  return (
    <>
      <Banner title="Engineer Stories" />
      <div className="create-task">{user && user.isPM && <CreateStory />}</div>
      {/* <div className="user-dashboard-cards"> */}
      <Container>
        <Row
          md={3}
          lg={4}
          sm={2}
          xs={1}
          className="gap-4 justify-content-center align-itmes-center"
        >
          {stories &&
            stories.map((story) => <StoryCard key={story._id} story={story} />)}
          {/* </div> */}
        </Row>
      </Container>
    </>
  );
};
export default StoriesScreen;
