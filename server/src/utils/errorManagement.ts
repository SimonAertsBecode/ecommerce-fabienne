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

export const registerFormErrors = (err: any) => {
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

// const formsError: formsErr = {};

// formsError.signUpError = (err: any) => {
//    let errorMessages = {
//       name: '',
//       firstName: '',
//       email: '',
//       password: '',
//    };

//    switch (err.message !== undefined) {
//       case err.message.includes('name'):
//          if (err.message.includes('required')) {
//             errorMessages.name = 'Un nom est requis';
//          } else {
//             errorMessages.name = 'Votre nom doit faire au minimun 3 caractères';
//          }
//          break;
//       case err.message.includes('firstName'):
//          if (err.message.includes('required')) {
//             errorMessages.firstName = 'Un prénom est requis';
//          } else {
//             errorMessages.firstName = 'Votre prénom doit faire au minimun 3 caractères';
//          }
//          break;
//       case err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'):
//          errorMessages.email = 'Cet email est déjà utilisé';
//          break;
//       case err.message.includes('email'):
//          errorMessages.email = "cet email n'est pas valide";
//          break;
//       case err.message.includes('password'):
//          if (err.message.includes('required')) {
//             errorMessages.password = 'Un mot de passe est requis';
//          } else {
//             errorMessages.password = 'Votre mot de passe doit faire au minimum 6 caractères';
//          }
//          break;
//       default:
//          errorMessages.name = '';
//          errorMessages.firstName = '';
//          errorMessages.email = '';
//          errorMessages.password = '';
//    }

//    return errorMessages;
// };
