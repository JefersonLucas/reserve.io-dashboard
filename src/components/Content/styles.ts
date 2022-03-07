import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;

  color: ${({ theme }) => theme.colors.text.white};
  background-color: ${({ theme }) => theme.colors.background.primary};

  padding: 25px;

  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background.primary};
  }
`;
