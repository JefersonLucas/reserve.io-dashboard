/* eslint-disable react-hooks/rules-of-hooks */
import { useTheme } from "styled-components";

import { Container, Content, NotContent } from "./styles";

import ContentHeader from "components/ContentHeader";
import SelectInput from "components/SelectInput";
import ReservationList from "components/ReservationList";
import Filters from "components/Filters";
import Head from "components/Head";
import Loader from "components/Loader";
import Error from "components/Error";

import { months, years, controls } from "mocks";

import { GET_RESERVATION } from "api";

import { Reservation } from "@types";

import useFetch from "hooks/useFetch";
import useLocalStorage from "hooks/useLocalStorage";
import useAuthContext from "hooks/useAuthContext";
import useReservationsFiltered from "hooks/useReservationsFiltered";

import returnMonth from "helpers/returnMonth";

const Reservations: React.FC = () => {
  const theme = useTheme();

  const { logout } = useAuthContext();

  const token = useLocalStorage.get("token");

  if (!token) {
    logout();
    window.location.href = "/";
    return null;
  }

  const { url, options } = GET_RESERVATION(token);

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
      <Head title="Reservas" description="Visulize as reservas efetuadas" />
      <Container>
        <ContentHeader title="Reservas" lineColor={theme.colors.main}>
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

        {reservations && reservations.length > 0 ? (
          <Content>
            <Filters controls={controls} />

            {reservations.map((items) => (
              <ReservationList {...items} key={items.id} />
            ))}
          </Content>
        ) : (
          <NotContent>
            <p>
              Não há <strong>reservas</strong> no período de{" "}
              <strong>
                {returnMonth(monthSeleted)} de {yearSeleted}
              </strong>
              .
            </p>
          </NotContent>
        )}
      </Container>
    </>
  );
};

export default Reservations;
