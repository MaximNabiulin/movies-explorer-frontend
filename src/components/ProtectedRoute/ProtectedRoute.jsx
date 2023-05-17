import React from 'react';
import {
  Navigate,
} from "react-router-dom";

const ProtectedRoute = (props) => {
  const {loggedIn, children} = props;
  return loggedIn ? children : <Navigate to="/movies" />
};

export default ProtectedRoute;