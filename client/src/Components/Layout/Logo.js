import React from "react";
import { Link } from "react-router-dom";
import "../../style/style.css";

const Logo = () => {
  return (
    <div className="logo">
      <h1>
        <Link to="/" className="logo-link">
          <span style={logo1}>P</span>
          <span style={logo2}>M</span>
          <span style={logo3}>S</span>
        </Link>
      </h1>
    </div>
  );
};

export default Logo;

const logo = {
  height: "60px",
  width: "60px",
  // background: "blue",
};

const iStyle = {
  color: "#2076ff",
  display: "block",
};

const logo1 = {
  color: "#bd0e0e",
  fontSize: "1.8rem",
};

const logo2 = {
  color: "#6900a7",
  fontSize: "1.8rem",
};

const logo3 = {
  color: "#ffe600",
  fontSize: "1.8rem",
};
