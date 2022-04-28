"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserUtils = exports.UserUtils = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
class UserUtils {
    removePassword(user) {
        const _a = user._doc, { password } = _a, others = __rest(_a, ["password"]);
        return others;
    }
    removePwdFromAllUsers(users) {
        return users.map((user) => {
            const _a = user._doc, { password } = _a, others = __rest(_a, ["password"]);
            return others;
        });
    }
    encryptPassword(password) {
        return crypto_js_1.default.AES.encrypt(password, process.env.PASSWORD_SECRET).toString();
    }
}
exports.UserUtils = UserUtils;
exports.useUserUtils = new UserUtils();
