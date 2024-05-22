import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/product/product.router";
import { OrderRoutes } from "./modules/order/order.routes";
const app = express();

//parser
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hey next level developer!");
});

export default app;
