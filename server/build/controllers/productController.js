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
exports.getAllProducts = exports.getProduct = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const CRUD_1 = __importDefault(require("../utils/CRUD"));
//Create product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.create(req, res, Product_1.default);
});
exports.createProduct = createProduct;
//Update
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.update(req, res, Product_1.default);
});
exports.updateProduct = updateProduct;
//Delete
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.delete(req, res, Product_1.default);
});
exports.deleteProduct = deleteProduct;
//Get a product
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.getOne(req, res, Product_1.default);
});
exports.getProduct = getProduct;
//Get all products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    CRUD_1.default.getAll(req, res, Product_1.default);
});
exports.getAllProducts = getAllProducts;
