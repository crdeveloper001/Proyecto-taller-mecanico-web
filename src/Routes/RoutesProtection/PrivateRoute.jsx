import React from "react";
import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ element: Element, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      element={(props) =>
        isLoggedIn ? (
          <Element {...props} />
        ) : (
          <Navigate to="/" replace />
        )
      }
    />
  );
};

