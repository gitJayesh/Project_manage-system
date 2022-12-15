import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarGuest from "../Layout/NavBarGuest";

import registerGIF from "../img/38435-register.gif";
import AuthContext from "../../Context/auth/authContext";
import { Container, Card, Row, Col, Form } from "react-bootstrap";

const Register = () => {
  const authContext = useContext(AuthContext);

  const { register, userInfo, loading, isAuthenticated } = authContext;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isPM, setIsPM] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, isPM, password);
    register(name, email, phone, isPM, password);
  };

  return (
    <>
      <Container>
        <div
          style={{ height: "80vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Row>
            <Card>
              <Row xs={1} md={2}>
                <Col className="d-flex justify-content-center align-items-center">
                  <img
                    src={registerGIF}
                    alt="login-gif"
                    style={{ height: "100%" }}
                    className="img-fluid"
                  />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <form onSubmit={onSubmit}>
                    <div className="register-head">
                      user <span style={{ color: "#377dff" }}>Register</span>
                    </div>
                    <div className="form-container1">
                      <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ margin: "5px" }}
                      />
                      <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ margin: "5px" }}
                      />
                      <input
                        type="text"
                        className="input"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{ margin: "5px" }}
                      />
                      {/* <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Project Manager"
                        checked={manager}
                        onChange={(e) => setManager(e.target.checked)}
                      /> */}
                      <input
                        type="checkbox"
                        name="isPM"
                        checked={isPM}
                        onChange={(e) => setIsPM(e.target.checked)}
                      />
                      <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ margin: "5px" }}
                      />
                      <input
                        type="password"
                        className="input"
                        placeholder="confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setconfirmPassword(e.target.value)}
                        style={{ margin: "5px" }}
                      />

                      <input
                        type="submit"
                        className="input input-btn"
                        style={{ margin: "5px" }}
                      />
                    </div>
                  </form>
                </Col>
              </Row>
            </Card>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Register;

const loginLink = {
  color: "#111",
  textAllign: "center",
};

{
  /* <div className="register-page">
        {/* <NavBarGuest /> 
        <secttion className="register-card-section">
          <div className="register-card">
            <div className="login-card-gif">
              <img src={registerGIF} alt="login-gif" />
            </div>
            <div className="login-card-main">
              <form onSubmit={onSubmit}>
                <div className="register-head">
                  user <span style={{ color: "#377dff" }}>Register</span>
                </div>
                <div className="form-container1">
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    className="input"
                    placeholder="confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                  />
                  <input type="submit" className="input input-btn" />
                </div>
              </form>
              <p style={loginLink}>
                Already a User?{" "}
                <Link to="/register" style={{ color: "#377dff" }}>
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </secttion>
      </div> */
}
