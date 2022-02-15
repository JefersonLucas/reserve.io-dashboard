import React from "react";

import { Container, TitleContainer, Title, Controllers } from "./styles";

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Dashboard</Title>
      </TitleContainer>
      <Controllers>
        <button type="button">2021</button>
        <button type="button">2021</button>
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
