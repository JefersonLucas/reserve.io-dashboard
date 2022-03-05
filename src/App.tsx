import React from "react";

import Layout from "components/Layout";

import Reservations from "pages/Reservations";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import dark from "styles/themes/dark";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Reservations />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
