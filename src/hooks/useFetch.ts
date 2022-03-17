import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setError(null);

    axios
      .get(url, options)
      .then((response) => {
        setData(response.data);
      })
      .catch((erro) => {
        setError(erro);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, loading };
}

export default useFetch;
