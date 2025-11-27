import { LoginPrismaAdapter } from "./app/adapters/db/login.prisma.adapter";
import { LoginAuthService } from "./app/core/auth/    login.service";
export const container = {
  LoginAuthService: new LoginAuthService(LoginPrismaAdapter),
};
