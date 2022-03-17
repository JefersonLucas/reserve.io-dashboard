import React, { FormEvent } from "react";

import Input from "components/Input";
import Button from "components/Button";

import useAuthContext from "hooks/useAuthContext";
import useForm from "hooks/useForm";

// import { POST_LOGIN, GET_USER } from "api";

import { Error, Form, FormTitle } from "./styles";

const SigInForm: React.FC = () => {
  const { login, error, loading } = useAuthContext();

  const email = useForm("email");
  const password = useForm("none");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      login(email.value, password.value);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Entrar</FormTitle>
      <Input type="email" placeholder="E-mail" required {...email} />
      <Input type="password" placeholder="Senha" required {...password} />
      {loading ? (
        <Button type="submit" disabled>
          Carregando...
        </Button>
      ) : (
        <Button type="submit">Acessar</Button>
      )}
      {error && <Error>{error.replace("Error: ", "Erro: ")}</Error>}
    </Form>
  );
};

export default SigInForm;
