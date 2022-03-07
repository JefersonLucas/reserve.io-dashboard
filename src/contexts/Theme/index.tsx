import React, { createContext, useState } from "react";

import { Theme } from "@types";

import { ThemeContextProps } from "./types";

import dark from "styles/themes/dark";
import light from "styles/themes/light";

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const themeStorage = localStorage.getItem("@reserve.io:theme");

    if (themeStorage) {
      return JSON.parse(themeStorage);
    } else {
      return dark;
    }
  });

  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
      localStorage.setItem("@reserve.io:theme", JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem("@reserve.io:theme", JSON.stringify(dark));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
