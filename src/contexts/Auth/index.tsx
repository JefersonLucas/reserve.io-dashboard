/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useState, useEffect } from "react";

import { User } from "@types";
import { AuthContextProps } from "./types";
import { GET_USER, POST_LOGIN } from "api";

import useLocalStorage from "hooks/useLocalStorage";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isLogged, setIsLogged] = useState<boolean>(() => {
    const logged = useLocalStorage.get("logged");

    return !!logged;
  });

  useEffect(() => {
    async function autoLogin() {
      const token = useLocalStorage.get("token");
      const id = useLocalStorage.get("id");

      if (token && id) {
        try {
          setError("");
          setLoading(true);

          const { url, options } = GET_USER(id, token);

          const response = await fetch(url, options);

          if (!response.ok) {
            throw new Error(response.statusText);
          }

          const data = await response.json();

          setData(data);
        } catch (error) {
          logout();
          setError(`${error}`);
          setIsLogged(false);
        } finally {
          setLoading(false);
        }
      }
    }

    autoLogin();
  }, []);

  async function getUser(id: string, token: string) {
    const { url, options } = GET_USER(id, token);

    const response = await fetch(url, options);
    const data = await response.json();

    setData(data);
    setIsLogged(true);
  }

  async function login(email: string, password: string) {
    try {
      setLoading(true);
      const { url, options } = POST_LOGIN({ email, password });

      const response = await fetch(url, options);

      const { id, token, error } = await response.json();

      if (!response.ok) {
        throw new Error(error);
      }

      useLocalStorage.set("token", token);
      useLocalStorage.set("id", id);

      await getUser(id, token);

      useLocalStorage.set("logged", "true");

      setIsLogged(true);
    } catch (error) {
      logout();
      setError(`${error}`);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  const logout = () => {
    useLocalStorage.remove("logged");
    useLocalStorage.remove("token");
    useLocalStorage.remove("id");
    setIsLogged(false);
    setData(null);
    setError("");
    setLoading(false);
  };
  return (
    <AuthContext.Provider
      value={{
        data,
        loading,
        isLogged,
        login,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
