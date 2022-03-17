import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./app.routes";
import Auth from "./auth.routes";

import useAuthContext from "hooks/useAuthContext";

const Routes: React.FC = () => {
  const { isLogged } = useAuthContext();

  return <BrowserRouter>{isLogged ? <App /> : <Auth />}</BrowserRouter>;
};

export default Routes;
