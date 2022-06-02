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
exports.getAllUsers = exports.getUser = exports.deleteUser = exports.updatedUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const CRUD_1 = __importDefault(require("../utils/CRUD"));
//*Import class
const UserUtils_1 = require("../utils/UserUtils");
//update user
const updatedUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { password } = req.body;
    if (password) {
        password = UserUtils_1.useUserUtils.encryptPassword(password);
    }
    CRUD_1.default.update(req, res, User_1.default);
});
exports.updatedUser = updatedUser;
//delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.delete(req, res, User_1.default);
});
exports.deleteUser = deleteUser;
//get one specific user
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.getOne(req, res, User_1.default);
});
exports.getUser = getUser;
//get all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.getAll(req, res, User_1.default);
});
exports.getAllUsers = getAllUsers;
