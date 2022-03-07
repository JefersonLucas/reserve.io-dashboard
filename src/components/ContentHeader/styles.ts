import styled from "styled-components";
import { TitleProps } from "./types";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 25px;
`;

export const TitleContainer = styled.div``;

export const Title = styled.h1<TitleProps>`
  color: ${({ theme }) => theme.colors.text.white};

  &::after {
    content: "";
    display: block;

    background-color: ${({ lineColor }) => lineColor};
    border-radius: 2px;

    height: 10px;
    width: 60%;
  }
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
