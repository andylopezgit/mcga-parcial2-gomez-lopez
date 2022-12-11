import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../screems/LoginView/LoginView";

const RequireAuth = ({ isLogged, children }) => {
  if (isLogged) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default RequireAuth;
