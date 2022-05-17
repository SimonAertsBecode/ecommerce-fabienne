import React from 'react';

interface formField {
   label: string;
   type: string;
   name: string;
   placeholder: string;
   required: boolean;
}

const FormField: React.FC<formField> = ({ label, type, name, placeholder, required }) => {
   return (
      <>
         <label htmlFor={name}>{label}</label>
         <input name={name} type={type} placeholder={placeholder} required />
      </>
   );
};

export default FormField;
