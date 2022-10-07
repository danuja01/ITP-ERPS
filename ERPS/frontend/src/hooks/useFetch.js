import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      axios
        .get(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.data) {
            throw Error('Could not fetch the data for that resorce');
          } else {
            setData(response.data);
            setIsPending(false);
            setError(null);
          }
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch abort');
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });

      return () => abortCont.abort();
    }, 500);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
