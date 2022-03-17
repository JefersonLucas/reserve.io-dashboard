import { Status, Reservation } from "@types";

export interface ReservationListProps extends Reservation {}

export interface TagProps {
  status: Status;
}
