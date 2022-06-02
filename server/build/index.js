"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
//*Routes import
const auth_1 = __importDefault(require("./routes/auth"));
const user_1 = __importDefault(require("./routes/user"));
const product_1 = __importDefault(require("./routes/product"));
const cart_1 = __importDefault(require("./routes/cart"));
const order_1 = __importDefault(require("./routes/order"));
const route_1 = __importDefault(require("./stripe/route"));
const app = (0, express_1.default)();
dotenv_1.default.config();
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => {
    console.log('DBConnection successfull');
})
    .catch((err) => {
    console.log(err);
});
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
}));
app.use(express_1.default.json());
app.use('/api/auth', auth_1.default);
app.use('/api/users', user_1.default);
app.use('/api/products', product_1.default);
app.use('/api/carts', cart_1.default);
app.use('/api/orders', order_1.default);
app.use('/api/pay', route_1.default);
app.listen(process.env.PORT || 5000, () => {
    console.log('App is running on port 5000');
});
