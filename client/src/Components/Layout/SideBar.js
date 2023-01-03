import React, { useState, useContext, Fragment, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "../../Context/auth/authContext";
import { Link } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";

function SideBar() {
  const authContext = useContext(AuthContext);
  const { logout, user, loadUser } = authContext;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(user);

  const onClick = () => {
    console.log("logout");
    logout();
  };
  const close = () => {
    // console.log("logout");
    setShow(false);
  };

  const authLinks = (
    <Fragment>
      <ul className="side-bar-links">
        <li>
          <i className="text-gray fa-solid fa-house mxr-1"></i>
          <Link to="/register" onClick={close}>
            Register
          </Link>
        </li>
        <li>
          <i className="text-gray fa-sharp fa-solid fa-user mxr-1"></i>
          <Link to="/login" onClick={close}>
            Login
          </Link>
        </li>
      </ul>
    </Fragment>
  );

  const userLinks = (
    <Fragment>
      <ul className="side-bar-links">
        <li>
          <i className="text-gray fa-solid fa-house mxr-1"></i>
          <Link to="">Home</Link>
        </li>
        <li>
          <i className="text-gray fa-sharp fa-solid fa-user mxr-1"></i>
          <Link to="">Profile</Link>
        </li>
        <li>
          <i className="text-gray fa-solid fa-window-restore mxr-1"></i>
          <Link to="">Stories</Link>
        </li>
        <li>
          <i className="text-gray fa-solid fa-bars-progress mxr-1"></i>
          <Link to="">Tasks</Link>
        </li>
        <li onClick={onClick}>
          {/* <i className="text-gray fa-solid fa-people-group mxr-1"></i> */}
          <Link to="">Logout</Link>
        </li>
      </ul>
    </Fragment>
  );

  const projectManagerLinks = (
    <Fragment>
      <ul className="side-bar-links">
        <li>
          <i className="text-gray fa-solid fa-house mxr-1"></i>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <i className="text-gray fa-solid fa-user mxr-1"></i>
          <Link to="">Profile</Link>
        </li> */}
        <li>
          <i className="text-gray fa-solid fa-users mxr-1"></i>
          <Link to="">Users</Link>
        </li>
        <li onClick={onClick}>
          {/* <i className="text-gray fa-solid fa-people-group mxr-1"></i> */}
          <Link to="">Logout</Link>
        </li>
      </ul>
    </Fragment>
  );

  return (
    <>
      <button className="button-sidebar" onClick={handleShow}>
        <i className="fa-solid fa-bars"></i>
      </button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="logo">
              <h1>
                <i
                  className="fa-solid fa-diagram-project"
                  style={{ color: "#2076ff", display: "block" }}
                ></i>
                <span style={{ color: "#bd0e0e" }}>P</span>
                <span style={{ color: "#6900a7" }}>M</span>
                <span style={{ color: "#00a90b" }}>S</span>
              </h1>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {user ? (user.isPM ? projectManagerLinks : userLinks) : authLinks}
          {/* {console.log(user && user.isPM)} */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
