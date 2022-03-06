import React, { useMemo } from "react";

import { Container, Header, Logo, Title, Menu, Link } from "./styles";

import {
  AiFillDashboard as Dashboard,
  AiFillFileAdd as FileAdd,
  AiOutlineUnorderedList as UnorderedList,
  AiOutlineLogout as Logout,
} from "react-icons/ai";

import logo from "assets/logo.svg";

import { useLocation } from "react-router-dom";

import { MenusProps } from "./types";

const Aside: React.FC = () => {
  const { pathname } = useLocation();

  const menus: MenusProps[] = useMemo(() => {
    return pathname === "/dashboard"
      ? [
          {
            title: "Dashboard",
            href: "/dashboard",
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
          {
            title: "Sair",
            href: "/logout",
            active: false,
            icon: <Logout />,
          },
        ]
      : pathname === "/register"
      ? [
          {
            title: "Dashboard",
            href: "/dashboard",
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
          {
            title: "Sair",
            href: "/logout",
            active: false,
            icon: <Logout />,
          },
        ]
      : pathname === "/reservations"
      ? [
          {
            title: "Dashboard",
            href: "/dashboard",
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
          {
            title: "Sair",
            href: "/logout",
            active: false,
            icon: <Logout />,
          },
        ]
      : [
          {
            title: "Dashboard",
            href: "/dashboard",
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
          {
            title: "Sair",
            href: "/logout",
            active: false,
            icon: <Logout />,
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
      </Menu>
    </Container>
  );
};

export default Aside;
