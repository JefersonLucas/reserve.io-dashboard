import React from "react";

import Input from "components/Input";
import Button from "components/Button";
import Head from "components/Head";

import * as S from "./styles";
import logo from "assets/logo.svg";

const SignIn: React.FC = () => {
  return (
    <>
      <Head title="Entrar" description="Entre com a sua conta" />
      <S.Container>
        <S.Header>
          <S.Logo src={logo} alt="Logo Reserve" />
          <S.Title>Reserve.io</S.Title>
        </S.Header>
        <S.Form>
          <S.FormTitle>Entrar</S.FormTitle>
          <S.InputContainer>
            <Input type="email" placeholder="E-mail" required />
            <Input type="senha" placeholder="Senha" required />
          </S.InputContainer>
          <Button type="submit">Acessar</Button>
        </S.Form>
      </S.Container>
    </>
  );
};

export default SignIn;
