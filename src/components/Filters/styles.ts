import styled from "styled-components";

import { ButtonProps } from "./types";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

  width: 100%;
  margin: 30px 0;
`;

export const Button = styled.button<ButtonProps>`
  font-size: 18px;
  font-weight: 500;

  background: none;
  color: ${({ theme }) => theme.colors.white};

  &::after {
    content: "";
    display: block;
    width: 54px;
    margin: 5px auto;
    transition: 0.3s;
    border-bottom: 10px solid
      ${({ theme, status }) =>
        status === "waiting"
          ? theme.colors.warning
          : status === "using"
          ? theme.colors.success
          : theme.colors.danger};

    box-shadow: ${({ active, theme, status }) =>
      active &&
      `0 0 0.7em ${
        status === "waiting"
          ? theme.colors.warning
          : status === "using"
          ? theme.colors.success
          : theme.colors.danger
      }`};
  }

  &:hover:after {
    box-shadow: 0 0 0.7em
      ${({ theme, status }) =>
        status === "waiting"
          ? theme.colors.warning
          : status === "using"
          ? theme.colors.success
          : theme.colors.danger};
  }
`;
