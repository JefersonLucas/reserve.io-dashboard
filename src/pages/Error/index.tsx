import React from "react";
import { Container, Content } from "./styles";

import ContentHeader from "components/ContentHeader";

import { useTheme } from "styled-components";
import { useLocation } from "react-router-dom";

const Error: React.FC = () => {
  const theme = useTheme();
  const { pathname } = useLocation();

  return (
    <Container>
      <ContentHeader title="Erro 404" lineColor={theme.colors.status.danger} />
      <Content>Página "{pathname}" não encontrada!</Content>
    </Container>
  );
};

export default Error;
