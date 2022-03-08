import React, { useState } from "react";

import Input from "components/Input";
import Button from "components/Button";
import Head from "components/Head";

import * as S from "./styles";
import logo from "assets/logo.svg";

import useAuthContext from "hooks/useAuthContext";

const SignIn: React.FC = () => {
  const { signIn } = useAuthContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <Head title="Entrar" description="Entre com a sua conta" />
      <S.Container>
        <S.Header>
          <S.Logo src={logo} alt="Logo Reserve" />
          <S.Title>Reserve.io</S.Title>
        </S.Header>
        <S.Form onSubmit={() => signIn(email, password)}>
          <S.FormTitle>Entrar</S.FormTitle>
          <S.InputContainer>
            <Input
              type="email"
              placeholder="E-mail"
              onChange={({ target }) => setEmail(target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Senha"
              required
              onChange={({ target }) => setPassword(target.value)}
            />
          </S.InputContainer>
          <Button type="submit">Acessar</Button>
        </S.Form>
      </S.Container>
    </>
  );
};

export default SignIn;
