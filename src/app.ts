import express, { Request, Response } from "express";
import { ProductRoutes } from "./app/product/product.router";
import { OrderRoutes } from "./app/order/order.routes";
import notFoundRoute from "./app/not.found";
import config from "./config";
const app = express();

//parser
app.use(express.json());

// root route message
app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Welcome to the Next Level Assignment-2!",
  });
});

//routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

//unmatched routes
app.use(notFoundRoute);

app.get("/", (req: Request, res: Response) => {
  res.send(`Server is running on port ${config.port}`);
});

export default app;
