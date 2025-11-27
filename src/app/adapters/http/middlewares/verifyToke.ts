import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

interface MyJwtPayload extends JwtPayload {
  role: string;
}
declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: number;
      role: string;
    };
  }
}

const key = process.env.TOKEN;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    console.log("Token didn't come from front end verifyToken.ts");

    return next({
      statusCode: 401,
      message: "Unauthorized",
    });
  }
  try {
    if (!key) {
      throw new Error("TOKEN not found in .env.local");
    }
    const decoded: string | JwtPayload = jwt.verify(
      token,
      key!
    ) as MyJwtPayload;
    if (!decoded.id || !decoded.role) {
      throw new Error("See you in catch block");
    }

    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    next();
  } catch (error) {
    next({ statusCode: 401, message: "Unauthorized" });
  }
};

export default verifyToken;
