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
//Create
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = new Order_1.default(req.body);
    try {
        const savedOrder = yield newOrder.save();
        res.status(200).json(savedOrder);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createOrder = createOrder;
//Update Order
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const getOrder = yield Order_1.default.findByIdAndUpdate(id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(getOrder);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateOrder = updateOrder;
//Delete
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Order_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json('Order successfully deleted');
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteOrder = deleteOrder;
//Get user order
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const order = yield Order_1.default.find({ userId });
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getOrder = getOrder;
//Get all Orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield Order_1.default.find().sort({ id: -1 });
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllOrders = getAllOrders;
