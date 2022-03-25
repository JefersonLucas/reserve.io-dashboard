import styled, { keyframes } from "styled-components";

import { CloseProps } from "./types";

const scaleUp = keyframes`
  to {
    opacity: initial;
    transform: initial;
    border: 10px solid transparent;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const Box = styled.div`
  position: relative;

  width: 80%;
  margin: 0 auto;
  padding: 20px 30px;

  cursor: auto;
  box-sizing: border-box;
  border: 15px solid transparent;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.white};

  opacity: 0;
  transform: scale(0.8);
  animation: ${scaleUp} ${({ theme }) => theme.animation.duration.slow} forwards;
`;

export const Close = styled.div<CloseProps>`
  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.main};
    }
  }

  > svg {
    width: 40px;
    height: 40px;
    transition: ${({ theme }) => theme.animation.duration.normal};
    color: ${({ theme }) => theme.colors.text.white};
  }
`;

export const Content = styled.div``;

export const Title = styled.h2`
  font-size: 30px;
`;
