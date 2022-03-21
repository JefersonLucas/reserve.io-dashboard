import styled from "styled-components";

import { ButtonProps } from "./types";

export const Button = styled.button<ButtonProps>`
  font-size: 18px;
  font-weight: 500;

  background: none;
  color: ${({ theme }) => theme.colors.text.white};

  &::after {
    content: "";
    display: block;
    width: 54px;
    margin: 5px auto;
    transition: 0.3s;
    border-bottom: 10px solid
      ${({ theme, status }) =>
        status === "waiting"
          ? theme.colors.status.warning
          : status === "using"
          ? theme.colors.status.success
          : theme.colors.status.danger};

    box-shadow: ${({ active, theme, status }) =>
      active &&
      `${theme.shadows.elevation.sm} ${
        status === "waiting"
          ? theme.colors.status.warning
          : status === "using"
          ? theme.colors.status.success
          : theme.colors.status.danger
      }`};
  }

  &:hover:after {
    box-shadow: 0 0 0.7em
      ${({ theme, status }) =>
        status === "waiting"
          ? theme.colors.status.warning
          : status === "using"
          ? theme.colors.status.success
          : theme.colors.status.danger};
  }
`;
