import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [errorFetch, setErrorFetch] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        if (!data) {
          throw new Error("No se pudieron obtener los resultados");
        }
        setLoading(false);
        setData(data);
      } catch (error) {
        setErrorFetch(error);
      }
    };

    getData();
  }, []);

  return { data, loading, errorFetch };
};
