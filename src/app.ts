import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/product/product.router";
const app = express();

//parser
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
