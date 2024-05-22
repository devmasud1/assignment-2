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

const getAllOrderOrByEmail = async (req: Request, res: Response) => {
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
      result = await OrderServices.getOrderByEmail(email);
    } else {
      result = await OrderServices.getAllOrderFromDB();
    }
    res.json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrderOrByEmail,
};
