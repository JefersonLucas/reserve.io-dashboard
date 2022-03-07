import styled from "styled-components";

import { TagProps } from "./types";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;
  cursor: pointer;
  transition: color, transform ${({ theme }) => theme.animation.duration.normal};
  position: relative;
  overflow: hidden;

  margin: 10px 0;
  padding: 10px 12px;

  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.elevation.md}
    ${({ theme }) => theme.shadows.colors.light};

  &:hover {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    box-shadow: ${({ theme }) => theme.shadows.elevation.lg}
      ${({ theme }) => theme.shadows.colors.light};

    i {
      height: 100%;

      border-top-right-radius: none;
      border-bottom-right-radius: none;
    }

    small,
    h3 {
      color: ${({ theme }) => theme.colors.text.white};
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
      ? theme.colors.status.warning
      : status === "using"
      ? theme.colors.status.success
      : theme.colors.status.danger};
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

export const Subtitle = styled.small`
  transition: ${({ theme }) => theme.animation.duration.normal};

  color: ${({ theme }) => theme.colors.text.gray};
`;

export const Place = styled.h3`
  transition: ${({ theme }) => theme.animation.duration.normal};

  color: ${({ theme }) => theme.colors.text.gray};

  padding-right: 20px;
`;
