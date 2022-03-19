import React from "react";

import * as S from "./styles";

import formatDate from "helpers/formatDate";

import { ReservationListProps } from "./types";

const ReservationList: React.FC<ReservationListProps> = ({
  id,
  status,
  requester,
  date,
  place,
  entry_time,
  exit_time,
}) => {
  return (
    <S.Container id={id}>
      <S.Tag status={status} />
      <S.Header>
        <S.Title>{requester}</S.Title>
        <S.Subtitle>
          {formatDate(date)} - {entry_time} às {exit_time}
        </S.Subtitle>
      </S.Header>
      <S.Place>{place}</S.Place>
    </S.Container>
  );
};

export default ReservationList;
