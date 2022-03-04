import React from "react";

import * as S from "./styles";

import { HistoryFinanceListProps } from "./types";

const HistoryFinanceList: React.FC<HistoryFinanceListProps> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <S.Container color={cardColor}>
      <S.Tag color={tagColor} />
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Header>
      <S.Amount>{amount}</S.Amount>
    </S.Container>
  );
};

export default HistoryFinanceList;
