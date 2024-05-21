import { TProduct } from "./product.interface";
import { Product } from "./product.model";

//created new product
const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};

//get all product
const getAllProduct = async () => {
  const result = await Product.find();
  return result;
};

//get single product by id
const getSingleProductFromDB = async (id: string) => {
  console.log(id);
  const result = await Product.findById(id);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProductFromDB,
};
