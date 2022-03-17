import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  h1 {
    user-select: none;
    font-size: 4.5rem;
    line-height: 1.125;
  }

  p {
    font-size: 1.5rem;
  }
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.status.danger};
  margin-top: 5px;
  padding-left: 5px;
`;
