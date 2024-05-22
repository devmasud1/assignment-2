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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const product_service_1 = require("../product/product.service");
const mongoose_1 = __importDefault(require("mongoose"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        // Check if the productId exists in DB
        const product = yield product_service_1.ProductServices.getSingleProductFromDB(orderData.productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }
        //check the ordered quantity
        if (orderData.quantity > product.inventory.quantity) {
            return res.status(400).json({
                success: false,
                message: "Insufficient quantity available in inventory",
            });
        }
        //create new order
        const result = yield order_service_1.OrderServices.createOrder(orderData);
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof mongoose_1.default.Error.CastError) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error,
        });
    }
});
const getAllOrderOrByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        let result;
        if (email) {
            if (typeof email !== "string") {
                return res.status(400).json({
                    success: false,
                    message: "Invalid email provided in the query parameter.",
                });
            }
            result = yield order_service_1.OrderServices.getOrderByEmail(email);
        }
        else {
            result = yield order_service_1.OrderServices.getAllOrderFromDB();
        }
        res.json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error,
        });
    }
});
exports.OrderController = {
    createOrder,
    getAllOrderOrByEmail,
};
