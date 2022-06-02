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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
});
console.log(process.env.STRIPE_SECRET_KEY);
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method === 'POST') {
        try {
            const { amount } = req.body;
            // Psst. For production-ready applications we recommend not using the
            // amount directly from the client without verifying it first. This is to
            // prevent bad actors from changing the total amount on the client before
            // it gets sent to the server. A good approach is to send the quantity of
            // a uniquely identifiable product and calculate the total price server-side.
            // Then, you would only fulfill orders using the quantity you charged for.
            const paymentIntent = yield stripe.paymentIntents.create({
                amount,
                currency: 'eur',
            });
            res.status(200).send(paymentIntent.client_secret);
        }
        catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    }
    else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
});
