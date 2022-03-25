import { Status } from "@types";

type StatusColor = "success" | "info" | "warning" | "danger";

export interface StatusCardProps {
  title: string;
  amount: number;
  cardColor: StatusColor;
  footerLabel: string;
  icon: Status;
}

export interface ContainerProps {
  cardColor: StatusColor;
}
