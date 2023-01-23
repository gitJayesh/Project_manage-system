import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import registerGIF from "../img/38435-register.gif";
import AuthContext from "../../Context/auth/authContext";
import { Container, Card, Row, Col } from "react-bootstrap";

const Register = () => {
  const authContext = useContext(AuthContext);

  const { register, loading, isAuthenticated } = authContext;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isPM, setIsPM] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      isPM.length === 0 ||
      password.length === 0
    ) {
      setError(true);
    }
    console.log(name, email, phone, isPM, password);
    register(name, email, phone, isPM, password);
  };

  return (
    <div className="auth-page">
      {loading && <p>Loading</p>}

      <Container>
        <div
          style={{ height: "80vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Row>
            <Card style={{ width: "100%", height: "100%" }}>
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
                      {error && name.length <= 0 ? (
                        <label>* required</label>
                      ) : (
                        ""
                      )}
                      <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ margin: "5px" }}
                      />
                      {error && email.length <= 0 ? (
                        <label>* required</label>
                      ) : (
                        ""
                      )}
                      <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ margin: "5px" }}
                      />
                      {error && phone.length <= 0 ? (
                        <label>* required</label>
                      ) : (
                        ""
                      )}
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
                      {error && password.length <= 0 ? (
                        <label>* required</label>
                      ) : (
                        ""
                      )}
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
                      <div style={{ display: "flex" }}>
                        <input
                          style={{ marginRight: "5px" }}
                          type="checkbox"
                          name="isPM"
                          checked={isPM}
                          onChange={(e) => setIsPM(e.target.checked)}
                        />
                        <label>Project Manager</label>
                      </div>

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
    </div>
  );
};

export default Register;
