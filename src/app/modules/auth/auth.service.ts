import type { User } from "@prisma/client";
import { prisma } from "../../../server";

const signUp = async (data: User) => {
  const result = await prisma.user.create({ data });
  return result;
};

export const AuthService = {
  signUp,
};
