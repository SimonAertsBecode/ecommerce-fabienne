import React from 'react';

interface formField {
   label: string;
   type: string;
   name: string;
   placeholder: string;
   method?: React.ChangeEventHandler<HTMLInputElement>;
   required: boolean;
}

const FormField: React.FC<formField> = ({ label, type, name, placeholder, method }) => {
   return (
      <section className='field'>
         <label htmlFor={name}>{label}</label>
         <input name={name} type={type} placeholder={placeholder} onChange={method} required />
      </section>
   );
};

export default FormField;
