import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import { AuthChecker } from "./RoutesProtection/AuthChecker";
import { Clients } from "../Components/Administration/Clients/Clients";
import { Materials } from "../Components/Administration/Inventory/Materials/Materials";
import { Providers } from "../Components/Administration/Inventory/Providers/Providers";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/Dashboard-App", element: <Dashboard /> },
  { path: "/Clients", element: <Clients /> },
  { path: "/Materials", element: <Materials /> },
  { path: "/Providers", element: <Providers /> },
  {
    path: "/Dashboard-app",
    element: (
      <AuthChecker>
        <Dashboard />
        <Clients />
        <Materials />
        <Providers />
      </AuthChecker>
    ),
  },
];

export const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
