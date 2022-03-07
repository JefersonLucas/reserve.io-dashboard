import styled from "styled-components";

export const Container = styled.div``;

export const Select = styled.select`
  cursor: pointer;

  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text.white};
  border: 1px solid transparent;

  background-color: ${({ theme }) => theme.colors.background.tertiary};
  box-shadow: ${({ theme }) => theme.shadows.elevation.md}
    ${({ theme }) => theme.shadows.colors.light};
  transition: 0.3s;

  padding: 7px 10px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.main};
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.colors.main};
  }
`;

export const Option = styled.option``;
