import styled from "styled-components";

import { ContainerProps } from "./types";

export const Container = styled.div<ContainerProps>`
  width: 31%;
  height: 150px;
  margin: 15px 0;
  padding: 10px 20px;

  position: relative;
  overflow: hidden;

  border-radius: 10px;
  background: ${({ theme, cardColor }) => theme.colors.status[cardColor]};
  transition: all ${({ theme }) => theme.animation.duration.normal};
  box-shadow: ${({ theme }) => theme.shadows.elevation.md}
    ${({ theme }) => theme.shadows.colors.light};

  &:hover {
    transform: scale(1.01);
    box-shadow: ${({ theme }) => theme.shadows.elevation.lg}
      ${({ theme }) => theme.shadows.colors.light};

    img {
      right: -20px;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  opacity: 0.3;

  height: 90%;
  transition: ${({ theme }) => theme.animation.duration.slower};

  top: 10px;
  right: -80px;
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
