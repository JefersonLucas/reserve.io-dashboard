import React, { createContext, useState } from "react";

import { AuthContextProps } from "@types";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@reserve.io:logged");

    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === "administrador@email.com" && password === "123") {
      localStorage.setItem("@reserve.io:logged", "true");
      setIsLoggedIn(true);
    } else {
      alert("Senha ou usuário inválido!");
    }
  };

  const logout = () => {
    localStorage.removeItem("@reserve.io:logged");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
