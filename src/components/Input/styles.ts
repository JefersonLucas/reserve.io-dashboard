import styled from "styled-components";

export const Container = styled.input`
  width: 100%;

  padding: 12px 14px;

  border-radius: 4px;
  transition: ${({ theme }) => theme.animation.duration.normal};

  color: ${({ theme }) => theme.colors.background.black};
  background-color: ${({ theme }) =>
    theme.title === "dark"
      ? theme.colors.background.white
      : theme.colors.background.primary};
  border: 1px solid transparent;

  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.main};
    box-shadow: 0 0 3px 1px ${({ theme }) => theme.colors.main};
  }
`;
