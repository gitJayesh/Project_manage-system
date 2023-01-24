import React from "react";
import { Container } from "react-bootstrap";
const LandingScreenHome = () => {
  return (
    <div className="bg-dark landing-page place-center">
      {/* <Container> */}
      <div className="row py-lg-5  landing-content">
        <div className="col-lg-6  col-md-8 mx-auto ">
          {/* <p className="fw-bolder fs-4">Project Management System</p> */}
          <h1 className="teext">Project Management System</h1>
          <div className="underline"></div>
          <p className="lead">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p>
            <a href="#" class="btn btn-primary my-2 mx-2">
              Sign up
            </a>
            <a href="#" class="btn btn-secondary my-2">
              Sign In
            </a>
          </p>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default LandingScreenHome;
