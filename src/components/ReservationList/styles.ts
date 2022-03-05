import styled from "styled-components";

import { TagProps } from "./types";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  margin: 10px 0;
  padding: 10px 12px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  box-shadow: 1px 1px 2px 2px ${({ theme }) => theme.colors.shadows.light};

  &:hover {
    transform: scale(1.01);
    box-shadow: 1px 1px 5px 5px ${({ theme }) => theme.colors.shadows.light};

    i {
      height: 100%;

      border-top-right-radius: none;
      border-bottom-right-radius: none;
    }
  }
`;

export const Tag = styled.i<TagProps>`
  position: absolute;
  left: -1px;

  width: 10px;
  height: 60%;

  transition: 0.3s;

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
