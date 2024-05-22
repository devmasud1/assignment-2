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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = orderData;
    //check the ordered product exists
    const product = yield product_model_1.Product.findById(productId);
    if (!product) {
        throw new Error("order not found");
    }
    //check if the ordered quantity
    if (product.inventory.quantity < quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }
    //deduct the ordered quantity from inventory
    product.inventory.quantity -= quantity;
    //update the inStock property based on the inventory quantity
    product.inventory.inStock = product.inventory.quantity > 0;
    //save the product
    yield product.save();
    //create new order
    const result = yield order_model_1.Order.create(orderData);
    return result;
});
const getAllOrderFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find();
    return result;
});
const getOrderByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find({ email });
    return result;
});
exports.OrderServices = {
    createOrder,
    getAllOrderFromDB,
    getOrderByEmail,
};
