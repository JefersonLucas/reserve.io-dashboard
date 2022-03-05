export interface ReservationsListProps {
  id: number;
  status: "waiting" | "using" | "collected";
  requester: string;
  date: string;
  place: string;
  entry_time: string;
  exit_time: string;
}
