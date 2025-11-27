export interface LoginInterface {
  username: string;
  password: string;
  role: string;
}

export interface LoginAuthPort {
  // find existing
  findByUsername(
    username: string,
    role: string
  ): Promise<{
    username: string;
    role: string;
    password: string;
    phone: string;
  } | null>;
}
