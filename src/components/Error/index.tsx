import React from "react";

import { Container, Message } from "./styles";

interface ErrorProps {
  error?: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <Container>
      <h1>OOPS!!!</h1>
      <p>Aparentemente houve algum erro! 😵</p>
      {error && <Message>{error}</Message>}
    </Container>
  );
};

export default Error;
