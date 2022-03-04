import styled from "styled-components";
import { ContainerProps, TagProps } from "./types";

export const Container = styled.li<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  margin: 10px 0;
  padding: 10px 12px;

  background-color: ${({ color }) => color};
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
`;

export const Tag = styled.div<TagProps>`
  position: absolute;
  left: 0;

  width: 10px;
  height: 60%;

  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;

  background-color: ${({ color }) => color};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 10px;
`;

export const Title = styled.span``;
export const Subtitle = styled.small``;
export const Amount = styled.h3``;
