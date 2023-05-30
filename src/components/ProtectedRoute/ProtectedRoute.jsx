import React from 'react';
import {
  Navigate,
} from "react-router-dom";

import { CurrentUserContext } from '../../context/CurrentUserContext';

const ProtectedRoute = (props) => {
  const { children } = props;
  const currentUser = React.useContext(CurrentUserContext);
  return currentUser ? children : <Navigate to="/" />
};

export default ProtectedRoute;