import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (axiosCall: string) => {
   const [data, setData] = useState([]);

   const fetchDatas = async () => {
      try {
         const request = await axios.get(`${process.env.REACT_APP_SERVER_URL}${axiosCall}`);
         setData(request.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchDatas();
   }, []);

   return { data };
};
