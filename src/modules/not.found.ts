import { Request, Response, NextFunction } from "express";

const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
};

export default notFoundRoute;
