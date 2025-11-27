import {
  object,
  string,
  minLength,
  pipe,
  safeParse,
  InferInput,
  InferOutput,
  union,
  literal,
} from "valibot";
import { NextFunction, Request, Response } from "express";
import { Role } from "../../../generated/prisma/enums";

const loginSchema = object({
  username: pipe(
    string(),
    minLength(3, "username required, and should be more than 2")
  ),
  password: pipe(
    string(),
    minLength(8, "password is required and must be more than 8")
  ),
  role: union(
    [literal(Role.ACCOUNTANT), literal(Role.ADMIN), literal(Role.SHAREHOLDER)],
    "role must be either ACCOUNTANT, ADMIN, SHAREHOLDER"
  ),
});

export type LoginInput = InferInput<typeof loginSchema>;
export type LoginOutput = InferOutput<typeof loginSchema>;

export function validateLogin(req: Request, res: Response, next: NextFunction) {
  const parsed = safeParse(loginSchema, req.body);
  if (!parsed.success) {
    return next({
      status: 400,
      message: parsed.issues?.[0].message || "Invalid request body",
    });
  }

  req.body = parsed.output as LoginOutput;
  next();
}
