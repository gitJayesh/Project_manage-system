import React from "react";
import ReactDOM from "react-dom/client";
import AuthState from "./Context/auth/AuthState";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>
  </React.StrictMode>
);
