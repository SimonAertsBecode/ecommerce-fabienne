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
exports.getAllOrders = exports.getOrder = exports.deleteOrder = exports.updateOrder = exports.createOrder = void 0;
const Order_1 = __importDefault(require("../models/Order"));
const CRUD_1 = __importDefault(require("../utils/CRUD"));
//Create
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.create(req, res, Order_1.default);
});
exports.createOrder = createOrder;
//Update Order
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.update(req, res, Order_1.default);
});
exports.updateOrder = updateOrder;
//Delete
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.delete(req, res, Order_1.default);
});
exports.deleteOrder = deleteOrder;
//Get user order
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.getOne(req, res, Order_1.default);
});
exports.getOrder = getOrder;
//Get all Orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.getAll(req, res, Order_1.default);
});
exports.getAllOrders = getAllOrders;
