import { Container, Content } from "./styles";

import ContentHeader from "components/ContentHeader";
import SelectInput from "components/SelectInput";
import ReservationList from "components/ReservationList";
import Filters from "components/Filters";

import { months, years, reservations, controls } from "mock";

import { useTheme } from "styled-components";

const Reservations: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <ContentHeader title="Reservas" lineColor={theme.colors.main}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters controls={controls} />

      <Content>
        {reservations.map(
          ({ id, requester, date, status, place, entry_time, exit_time }) => (
            <ReservationList
              key={id}
              id={id}
              status={status}
              requester={requester}
              date={date}
              place={place}
              entry_time={entry_time}
              exit_time={exit_time}
            />
          ),
        )}
      </Content>
    </Container>
  );
};

export default Reservations;
