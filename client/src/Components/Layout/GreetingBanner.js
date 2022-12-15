import React, { useContext } from "react";
import AuthContext from "../../Context/auth/authContext";

const GreetingBanner = () => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;

  return (
    <>
      <div className="greeting-banner place-center">
        {isAuthenticated ? (
          <h2>
            Hello <span style={{ color: "blue" }}>{user && user.name}</span>,
            Welcome To The Dashboard!
          </h2>
        ) : (
          <>
            <h1>
              Hello , Welcome to the <span style={{ color: "#bd0e0e" }}>P</span>
              <span style={{ color: "#6900a7" }}>M</span>
              <span style={{ color: "#00a90b" }}>S</span> Dashboard{" "}
            </h1>
            <h4>
              <em>Everything you need for a happy and productive Engineer. </em>
            </h4>
          </>
        )}
      </div>
    </>
  );
};

export default GreetingBanner;
