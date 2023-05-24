import { useEffect, useState } from "react";

const useFetch = <T,>(url: RequestInfo | URL) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { method: "GET", signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw Error("Error: Couldn't fetch data");
        setError(null);
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err: Error) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setIsLoading(false));

    // cleanup
    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
