import React, { useContext, useState, useEffect } from "react";
// import "../../style/style1.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/auth/authContext";
import loginGIF from "../img/login.gif";
import { Container, Card, Row, Col } from "react-bootstrap";
const Login = () => {
  const authContext = useContext(AuthContext);

  const { login, userInfo, isAuthenticated, loading } = authContext;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setError(true);
    }
    console.log(email, password);
    login(email, password);
    console.log(userInfo);
  };

  return (
    <>
      <div className="auth-page">
        {/* <div className="auth-page"> */}
        {loading && <p>Loading</p>}
        <Container>
          <div
            style={{ height: "80vh" }}
            className="d-flex justify-content-center align-items-center "
          >
            <Row>
              <Card style={{ width: "100%", height: "100%" }}>
                <Row xs={1} md={2}>
                  <Col className="d-flex justify-content-center align-items-center">
                    {/* <div className="login-card-gif"> */}
                    <img
                      src={loginGIF}
                      alt="login-gif"
                      style={{ height: "100%" }}
                      className="img-fluid"
                    />
                    {/* </div> */}
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <form onSubmit={onSubmit}>
                      <div className="login-head place-center">
                        <h3>
                          User <span style={{ color: "#377dff" }}>Login</span>
                        </h3>
                      </div>
                      <div className="form-container1">
                        {error && email.length <= 0 ? (
                          <label style={errostyle}>* required</label>
                        ) : (
                          ""
                        )}
                        <input
                          type="email"
                          className={error ? "input" : "bg-dark errorInput"}
                          placeholder="Email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        {error && password.length <= 0 ? (
                          <label style={errostyle}>* required</label>
                        ) : (
                          ""
                        )}
                        <input
                          type="password"
                          className="input"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                          // onClick={onClick}
                          type="submit"
                          className="input input-btn"
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
    </>
  );
};

export default Login;

const errostyle = {
  color: "red",
};
