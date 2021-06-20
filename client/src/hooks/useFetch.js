import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        // data is fetched then set it into setData state
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]); // run again if any change in url

  return { error, loading, data };
};

export default useFetch;
