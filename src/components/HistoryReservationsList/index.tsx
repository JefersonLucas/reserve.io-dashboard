import React from "react";

import * as S from "./styles";

import { HistoryReservationsListProps } from "./types";

const HistoryReservationsList: React.FC<HistoryReservationsListProps> = ({
  status,
  requester,
  date,
  place,
  entry_time,
  exit_time,
}) => {
  return (
    <S.Container>
      <S.Tag status={status} />
      <S.Header>
        <S.Title>{requester}</S.Title>
        <S.Subtitle>
          {date} - {entry_time} às {exit_time}
        </S.Subtitle>
      </S.Header>
      <S.Place>{place}</S.Place>
    </S.Container>
  );
};

export default HistoryReservationsList;
