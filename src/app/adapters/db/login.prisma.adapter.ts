import { prisma } from "../../../libs/prisma.client";
import type { LoginAuthPort } from "../../ports/login.port";

export const LoginPrismaAdapter: LoginAuthPort = {
  // find existing one

  async findByUsername(username, role) {
    let res;
    switch (role) {
      case "ADMIN":
        res = await prisma.admin.findUnique({
          where: { username },
          select: { phone: true, username: true, role: true, password: true },
        });
        break;
      case "ACCOUNTANT":
        res = await prisma.accountant.findUnique({
          where: { username },
          select: { phone: true, username: true, role: true, password: true },
        });
        break;
      case "SHAREHOLDER":
        res = await prisma.shareholder.findUnique({
          where: { username },
          select: { phone: true, username: true, role: true, password: true },
        });
        break;
      default:
        throw new Error("Invalid user role");
        break;
    }
    return res;
  },
};
