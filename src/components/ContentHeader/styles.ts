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
  color: ${({ theme }) => theme.colors.white};

  &::after {
    content: "";
    display: block;

    border-bottom: 10px solid ${(props) => props.lineColor};

    width: 55px;
  }
`;

export const Controllers = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
