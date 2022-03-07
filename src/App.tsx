import React from "react";

import Routes from "routes";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";

import useThemeContext from "hooks/useThemeContext";

const App: React.FC = () => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
