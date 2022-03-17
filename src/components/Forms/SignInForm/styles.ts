import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr repeat(6, 0.5fr);
  grid-template-columns: 1fr;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background.tertiary};

  height: 360px;
  width: 360px;
  padding: 35px 50px;
  border-radius: 10px;
`;

export const FormTitle = styled.h1`
  &::after {
    content: "";
    display: block;

    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 2px;

    height: 10px;
    width: 25%;
  }
`;

export const Error = styled.small`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.status.danger};
`;
