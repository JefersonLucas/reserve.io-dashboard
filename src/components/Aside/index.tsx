import React from "react";

import { Container, Header, Logo, Title, Menu, Link } from "./styles";

import {
  AiFillDashboard as Dashboard,
  AiFillFileAdd as FileAdd,
  AiOutlineUnorderedList as UnorderedList,
  AiOutlineLogout as Logout,
} from "react-icons/ai";

import logo from "assets/logo.svg";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo Reserve" />
        <Title>Reserve.io</Title>
      </Header>
      <Menu>
        <Link href="#">
          <Dashboard />
          Dashboard
        </Link>

        <Link href="#">
          <FileAdd />
          Cadastrar
        </Link>

        <Link href="#">
          <UnorderedList />
          Reservas
        </Link>

        <Link href="#">
          <Logout />
          Sair
        </Link>
      </Menu>
    </Container>
  );
};

export default Aside;
