/* eslint-disable react-hooks/rules-of-hooks */
import { Container, Content } from "./styles";

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

import formatDate from "helpers/formatDate";

import { useTheme } from "styled-components";

import useFetch from "hooks/useFetch";
import useLocalStorage from "hooks/useLocalStorage";
import useAuthContext from "hooks/useAuthContext";

const Reservations: React.FC = () => {
  const theme = useTheme();

  const { logout } = useAuthContext();

  const token = useLocalStorage.get("token");

  if (!token) {
    logout();
    return null;
  }

  const { url, options } = GET_RESERVATION(token);

  const {
    data: reservations,
    loading,
    error,
  } = useFetch<Reservation[]>(url, options);

  if (error) return <Error error={error as unknown as string} />;
  if (loading) return <Loader />;
  return (
    <>
      <Head title="Reservas" description="Visulize as reservas efetuadas" />
      <Container>
        <ContentHeader title="Reservas" lineColor={theme.colors.main}>
          <SelectInput options={months} />
          <SelectInput options={years} />
        </ContentHeader>

        <Filters controls={controls} />

        <Content>
          {reservations?.map((items) => (
            <ReservationList
              {...items}
              date={formatDate(items.date)}
              key={items.id}
            />
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Reservations;
