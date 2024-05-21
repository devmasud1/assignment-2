import { Request, Response } from "express";
import { Product } from "./product.model";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);

  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};
const getAllProduct = async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProduct();

  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getAllProduct,
};
