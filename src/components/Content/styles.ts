import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};

  padding: 25px;
`;
