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
exports.getAllCarts = exports.getCart = exports.deleteCart = exports.updateCart = exports.createCart = void 0;
const Cart_1 = __importDefault(require("../models/Cart"));
const CRUD_1 = __importDefault(require("../utils/CRUD"));
//Create
const createCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.create(req, res, Cart_1.default);
});
exports.createCart = createCart;
//Update cart
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.update(req, res, Cart_1.default);
});
exports.updateCart = updateCart;
//Delete
const deleteCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.delete(req, res, Cart_1.default);
});
exports.deleteCart = deleteCart;
//Get a cart
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.getOne(req, res, Cart_1.default);
});
exports.getCart = getCart;
//Get all carts
const getAllCarts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.getAll(null, res, Cart_1.default);
});
exports.getAllCarts = getAllCarts;
