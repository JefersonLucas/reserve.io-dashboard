import styled from "styled-components";

import { PercentProps } from "./types";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: 340px;
  margin: 15px 0;
  padding: 10px 20px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  transition: transform ${({ theme }) => theme.animation.duration.normal};
  box-shadow: ${({ theme }) => theme.shadows.elevation.md}
    ${({ theme }) => theme.shadows.colors.light};

  &:hover {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    box-shadow: ${({ theme }) => theme.shadows.elevation.lg}
      ${({ theme }) => theme.shadows.colors.light};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5px;
`;

export const Title = styled.h2``;

export const LegendContainer = styled.ul`
  display: flex;
  gap: 20px;

  list-style: none;
`;

export const Legend = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 10px 0;
`;

export const Percent = styled.div<PercentProps>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  background-color: ${({ color }) => color};
  border-radius: 5px;
`;

export const Status = styled.div``;

export const LineContainer = styled.div`
  width: 100%;
  height: 80%;
`;
