import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 25px;
`;

export const TitleContainer = styled.div``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};

  &::after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.main};
  }
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
`;
