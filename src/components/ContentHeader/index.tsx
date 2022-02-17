import React from "react";

import { Container, TitleContainer, Title, Controllers } from "./styles";

import { ContentHeaderProps } from "./types";

const ContentHeader: React.FC<ContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <TitleContainer>
        <Title lineColor={lineColor}>{title}</Title>
      </TitleContainer>
      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader;
