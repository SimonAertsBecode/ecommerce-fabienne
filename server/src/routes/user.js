"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
userRoutes.get('/usertest', (_, res) => {
    res.send('usertest good');
});
exports.default = userRoutes;
