import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/responsive.css";
import "../../style/style.css";
import GreetingBanner from "../Layout/GreetingBanner.js";
import Card from "react-bootstrap/Card";
import AuthContext from "../../Context/auth/authContext.js";
import GreetMessage from "../Layout/GreetMessage";
const DashboardScreen = () => {
  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userLinks = (
    <Fragment>
      <Card className="dashboard-card">
        <Card.Body className="text-center d-flex justify-content-center align-items-center">
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <i className="fa-solid fa-table-columns fa-4x d-block"></i>Health
            Dashboard
          </Link>
        </Card.Body>
      </Card>
      <Card className="project-card">
        <Card.Body className="text-center d-flex justify-content-center align-items-center">
          <Link
            to="/storiespage"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <i className="fa-solid fa-laptop-file fa-4x"></i>My Stories
          </Link>
        </Card.Body>
      </Card>
      <Card className="tasks-card">
        <Card.Body className="text-center d-flex justify-content-center align-items-center">
          <Link
            to="/taskspage"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <i className="fa-solid fa-bars-progress fa-4x"></i>My Tasks
          </Link>
        </Card.Body>
      </Card>
    </Fragment>
  );
  const projectManagerLinks = (
    <Fragment>
      <Card className="dashboard-card">
        <Card.Body className="text-center d-flex justify-content-center align-items-center">
          <Link
            to="/adminteams"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <i className="fa-solid fa-table-columns fa-4x d-block"></i>Health
            Dashboard
          </Link>
        </Card.Body>
      </Card>
      <Card className="project-card">
        <Card.Body className="text-center d-flex justify-content-center align-items-center">
          <Link
            to="/adminstories"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <i className="fa-solid fa-laptop-file fa-4x"></i>Stories
          </Link>
        </Card.Body>
      </Card>
      <Card className="tasks-card">
        <Card.Body className="text-center d-flex justify-content-center align-items-center">
          <Link
            to="/admintasks"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <i className="fa-solid fa-bars-progress fa-4x"></i>Tasks
          </Link>
        </Card.Body>
      </Card>
    </Fragment>
  );
  console.log("ravi", user);
  return (
    <>
      <GreetingBanner />
      <GreetMessage />
      <div className="dashboard-cards">
        {user && (user.isPM ? projectManagerLinks : userLinks)}
      </div>
    </>
  );
};
export default DashboardScreen;
