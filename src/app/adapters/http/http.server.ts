import { Express } from "express";
import verifyToken from "./middlewares/verifyToke";
import loginRoute from "./routes/login.route";
export const setupHttpServer = (app: Express) => {
  app.use("/login", loginRoute);
  app.use("/api", verifyToken);
};
