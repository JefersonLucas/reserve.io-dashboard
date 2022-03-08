import styled from "styled-components";

export const Head = styled.head``;
export const TitleHTML = styled.title``;

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  user-select: none;

  height: 100vh;

  color: ${({ theme }) => theme.colors.text.white};
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 30px;
  padding-left: 20px;
`;

export const Logo = styled.img`
  display: block;

  width: 50px;
  height: 50px;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background.tertiary};

  height: 350px;
  width: 350px;
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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
