import { NextFunction, Request, Response } from "express";

const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";
  res.status(statusCode).json({
    message: message,
  });
};
export default errorHandler;
