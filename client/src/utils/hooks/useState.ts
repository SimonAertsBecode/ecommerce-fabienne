import { ChangeEvent, useState } from 'react';

export const useSetState = <T>(initialState: T) => {
   const [fields, setValues] = useState(initialState);

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValues({
         ...fields,
         [event.target.name]: event.target.value,
      });
   };

   return { fields, handleChange };
};
