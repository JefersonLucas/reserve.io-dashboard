import styled from "styled-components";
import { StatusProps } from "./types";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  margin: 10px 0;
  padding: 10px 12px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  &:hover {
    transform: translateX(10px);
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const Tag = styled.div<StatusProps>`
  position: absolute;
  left: 0;

  width: 10px;
  height: 60%;

  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;

  background-color: ${({ status, theme }) =>
    status === "waiting"
      ? theme.colors.warning
      : status === "using"
      ? theme.colors.success
      : theme.colors.danger};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 10px;
`;

export const Title = styled.span`
  font-weight: bold;
`;
export const Subtitle = styled.small``;
export const Place = styled.h3`
  padding-right: 20px;
`;