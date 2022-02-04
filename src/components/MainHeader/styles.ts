import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
`;
