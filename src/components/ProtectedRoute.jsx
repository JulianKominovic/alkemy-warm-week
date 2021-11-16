import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, path, ...restOfProps }) => {
  const isAuthenticated =
    localStorage.getItem("token") === process.env.REACT_APP_SECRET_TOKEN;
  return (
    <Route
      exact
      path={path}
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component props={props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
