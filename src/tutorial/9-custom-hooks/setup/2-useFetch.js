import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getdata = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setData(data);
  };

  useEffect(async () => {
    getdata();
  }, [url]);

  return { loading, data };
};
