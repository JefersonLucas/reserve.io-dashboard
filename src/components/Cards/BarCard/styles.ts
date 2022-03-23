import styled from "styled-components";
import { PercentProps } from "./types";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 48%;
  height: 260px;
  padding: 10px 20px;
  margin: 15px 0;

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

export const Title = styled.h2``;

export const SideLeft = styled.aside`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const SideRight = styled.main``;

export const LegendContainer = styled.ul`
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

  width: 45px;
  height: 45px;

  background-color: ${({ color }) => color};
  border-radius: 5px;
`;

export const Status = styled.div``;
