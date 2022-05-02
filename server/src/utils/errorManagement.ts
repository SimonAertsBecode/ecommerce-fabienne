interface formsErr {
   signUpError?: any;
}

interface error {
   message: string;
   code: number;
   keyValue: {};
}

/**
 * code 1100 + keyvalues[0] (email) = email already used
 *
 *
 * message ? object.keys(error)
 */

const translate = (word: string) => {
   let translatedWord = '';

   switch (word !== undefined) {
      case word === 'username':
         translatedWord = "nom d'utilisateur";
      case word === 'password':
         translatedWord = 'mot de passe';
   }

   return translatedWord;
};

export const handleFormError = (err: any) => {
   let errorMessages: any = {};

   if (!err) return;

   if (err.code === 11000) {
      let alreadyUseField = Object.keys(err.keyValue)[0];
      errorMessages[alreadyUseField] = `${translate(alreadyUseField)} déjà utilisé, veuillez en choisir un autre`;
   }

   if (err.message.includes('required')) {
      let requiredField = Object.keys(err.errors);
      requiredField.forEach((item) => {
         errorMessages[item] = `${item} est requis`;
      });
   }

   if (err.message.includes('Validator')) {
      errorMessages['email'] = `Cet email n'est pas valide`;
   }

   return errorMessages;
};