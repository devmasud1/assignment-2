import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (orderData: TOrder) => {
  const { productId, quantity } = orderData;

  //check the ordered product exists
  const product = await Product.findById(productId);
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
  await product.save();

  //create new order
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
