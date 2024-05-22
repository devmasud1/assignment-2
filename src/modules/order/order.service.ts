import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await Order.find();
  return result;
};

const getOrderByEmail = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrderFromDB,
  getOrderByEmail,
};
