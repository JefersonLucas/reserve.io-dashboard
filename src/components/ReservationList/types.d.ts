import { Status } from "@types";

export interface ReservationListProps {
  id: string;
  status: Status;
  requester: string;
  date: string;
  place: string;
  entry_time: string;
  exit_time: string;
}

export interface TagProps {
  status: Status;
}
