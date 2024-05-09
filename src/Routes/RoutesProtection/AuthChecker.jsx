// AuthChecker.js
import React from "react";
import { Navigate, Route } from "react-router-dom";

export const AuthChecker = ({ element: Component,...rest }) => {
  const sessionPayload = JSON.parse(localStorage.getItem("sessionPayloadInfo"));

  const isAuthenticated =!!sessionPayload && sessionPayload.auth_key === "USER_AUTHORIZED" && sessionPayload.payload!== null;

  return isAuthenticated? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/login" />
  );
};
