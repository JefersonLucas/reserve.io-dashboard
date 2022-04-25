import { Status } from "@types";

export interface ButtonProps {
  status: Status;
  active?: boolean;
}

export interface FilterByStatusProps {
  title: string;
  status: Status;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
