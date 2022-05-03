import { Error } from 'mongoose';
import { MongoError } from 'mongodb';

/**
 * code 1100 + keyvalues[0] (email) = email already used
 *
 *
 * message ? object.keys(error)
 */

interface errorFields {
   emptyField: {
      [name: string]: boolean;
   };
   wrongField: {
      [name: string]: boolean | string;
   };
}

export const handleFormError = (err: any) => {
   let errorMessages: errorFields = {
      emptyField: {},
      wrongField: {},
   };

   const { emptyField, wrongField } = errorMessages;

   if (!err) return;

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

   errorMessages = err;

   return errorMessages;
};
