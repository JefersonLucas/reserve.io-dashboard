import { Method, AxiosRequestHeaders } from "axios";

export type FetchAPI = {
  url: string;
  options: {
    method: Method;
    headers: AxiosRequestHeaders;
    body?: unknown;
  };
};

export type UserLoginBody = {
  email: string;
  password: string;
};

export type ReservationCreateBody = {
  requester: string;
  equipment: string;
  status: string;
  place: string;
  date: string;
  entry_time: string;
  exit_time: string;
  observation?: string;
};
