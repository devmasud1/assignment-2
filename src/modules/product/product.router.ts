import express, { Request, Response } from "express";
import { Product } from "./product.model";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProduct);
router.get("/:productId", ProductController.getSingleProduct);
router.put("/:productId", ProductController.updateSingleProduct);
router.delete("/:productId", ProductController.deleteProduct);

export const ProductRoutes = router;
