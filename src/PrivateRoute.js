import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
function PrivateRoute({ path, ...props }) {
  const { isLoggedIn } = useSelector((state) => state.User);

  return isLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/landing" />
  );
}

export default PrivateRoute;
