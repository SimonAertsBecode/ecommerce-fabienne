import React from 'react';
import FormField from '../../../utils/prebuilt/FormField';

const FormDetailsFields = ({ method }: { method?: React.ChangeEventHandler<HTMLInputElement> }) => {
   return (
      <>
         <FormField name='name' label='Name' type='text' placeholder='Jane Doe' method={method} required />
         <FormField name='email' label='Email' type='email' placeholder='jane.doe@example.com' method={method} required />
         <FormField name='address' label='Address' type='text' placeholder='185 Berry St. Suite 550' method={method} required />
         <FormField name='city' label='City' type='text' placeholder='San Francisco' method={method} required />
         <FormField name='postal' label='Postal' type='number' placeholder='1000' method={method} required />
      </>
   );
};

export default FormDetailsFields;
