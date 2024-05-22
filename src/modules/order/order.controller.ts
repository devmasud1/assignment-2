import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { Order } from "./order.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrder(orderData);
    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await Order.find();
    res.json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

const getAllProduct = async () => {};

export const OrderController = {
  createOrder,
  getAllOrder,
};
