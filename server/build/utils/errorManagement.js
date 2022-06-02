"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFormError = void 0;
//! err type still needs to be fixed ==> "any" for now.
const handleFormError = (err) => {
    let errorMessages = {
        emptyField: {},
        wrongField: {},
    };
    const { emptyField, wrongField } = errorMessages;
    if (!err)
        return;
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
exports.handleFormError = handleFormError;
