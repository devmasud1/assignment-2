import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";

//created new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const { error } = productValidationSchema.validate(productData);

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation error!",
        error: error.details.map((detail) => detail.message),
      });
    }

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

//get all product & search product by name
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    let result;
    if (searchTerm) {
      result = await ProductServices.searchProductFromDB(searchTerm as string);
    } else {
      result = await ProductServices.getAllProduct();
    }

    res.json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : "Products fetched successfully!",
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

// update single product
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedFields = req.body;

    // Validate the incoming data against the product validation schema
    const { error: validationError } = productValidationSchema.validate(
      updatedFields,
      { abortEarly: false }
    );
    if (validationError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        error: validationError.details.map((err) => err.message),
      });
    }

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product Id is required!",
      });
    }

    const updatedProduct = await ProductServices.updateProduct(
      productId,
      updatedFields
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

//delete a single product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    // const { productId } = req.params;
    // const result = await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
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
  updateSingleProduct,
  deleteProduct,
};
