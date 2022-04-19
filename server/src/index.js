"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("./routes/user"));
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
app.use('/api/user', user_1.default);
app.listen(process.env.PORT || 5000, () => {
    console.log('App is running on port 5000');
});
