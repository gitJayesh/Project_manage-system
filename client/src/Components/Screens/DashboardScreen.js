import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SideBar from "../Layout/SideBar.js";
import "../../style/responsive.css";
import "../../style/style.css";
import NavbarUser from "../Layout/NavbarUser";
import GreetingBanner from "../Layout/GreetingBanner.js";
import Card from "react-bootstrap/Card";
import AuthContext from "../../Context/auth/authContext.js";
const DashboardScreen = () => {
  const authContext = useContext(AuthContext);
  const { userInfo, user, isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  const userLinks = (
    <Fragment>
      <Card>
        <Card.Body className="text-center">
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <i className="fa-solid fa-table-columns fa-4x d-block"></i>Health
            Dashboard
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="text-center">
          <Link
            to="/storiespage"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i className="fa-solid fa-laptop-file fa-4x"></i>My Stories
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="text-center">
          <Link
            to="/taskspage"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i className="fa-solid fa-bars-progress fa-4x"></i>My Tasks
          </Link>
        </Card.Body>
      </Card>
    </Fragment>
  );
  const projectManagerLinks = (
    <Fragment>
      <Card>
        <Card.Body className="text-center">
          <Link
            to="/adminteams"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i className="fa-solid fa-table-columns fa-4x d-block"></i>Health
            Dashboard
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="text-center">
          <Link
            to="/adminstories"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i className="fa-solid fa-laptop-file fa-4x"></i>Stories
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="text-center">
          <Link
            to="/admintasks"
            style={{ textDecoration: "none", color: "black" }}
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
      <div className="dashboard-cards">
        {user && (user.isPM ? projectManagerLinks : userLinks)}
      </div>
    </>
  );
};
export default DashboardScreen;
