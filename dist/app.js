"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_router_1 = require("./app/product/product.router");
const order_routes_1 = require("./app/order/order.routes");
const not_found_1 = __importDefault(require("./app/not.found"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
// root route message
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Next Level Assignment-2!",
    });
});
//routes
app.use("/api/products", product_router_1.ProductRoutes);
app.use("/api/orders", order_routes_1.OrderRoutes);
//unmatched routes
app.use(not_found_1.default);
app.get("/", (req, res) => {
    res.send(`Server is running on port ${config_1.default.port}`);
});
exports.default = app;
