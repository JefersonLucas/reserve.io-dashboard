/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Container, Content } from "./styles";

import ContentHeader from "components/ContentHeader";
import SelectInput from "components/SelectInput";
import Head from "components/Head";
import Loader from "components/Loader";
import Error from "components/Error";

import { months, years } from "mocks";

import { GET_USERS } from "api";
import { User } from "@types";
import useLocalStorage from "hooks/useLocalStorage";
import useFetch from "hooks/useFetch";

import { useTheme } from "styled-components";
import useAuthContext from "hooks/useAuthContext";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const { logout } = useAuthContext();

  const token = useLocalStorage.get("token");

  if (!token) {
    logout();
    return null;
  }

  const { url, options } = GET_USERS(token);

  const { data: users, loading, error } = useFetch<User[]>(url, options);

  if (error) return <Error error={error as unknown as string} />;
  if (loading) return <Loader />;
  return (
    <>
      <Head
        title="Dashboard"
        description="Visualize as informações sobre as suas reservas"
      />
      <Container>
        <ContentHeader title="Dashboard" lineColor={theme.colors.main}>
          <SelectInput options={months} />
          <SelectInput options={years} />
        </ContentHeader>
        <Content>
          <ul>
            {users?.map(({ username, id, email }) => (
              <li key={id}>
                <strong>{username}</strong> - <small>{email}</small>
              </li>
            ))}
          </ul>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
