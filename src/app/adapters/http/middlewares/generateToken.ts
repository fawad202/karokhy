import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env.local") });

const key = process.env.TOKEN;
type Payload = {
  phone: string;
  role: string;
};

export const generateToken = async (payload: Payload) => {
  if (!key) {
    throw new Error("Token not found");
  }
  const token = jwt.sign(payload, key, {
    expiresIn: "7h",
    algorithm: "HS512",
  });

  return token;
};
