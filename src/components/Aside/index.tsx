import React from "react";

import {
  Container,
  Header,
  LogoImage,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styles";

import {
  MdDashboard,
  MdAccountBalanceWallet,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
} from "react-icons/md";

import logo from "assets/logo.svg";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImage src={logo} alt="Logo Reserve" />
        <Title>Reserve.io</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdAccountBalanceWallet />
          Novo registro
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowDownward />
          Saidas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
