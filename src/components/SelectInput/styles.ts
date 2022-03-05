import styled from "styled-components";

export const Container = styled.div``;

export const Select = styled.select`
  cursor: pointer;

  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);

  padding: 7px 10px;
`;

export const Option = styled.option``;
