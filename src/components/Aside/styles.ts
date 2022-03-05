import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};

  padding-left: 20px;

  border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;

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
  gap: 25px 0;

  margin-top: 50px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.white};

  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }

  > svg {
    font-size: 20px;
  }
`;
