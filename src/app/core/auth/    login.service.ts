import type { LoginAuthPort, LoginInterface } from "../../ports/login.port";

export class LoginAuthService {
  constructor(private accountantRepo: LoginAuthPort) {}

  async login(payload: LoginInterface) {
    const user = await this.accountantRepo.findByUsername(
      payload.username,
      payload.role
    );

    return user;
  }
}
