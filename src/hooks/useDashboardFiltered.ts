import { Reservation } from "@types";

import { useEffect, useState } from "react";

function useDashboardFiltered(data: Reservation[] | null) {
  const [reservations, setReservations] = useState<Reservation[] | undefined>(
    undefined,
  );

  const [monthSeleted, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1),
  );

  const [yearSeleted, setYearSelected] = useState<string>(
    String(new Date().getFullYear()),
  );

  useEffect(() => {
    const filter = data?.filter((item) => {
      const date = new Date(item.date);

      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSeleted && year === yearSeleted;
    });

    setReservations(filter);
  }, [data, monthSeleted, yearSeleted]);

  return {
    datas: data,
    reservations,
    monthSeleted,
    setMonthSelected,
    yearSeleted,
    setYearSelected,
  };
}

export default useDashboardFiltered;
