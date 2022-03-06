import React from "react";
import { Container, Content } from "./styles";

import ContentHeader from "components/ContentHeader";

import { useTheme } from "styled-components";

const Register: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <ContentHeader title="Cadastrar" lineColor={theme.colors.main} />
      <Content />
    </Container>
  );
};

export default Register;
