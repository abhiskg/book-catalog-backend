import type { User } from "@prisma/client";
import config from "../../../config";
import ApiError from "../../../errors/ApiError";
import { JwtHelper } from "../../../helpers/jwt.helper";
import { prisma } from "../../../server";

const signUp = async (data: User) => {
  const result = await prisma.user.create({ data });
  return result;
};
const signIn = async (data: User) => {
  const user = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found!");
  }

  if (user.password !== data.password) {
    throw new ApiError(400, "Invalid user or password");
  }

  const tokenPayload = {
    id: user.id,
    role: user.role,
  };

  const token = JwtHelper.generateToken(
    tokenPayload,
    config.jwt.access_secret,
    config.jwt.access_expires_in
  );

  return token;
};

export const AuthService = {
  signUp,
  signIn,
};
