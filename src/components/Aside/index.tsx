import React, { useMemo } from "react";

import { Container, Header, Logo, Title, Menu, Link, Button } from "./styles";

import {
  AiFillDashboard as Dashboard,
  AiFillFileAdd as FileAdd,
  AiOutlineUnorderedList as UnorderedList,
  AiOutlineLogout as Logout,
} from "react-icons/ai";

import logo from "assets/logo.svg";

import { useLocation } from "react-router-dom";

import useAuthContext from "hooks/useAuthContext";

import { MenusProps } from "./types";

const Aside: React.FC = () => {
  const { pathname } = useLocation();
  const { logout, isLoggedIn } = useAuthContext();
  console.log(isLoggedIn);
  const menus: MenusProps[] = useMemo(() => {
    return pathname === "/"
      ? [
          {
            title: "Dashboard",
            href: "/",
            active: true,
            icon: <Dashboard />,
          },
          {
            title: "Cadastrar",
            href: "/register",
            active: false,
            icon: <FileAdd />,
          },
          {
            title: "Reservas",
            href: "/reservations",
            active: false,
            icon: <UnorderedList />,
          },
        ]
      : pathname === "/register"
      ? [
          {
            title: "Dashboard",
            href: "/",
            active: false,
            icon: <Dashboard />,
          },
          {
            title: "Cadastrar",
            href: "/register",
            active: true,
            icon: <FileAdd />,
          },
          {
            title: "Reservas",
            href: "/reservations",
            active: false,
            icon: <UnorderedList />,
          },
        ]
      : pathname === "/reservations"
      ? [
          {
            title: "Dashboard",
            href: "/",
            active: false,
            icon: <Dashboard />,
          },
          {
            title: "Cadastrar",
            href: "/register",
            active: false,
            icon: <FileAdd />,
          },
          {
            title: "Reservas",
            href: "/reservations",
            active: true,
            icon: <UnorderedList />,
          },
        ]
      : [
          {
            title: "Dashboard",
            href: "/",
            active: false,
            icon: <Dashboard />,
          },
          {
            title: "Cadastrar",
            href: "/register",
            active: false,
            icon: <FileAdd />,
          },
          {
            title: "Reservas",
            href: "/reservations",
            active: false,
            icon: <UnorderedList />,
          },
        ];
  }, [pathname]);

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo Reserve" />
        <Title>Reserve.io</Title>
      </Header>
      <Menu>
        {menus.map(({ title, href, active, icon }) => (
          <Link href={href} active={active} key={title}>
            {icon}
            {title}
          </Link>
        ))}
        <Button onClick={logout} href="/">
          <Logout />
          Sair
        </Button>
      </Menu>
    </Container>
  );
};

export default Aside;
