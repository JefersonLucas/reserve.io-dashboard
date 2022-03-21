import { Reservation, Status } from "@types";

import { useEffect, useState } from "react";

function useReservationsFiltered(data: Reservation[] | null) {
  const status: Status[] = ["waiting", "using", "collected"];

  const [reservations, setReservations] = useState<Reservation[] | undefined>(
    undefined,
  );

  const [monthSeleted, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1),
  );

  const [yearSeleted, setYearSelected] = useState<string>(
    String(new Date().getFullYear()),
  );

  const [selectedStatus, setSelectedStatus] = useState<Status[]>(status);

  function handleStatusClick(status: Status) {
    const alredySelected = selectedStatus.findIndex((item) => item === status);

    if (alredySelected >= 0) {
      const filteredStatus = selectedStatus.filter((item) => item !== status);

      setSelectedStatus(filteredStatus);
    } else {
      setSelectedStatus((prev) => [...prev, status]);
    }
  }

  useEffect(() => {
    const filter = data?.filter((item) => {
      const date = new Date(item.date);

      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return (
        month === monthSeleted &&
        year === yearSeleted &&
        selectedStatus.includes(item.status)
      );
    });

    setReservations(filter);
  }, [data, monthSeleted, yearSeleted, selectedStatus]);

  return {
    reservations,
    monthSeleted,
    setMonthSelected,
    yearSeleted,
    setYearSelected,
    selectedStatus,
    handleStatusClick,
  };
}

export default useReservationsFiltered;
