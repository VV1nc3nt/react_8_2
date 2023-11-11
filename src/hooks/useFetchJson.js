import { useState, useEffect } from 'react'

export default function useFetchJson(url, options = { method: 'GET' }) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let canceled = false;
    const fetchData = async () => {
      if (canceled) { return; }

      setPending(true);
      try {
        const response = await fetch(`${url}`, options);
        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        if (!canceled) { setData(data); }
      } catch (error) {
        setError(error);
      } finally {
        setPending(false);
      }
    };

    fetchData();

    return () => {
      canceled = true;
    }
  }, [url]);

  return [{ data, pending, error }];
}
