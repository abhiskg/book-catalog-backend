import type { User } from "@prisma/client";
import { prisma } from "../../../server";

const getAllFromDB = async () => {
  const result = await prisma.user.findMany();

  return result;
};

const getByIdFromDB = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateIntoDB = async (id: string, payload: Partial<User>) => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const UserService = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
