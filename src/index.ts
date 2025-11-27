import express, { Express } from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import errorHandler from "./app/adapters/http/middlewares/errorHandler";
import { setupHttpServer } from "./app/adapters/http/http.server";
dotenv.config();
const FRONTEND_URL = process.env.FRONTEND_URL;
if (!FRONTEND_URL) {
  throw new Error("FrontEnd url not found");
}
const app: Express = express();
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

setupHttpServer(app);

app.use(errorHandler);

app.listen(3000, "0.0.0.0", () => {
  console.log("Server on port 3000 🚀");
});
