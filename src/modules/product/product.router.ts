import express, { Request, Response } from "express";
import { Product } from "./product.model";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProduct);

export const ProductRoutes = router;
