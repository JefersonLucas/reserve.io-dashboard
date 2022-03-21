import { Status } from "@types";

export interface ButtonProps {
  status: Status;
  active?: boolean;
}

export interface FiltersProps {
  title: string;
  status: Status;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
