import { Container, Content } from "./styles";

import ContentHeader from "components/ContentHeader";
import SelectInput from "components/SelectInput";
import HistoryReservationsList from "components/HistoryReservationsList";

import { months, years, reservations } from "mock";

import { useTheme } from "styled-components";

const Reservations: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <ContentHeader title="Reservas" lineColor={theme.colors.main}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Content>
        {reservations.map(
          ({ id, requester, date, status, place, entry_time, exit_time }) => (
            <HistoryReservationsList
              key={id}
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
