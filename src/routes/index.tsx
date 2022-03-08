import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./app.routes";
import Auth from "./auth.routes";

import useAuthContext from "hooks/useAuthContext";

const Routes: React.FC = () => {
  const { isLoggedIn } = useAuthContext();

  return <BrowserRouter>{isLoggedIn ? <App /> : <Auth />}</BrowserRouter>;
};

export default Routes;
