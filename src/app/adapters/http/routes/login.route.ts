import Router from "express";
import { loginController } from "../controllers/login.auth.controller";
import { validateLogin } from "../../../schema/login.schema";
const router = Router();
const controller = new loginController();
router.post("/", validateLogin, (req, res, next) =>
  controller.login(req, res, next)
);
export default router;
