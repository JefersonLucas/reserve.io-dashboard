import { Method, AxiosRequestHeaders } from "axios";

export type FetchAPI = {
  url: string;
  options: {
    method: Method;
    headers: AxiosRequestHeaders;
    body?: unknown;
  };
};
