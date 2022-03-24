/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo } from "react";
import { useTheme } from "styled-components";

import { Container, Content, Footer } from "./styles";

import ContentHeader from "components/ContentHeader";
import SelectInput from "components/SelectInput";
import Head from "components/Head";
import Loader from "components/Loader";
import Error from "components/Error";
import StatusCard from "components/Cards/StatusCard";
import BarCard from "components/Cards/BarCard";
import PieCard from "components/Cards/PieCard";
import LineCard from "components/Cards/LineCard";

import { months, years, listOfMonths } from "mocks";

import { GET_RESERVATIONS } from "api";

import { Reservation } from "@types";

import useFetch from "hooks/useFetch";
import useLocalStorage from "hooks/useLocalStorage";
import useAuthContext from "hooks/useAuthContext";
import useDashboardFiltered from "hooks/useDashboardFiltered";

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
    // datas,
    reservations,
    yearSeleted,
    setYearSelected,
    monthSeleted,
    setMonthSelected,
  } = useDashboardFiltered(data);

  const relations = useMemo(() => {
    const total = reservations ? reservations.length : 0;

    const totalWaiting = reservations
      ? reservations.filter(({ status }) => status === "waiting").length
      : 0;

    const totalUsing = reservations
      ? reservations.filter(({ status }) => status === "using").length
      : 0;

    const totalCollected = reservations
      ? reservations.filter(({ status }) => status === "collected").length
      : 0;

    const percentWaiting = (totalWaiting / total) * 100;
    const percentUsing = (totalUsing / total) * 100;
    const percentCollected = (totalCollected / total) * 100;

    const data = [
      {
        name: "Aguardando",
        percent: percentWaiting,
        value: totalWaiting,
        color: theme.colors.status.warning,
      },
      {
        name: "Utilizando",
        percent: percentUsing,
        value: totalUsing,
        color: theme.colors.status.success,
      },
      {
        name: "Recolhido",
        percent: percentCollected,
        value: totalCollected,
        color: theme.colors.status.danger,
      },
    ];

    return data;
  }, [
    reservations,
    theme.colors.status.danger,
    theme.colors.status.success,
    theme.colors.status.warning,
  ]);

  const historyData = useMemo(() => {
    return listOfMonths.map((_, month) => {
      let amountWaiting = 0;
      let amountUsing = 0;
      let amountCollected = 0;

      return {
        month: listOfMonths[month].substr(0, 3),
        amountWaiting,
        amountUsing,
        amountCollected,
      };
    });
    // .filter((item) => {
    //   const currentMonth = new Date().getMonth() + 1;
    //   const currentYear = new Date().getFullYear();
    //   return (
    //     (yearSeleted === String(currentYear) &&
    //       item.month <= String(currentMonth)) ||
    //     yearSeleted < String(currentYear)
    //   );
    // });
  }, []);

  // if (datas) {
  //   console.log(historyData.map(({ month }) => month));
  //   console.log(
  //     datas
  //       .filter(({ status }) => status === "waiting")
  //       .map(({ date }) => returnMonth(date.substring(5, 7)).substring(0, 3)),
  //   );
  // }

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
        {reservations && (
          <Content>
            <StatusCard
              title="Aguardando"
              amount={
                reservations.filter(({ status }) => status === "waiting").length
              }
              cardColor="warning"
              footerLabel={`Baseadas no mês de ${returnMonth(
                monthSeleted,
              )} de ${yearSeleted}`}
              icon="waiting"
            />

            <StatusCard
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

            <StatusCard
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

            <BarCard data={relations} />

            <PieCard data={relations} />

            <LineCard data={historyData} />

            <Footer>
              <p>
                Baseados no mês de{" "}
                <strong>
                  {returnMonth(monthSeleted)} de {yearSeleted}.
                </strong>
              </p>
            </Footer>
          </Content>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
