import React from "react";
import { Container, Content } from "./styles";

import ContentHeader from "components/ContentHeader";
import Head from "components/Head";
import RegisterReservationForm from "components/Forms/RegisterReservationForm";

import useLocalStorage from "hooks/useLocalStorage";
import useAuthContext from "hooks/useAuthContext";

import { useTheme } from "styled-components";

const Register: React.FC = () => {
  const theme = useTheme();

  const { logout } = useAuthContext();

  const token = useLocalStorage.get("token");

  if (!token) {
    logout();
    window.location.href = "/";
    return null;
  }

  return (
    <>
      <Head title="Cadastrar" description="Cadastre novas reservas" />
      <Container>
        <ContentHeader title="Cadastrar" lineColor={theme.colors.main} />
        <Content>
          <RegisterReservationForm />
        </Content>
      </Container>
    </>
  );
};

export default Register;
