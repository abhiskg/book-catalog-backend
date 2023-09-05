import type { Category } from "@prisma/client";
import { prisma } from "../../../server";

const insertToDB = async (data: Category) => {
  const result = await prisma.category.create({ data });
  return result;
};

const getAllFromDB = async () => {
  const result = await prisma.category.findMany();

  return result;
};

const getByIdFromDB = async (id: string) => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateIntoDB = async (id: string, payload: Partial<Category>) => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CategoryService = {
  insertToDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
