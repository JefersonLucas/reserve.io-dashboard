import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./app.routes";
import Auth from "./auth.routes";

import useAuthContext from "hooks/useAuthContext";
import useLocalStorage from "hooks/useLocalStorage";

const Routes: React.FC = () => {
  const token = useLocalStorage.get("token");
  const { isLogged } = useAuthContext();

  return (
    <BrowserRouter>{isLogged || token ? <App /> : <Auth />}</BrowserRouter>
  );
};

export default Routes;
