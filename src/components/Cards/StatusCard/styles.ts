import styled from "styled-components";

import { ContainerProps } from "./types";

export const Container = styled.div<ContainerProps>`
  width: 31%;
  height: 150px;
  margin: 15px 0;
  padding: 10px 20px;

  background: ${({ theme, cardColor }) => theme.colors.status[cardColor]};
  border-radius: 10px;

  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  opacity: 0.3;

  height: 90%;

  top: 10px;
  right: -20px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

export const Amount = styled.h1``;

export const Label = styled.small`
  font-size: 12px;

  position: absolute;

  bottom: 10px;
`;
