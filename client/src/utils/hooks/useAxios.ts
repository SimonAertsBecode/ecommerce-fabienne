import { useState } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL!;
axios.defaults.withCredentials = true;

export const useAxios = <T>() => {
   const [datas, setDatas] = useState<T>();
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(true);

   const fetch = async (axiosParams: AxiosRequestConfig) => {
      try {
         const request = await axios.request(axiosParams);
         const response = request.data;
         setDatas(response);
      } catch (err) {
         const error = err as AxiosError;
         setError(error.message);
      } finally {
         setLoading(false);
      }
   };

   return { datas, error, loading, fetch } as const;
};
