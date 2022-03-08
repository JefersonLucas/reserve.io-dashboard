import styled from "styled-components";

import { LinkProps } from "./types";

export const Container = styled.div`
  grid-area: AS;

  color: ${({ theme }) => theme.colors.text.white};
  background-color: ${({ theme }) => theme.colors.background.secondary};

  border-right: 1px solid ${({ theme }) => theme.colors.text.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;

  padding-left: 20px;
  height: 70px;

  user-select: none;
`;

export const Logo = styled.img`
  display: block;

  width: 50px;
  height: 50px;
`;

export const Title = styled.h3``;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`;

export const Link = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 10px 10px 20px;

  color: ${({ theme, active }) =>
    active ? theme.colors.main : theme.colors.text.white};
  background: ${({ theme, active }) =>
    active
      ? theme.colors.background.primary
      : theme.colors.background.secondary};

  text-decoration: none;
  transition: color 0.3s;

  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
    background: ${({ theme }) => theme.colors.background.tertiary};
  }

  > svg {
    font-size: 25px;
  }

  &::after {
    content: "";
    display: block;
    width: ${({ active }) => (active ? `5px` : `0px`)};
    height: ${({ active }) => (active ? `100%` : `0%`)};
    margin: 5px auto;
    position: absolute;
    right: -5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

export const Button = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 10px 10px 20px;

  color: ${({ theme, active }) =>
    active ? theme.colors.main : theme.colors.text.white};
  background: ${({ theme, active }) =>
    active
      ? theme.colors.background.primary
      : theme.colors.background.secondary};

  text-decoration: none;
  transition: color 0.3s;

  position: relative;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.main};
    background: ${({ theme }) => theme.colors.background.tertiary};
  }

  > svg {
    font-size: 25px;
  }

  &::after {
    content: "";
    display: block;
    width: ${({ active }) => (active ? `5px` : `0px`)};
    height: ${({ active }) => (active ? `100%` : `0%`)};
    margin: 5px auto;
    position: absolute;
    right: -5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${({ theme }) => theme.colors.main};
  }
`;
