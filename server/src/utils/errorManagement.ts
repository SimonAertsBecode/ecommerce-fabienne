import { Error } from 'mongoose';
import { MongoError } from 'mongodb';

interface errorFields {
   emptyField: {
      [name: string]: boolean;
   };
   wrongField: {
      [name: string]: boolean | string;
   };
}

//! err type still needs to be fixed ==> "any" for now.
export const handleFormError = (err: any) => {
   let errorMessages: errorFields = {
      emptyField: {},
      wrongField: {},
   };

   const { emptyField, wrongField } = errorMessages;

   if (!err) return;

   // if (err instanceof MongoError) {
   //    if (err.code === 11000) {
   //       let field = Object.keys(err.keyValue)[0];
   //       wrongField[field] = true;
   //    }

   //    if (err.message.includes('required')) {
   //       let requiredField = Object.keys(err.errors);
   //       requiredField.forEach((item) => {
   //          emptyField[item] = true;
   //       });
   //    }

   //    if (err.message.includes('Validator')) {
   //       wrongField.email = `Cet email n'est pas valide`;
   //    }
   // }

   if (err.code === 11000) {
      let field = Object.keys(err.keyValue)[0];
      wrongField[field] = true;
   }

   if (err.message.includes('required')) {
      let requiredField = Object.keys(err.errors);
      requiredField.forEach((item) => {
         emptyField[item] = true;
      });
   }

   if (err.message.includes('Validator')) {
      wrongField.email = `Cet email n'est pas valide`;
   }

   return errorMessages;
};
