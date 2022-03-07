import { Status } from "@types";

export interface ButtonProps {
  status: Status;
  active?: boolean;
}

export interface FiltersProps {
  controls: Controls[];
}

export type Controls = {
  title: string;
  status: Status;
  active?: boolean;
};
