import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button onClick={goBack} className="back-button btn btn-dark mt-3">
        <i className="fa-solid fa-arrow-left" style={{ color: "#fff" }}></i>{" "}
        Back
      </button>
    </>
  );
};

export default BackButton;
