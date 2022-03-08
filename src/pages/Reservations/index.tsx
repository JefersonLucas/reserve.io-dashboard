import { Container, Content } from "./styles";

import ContentHeader from "components/ContentHeader";
import SelectInput from "components/SelectInput";
import ReservationList from "components/ReservationList";
import Filters from "components/Filters";
import Head from "components/Head";

import { months, years, reservations, controls } from "mocks";

import { useTheme } from "styled-components";

const Reservations: React.FC = () => {
  const theme = useTheme();
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
          {reservations.map((items) => (
            <ReservationList key={items.id} {...items} />
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Reservations;
