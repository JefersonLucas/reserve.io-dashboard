import React from "react";

import Routes from "routes";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import dark from "styles/themes/dark";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
