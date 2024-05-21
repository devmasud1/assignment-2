import { Request, Response } from "express";
import { Product } from "./product.model";
import { ProductServices } from "./product.service";

//created new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.createProduct(productData);

    res.json({
      success: true,
      message: "Product created successfully!",
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

//get all product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProduct();

    res.json({
      success: true,
      message: "Products fetched successfully!",
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

//get single product by Id
// const getSingleProduct = async (req: Request, res: Response) => {
//   try {
//     const { productId } = req.params;
//     const result = await ProductServices.getSingleProduct(productId);

//     res.json({
//       success: true,
//       message: "Product fetched successfully!",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Something went wrong!",
//       error,
//     });
//   }
// };
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
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
export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
};
