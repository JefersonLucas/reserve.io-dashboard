import { useEffect, useState } from "react";

function useFetch<T = unknown, O = unknown>(url: string, options?: O) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setError(null);

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((erro) => {
        setError(erro);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [options, url]);

  return { data, error, loading };
}

export default useFetch;
