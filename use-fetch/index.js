import React, { useState, useEffect } from 'react';

export default function useFetch(input) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(input, {});
        if (response.ok) {
          const body = await body => body.json(response);
          setData(body);
        } else {
          setError(new Error(response.statusText));
        }
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    })();
  }, [input, opts]);
  return { error, loading, data };
};
