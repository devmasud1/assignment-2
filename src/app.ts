import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/product/product.router";
import { OrderRoutes } from "./modules/order/order.routes";
import notFoundRoute from "./modules/not.found";
import config from "./config";
const app = express();

//parser
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

//unmatched routes
app.use(notFoundRoute);

app.get("/", (req: Request, res: Response) => {
  res.send(`Server is running on port ${config.port}`);
});

export default app;
