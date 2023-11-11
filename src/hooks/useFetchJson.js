import { useState, useEffect } from 'react'

export default function useFetchJson(url, options = { method: 'GET' }) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setPending(true);
      try {
        const response = await fetch(`${url}`, options);

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setPending(false);
      }
    };

    fetchData();
  }, []);

  return [{ data, pending, error }];
}
