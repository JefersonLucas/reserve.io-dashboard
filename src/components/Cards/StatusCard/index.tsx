import React, { useMemo } from "react";

import CountUp from "react-countup";

import { Container, Title, Amount, Label, Image } from "./styles";

import { StatusCardProps } from "./types";

import fileWaiting from "assets/file-waiting-icon.svg";
import fileUsing from "assets/file-using-icon.svg";
import fileCollected from "assets/file-collected-icon.svg";

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  amount,
  cardColor,
  footerLabel,
  icon,
}) => {
  const iconSelected = useMemo(() => {
    switch (icon) {
      case "waiting":
        return fileWaiting;
      case "using":
        return fileUsing;
      case "collected":
        return fileCollected;
      default:
        return undefined;
    }
  }, [icon]);

  return (
    <Container cardColor={cardColor}>
      <Title>{title}</Title>
      <Amount>
        <CountUp end={amount} suffix={amount > 1 ? " reservas" : " reserva"} />
      </Amount>
      <Label>{footerLabel}</Label>
      <Image src={iconSelected} alt={title} />
    </Container>
  );
};

export default StatusCard;
