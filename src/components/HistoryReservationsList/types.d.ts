export interface HistoryReservationsListProps {
  status: "waiting" | "using" | "collected";
  requester: string;
  date: string;
  place: string;
  entry_time: string;
  exit_time: string;
}

export interface StatusProps {
  status: "waiting" | "using" | "collected";
}
