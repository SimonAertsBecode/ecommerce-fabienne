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
const UserUtils_1 = require("./UserUtils");
//**Models import
const Cart_1 = __importDefault(require("../models/Cart"));
const Order_1 = __importDefault(require("../models/Order"));
class CRUD extends UserUtils_1.UserUtils {
    constructor() {
        super();
    }
    create(req, res, model) {
        return __awaiter(this, void 0, void 0, function* () {
            const newModel = new model(req.body);
            try {
                const savedModel = yield newModel.save();
                res.status(200).json(savedModel);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    update(req, res, model) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const getItem = yield model.findByIdAndUpdate(id, {
                    $set: req.body,
                }, { new: true });
                res.status(200).json(getItem);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    delete(req, res, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield model.findByIdAndDelete(req.params.id);
                res.status(200).json('cart successfully deleted');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getOne(req, res, model) {
        return __awaiter(this, void 0, void 0, function* () {
            if (model === Order_1.default || Cart_1.default) {
                //Var declaration to be able to access it outside of the if()scope
                var { userId: rightId } = req.params;
            }
            else {
                var { id: rightId } = req.params;
            }
            try {
                const item = yield model.findOne({ rightId });
                res.status(200).json(item);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getAll(_, res, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allItems = yield model.find().sort({ id: -1 });
                res.status(200).json(allItems);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
const useCRUD = new CRUD();
exports.default = useCRUD;
