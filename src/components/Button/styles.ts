import styled, { keyframes } from "styled-components";
import { ButtonProps } from "./types";

const motion = keyframes`
  50% {box-shadow: 0px 0px 3px 2px #BFBFBF}
`;

export const Container = styled.button<ButtonProps>`
  width: 100%;

  padding: 10px;

  font-weight: bold;
  font-size: 18px;
  transition: 0.3s;

  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text.white};
  background-color: ${({ theme }) => theme.colors.main};
  border: 1px solid transparent;
  transition: ${({ theme }) => theme.animation.duration.normal};

  &:focus,
  &:hover {
    animation: ${motion} 3s infinite;
    border: 1px solid ${({ theme }) => theme.colors.main};
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.colors.main};
  }

  &:disabled {
    opacity: ${({ disabled }) => (disabled ? "0.5" : "0")};
    cursor: ${({ disabled }) => (disabled ? "progress" : "pointer")};
  }
`;
