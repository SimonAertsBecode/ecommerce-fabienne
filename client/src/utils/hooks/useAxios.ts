import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL!;

export const useAxios = <T>(axiosParams: AxiosRequestConfig) => {
   const [datas, setDatas] = useState<T>();
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(true);

   const fetch = async () => {
      try {
         const request = await axios.request(axiosParams);
         const response = request.data;
         console.log(response);
         setDatas(response);
      } catch (err) {
         const error = err as AxiosError;
         setError(error.message);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetch();
   }, []); // eslint-disable-line

   return { datas, error, loading } as const;
};
