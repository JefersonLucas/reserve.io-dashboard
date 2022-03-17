import { FetchAPI } from "./types";

export const APIBaseURL = process.env.REACT_APP_API_BASE_URL;

export function POST_LOGIN(body: { email: string; password: string }) {
  return {
    url: `${APIBaseURL}/users/login`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function POST_VALIDATE_TOKEN(token: string) {
  return {
    url: `${APIBaseURL}/users/token`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function GET_USER(id: string, token: string) {
  return {
    url: `${APIBaseURL}/users/${id}`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function GET_USERS(token: string) {
  return {
    url: `${APIBaseURL}/users/`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function GET_RESERVATION(token: string): FetchAPI {
  return {
    url: `${APIBaseURL}/reservations/`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}
