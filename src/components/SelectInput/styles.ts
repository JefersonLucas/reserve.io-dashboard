import styled from "styled-components";

export const Container = styled.div``;

export const Select = styled.select`
  cursor: pointer;

  border-radius: 2px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};

  padding: 7px 10px;
`;

export const Option = styled.option``;
