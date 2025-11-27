import { Request, Response, NextFunction } from "express";
import { container } from "../../../../container";
import { generateToken } from "../middlewares/generateToken";
export class loginController {
  //   login the user
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password, role } = req.body;

      const loginPayload = {
        username: username,
        password: password,
        role: role,
      };
      const user = await container.LoginAuthService.login(loginPayload);
      if (
        !user ||
        !user.password ||
        !user.phone ||
        !user.role ||
        !user.username
      ) {
        return next({ statusCode: 401, message: "Invalid credentials" });
      }

      const tokenPayload = {
        phone: user.phone,
        role: user.role,
      };
      const token = await generateToken(tokenPayload);
      if (!token) {
        console.log("Token generation failed", token);
        return next({});
      }
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      res.status(200).json({
        status: true,
        message: "user logged in",
      });
    } catch (error) {
      next(error);
    }
  }
}
