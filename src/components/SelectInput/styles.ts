import styled from "styled-components";

export const Container = styled.div``;

export const Select = styled.select`
  cursor: pointer;

  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text.white};
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  box-shadow: ${({ theme }) => theme.shadows.elevation.md}
    ${({ theme }) => theme.shadows.colors.light};

  padding: 7px 10px;
`;

export const Option = styled.option``;
