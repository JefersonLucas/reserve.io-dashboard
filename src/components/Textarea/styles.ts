import styled from "styled-components";
import { TextareaProps } from "./types";

export const Container = styled.textarea<TextareaProps>`
  width: 100%;

  padding: 12px 14px;

  border-radius: 4px;
  transition: ${({ theme }) => theme.animation.duration.normal};

  caret-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.background.black};
  background-color: ${({ theme }) =>
    theme.title === "dark"
      ? theme.colors.background.white
      : theme.colors.background.primary};
  border: 1px solid transparent;

  &:focus,
  &:hover {
    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.colors.status.danger : theme.colors.main};
    box-shadow: 0 0 3px 1px
      ${({ theme, error }) =>
        error ? theme.colors.status.danger : theme.colors.main};
  }

  &::selection {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) =>
      theme.title === "dark"
        ? theme.colors.text.white
        : theme.colors.text.black};
  }
`;

export const Error = styled.small`
  color: ${({ theme }) => theme.colors.status.danger};
  margin-top: 5px;
  padding-left: 5px;
`;
