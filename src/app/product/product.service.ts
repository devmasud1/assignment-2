import { TProduct } from "./product.interface";
import { Product } from "./product.model";

//check productExists
const productExists = async (productId: string) => {
  const product = await Product.findById(productId);
  return !!product;
};

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
  const result = await Product.findById(id);
  return result;
};

// update single product
const updateProduct = async (id: string, updatedFields: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, updatedFields, {
    new: true,
  });
  return result;
};

//delete single product
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

//search product by name
const searchProductFromDB = async (searchTerm: string) => {
  const result = await Product.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProductFromDB,
  updateProduct,
  deleteProductFromDB,
  searchProductFromDB,
  productExists,
};
