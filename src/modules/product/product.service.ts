import { TProduct } from "./product.interface";
import { Product } from "./product.model";

//added product
const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};

//get all product
const getAllProduct = async () => {
  const result = await Product.find();
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
};
