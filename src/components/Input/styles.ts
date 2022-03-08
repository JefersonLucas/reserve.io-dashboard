import styled from "styled-components";

export const Container = styled.input`
  width: 100%;

  padding: 12px 14px;

  border-radius: 4px;

  color: ${({ theme }) => theme.colors.text.black};
  background-color: ${({ theme }) => theme.colors.text.white};
  border: 1px solid transparent;

  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.main};
    box-shadow: 0 0 3px 1px ${({ theme }) => theme.colors.main};
  }
`;
