import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [datas, setDatas] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setDatas(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setDatas([]);
        }
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };

    fetchData(dataUrl);
    const cleanUp = () => {
      console.log("clean up function");
      isMounted = false;
      source.cancel();
    };
    return cleanUp;
  }, [dataUrl]);
  return { datas, fetchError };
};

export default useAxiosFetch;
