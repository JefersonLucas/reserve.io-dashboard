import { Controls } from "components/Filters/types";
import { ReservationListProps } from "components/ReservationList/types";

export const years = [
  { value: 2021, label: 2021 },
  { value: 2022, label: 2022 },
];

export const months = [
  { value: 1, label: "Janeiro" },
  { value: 2, label: "Fevereiro" },
  { value: 3, label: "Março" },
  { value: 4, label: "Abril" },
  { value: 5, label: "Maio" },
  { value: 6, label: "Junho" },
  { value: 7, label: "Julho" },
  { value: 8, label: "Agosto" },
  { value: 9, label: "Setembro" },
  { value: 10, label: "Outubro" },
  { value: 11, label: "Novembro" },
  { value: 12, label: "Dezembro" },
];

export const reservations: ReservationListProps[] = [
  {
    id: "1",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "waiting",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "2",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "using",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "3",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "collected",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "4",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "waiting",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "5",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "using",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "6",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "collected",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "7",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "waiting",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "8",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "using",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "9",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "collected",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "10",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "waiting",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "11",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "using",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "12",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "collected",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "13",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "waiting",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "14",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "using",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "15",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "collected",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "16",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "waiting",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "17",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "using",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "18",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "collected",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "19",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "waiting",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
  {
    id: "20",
    requester: "Jeferson Lucas",
    date: "27/07/2020",
    status: "using",
    place: "C6",
    entry_time: "18:00",
    exit_time: "22:00",
  },
];

export const controls: Controls[] = [
  {
    title: "Aguardando",
    status: "waiting",
    active: true,
  },
  {
    title: "Utilizando",
    status: "using",
    active: true,
  },
  {
    title: "Recolhido",
    status: "collected",
    active: true,
  },
];
