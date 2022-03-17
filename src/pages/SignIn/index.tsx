import React from "react";

import Head from "components/Head";
import SignInForm from "components/Forms/SignInForm";

import * as S from "./styles";
import logo from "assets/logo.svg";

const SignIn: React.FC = () => (
  <>
    <Head title="Entrar" description="Entre com a sua conta" />
    <S.Container>
      <S.Header>
        <S.Logo src={logo} alt="Logo Reserve" />
        <S.Title>Reserve.io</S.Title>
      </S.Header>
      <SignInForm />
    </S.Container>
  </>
);

export default SignIn;
