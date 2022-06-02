"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const User_1 = __importDefault(require("../models/User"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//*Import class
const UserUtils_1 = require("../utils/UserUtils");
//**Import error management */
const errorManagement_1 = require("../utils/errorManagement");
//*REGISTER
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const newUser = new User_1.default({
        username: username,
        email: email,
        password: UserUtils_1.useUserUtils.encryptPassword(password),
    });
    try {
        const savedUser = yield newUser.save();
        res.status(201).json(UserUtils_1.useUserUtils.removePassword(savedUser));
    }
    catch (error) {
        res.status(500).json((0, errorManagement_1.handleFormError)(error));
    }
});
exports.register = register;
//*LOGIN
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password: requestPassword } = req.body;
    try {
        const user = yield User_1.default.findOne({ username: username });
        if (!user)
            return !user && res.status(401).json('no match for that username');
        const hashedPassword = crypto_js_1.default.AES.decrypt(user.password, process.env.PASSWORD_SECRET);
        const decryptedPassword = hashedPassword.toString(crypto_js_1.default.enc.Utf8);
        if (decryptedPassword !== requestPassword)
            return res.status(401).json('wrong password');
        const accessToken = jsonwebtoken_1.default.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET_KEY, { expiresIn: 3600 * 24 * 3 });
        console.log(accessToken);
        return res.status(200).json(Object.assign(Object.assign({}, UserUtils_1.useUserUtils.removePassword(user)), { accessToken }));
    }
    catch (error) {
        //error message already handled by mongoDB
        res.status(500).json(error);
    }
});
exports.login = login;
