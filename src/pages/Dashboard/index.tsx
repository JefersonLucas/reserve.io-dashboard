/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useTheme } from "styled-components";

import { Container, Content } from "./styles";

import ContentHeader from "components/ContentHeader";
import SelectInput from "components/SelectInput";
import Head from "components/Head";
import Loader from "components/Loader";
import Error from "components/Error";
import Card from "components/Card";

import { months, years } from "mocks";

import { GET_RESERVATIONS } from "api";

import { Reservation } from "@types";

import useFetch from "hooks/useFetch";
import useLocalStorage from "hooks/useLocalStorage";
import useAuthContext from "hooks/useAuthContext";
import useReservationsFiltered from "hooks/useReservationsFiltered";

import returnMonth from "helpers/returnMonth";

const Dashboard: React.FC = () => {
  const theme = useTheme();

  const { logout } = useAuthContext();

  const token = useLocalStorage.get("token");

  if (!token) {
    logout();
    window.location.href = "/";
    return null;
  }

  const { url, options } = GET_RESERVATIONS(token);

  const { data, loading, error } = useFetch<Reservation[]>(url, options);

  const {
    reservations,
    yearSeleted,
    setYearSelected,
    monthSeleted,
    setMonthSelected,
  } = useReservationsFiltered(data);

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
          <SelectInput
            options={months}
            onChange={({ target }) => setMonthSelected(target.value)}
            defaultValue={monthSeleted}
          />
          <SelectInput
            options={years}
            onChange={({ target }) => setYearSelected(target.value)}
            defaultValue={yearSeleted}
          />
        </ContentHeader>
        <Content>
          {reservations && (
            <>
              <Card
                title="Aguardando"
                amount={
                  reservations.filter(({ status }) => status === "waiting")
                    .length
                }
                cardColor="warning"
                footerLabel={`Baseadas no mês de ${returnMonth(
                  monthSeleted,
                )} de ${yearSeleted}`}
                icon="waiting"
              />

              <Card
                title="Utilizando"
                amount={
                  reservations.filter(({ status }) => status === "using").length
                }
                cardColor="success"
                footerLabel={`Baseadas no mês de ${returnMonth(
                  monthSeleted,
                )} de ${yearSeleted}`}
                icon="using"
              />

              <Card
                title="Recolhido"
                amount={
                  reservations.filter(({ status }) => status === "collected")
                    .length
                }
                cardColor="danger"
                footerLabel={`Baseadas no mês de ${returnMonth(
                  monthSeleted,
                )} de ${yearSeleted}`}
                icon="collected"
              />
            </>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
