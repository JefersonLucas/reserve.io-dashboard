import styled from "styled-components";

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

export const Title = styled.h2``;

export const LineContainer = styled.div`
  width: 100%;
  height: 90%;
`;
