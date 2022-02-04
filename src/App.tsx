import React from "react";

import GlobalStyles from "./styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <h1>Reserve.io</h1>
    </ThemeProvider>
  );
};

export default App;
