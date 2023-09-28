import { UserRole } from "@prisma/client";
import { prisma } from "../../../server";
import type { IOrderedBook } from "./order.interface";

const insertToDB = async (
  userId: string,
  payload: { orderedBooks: IOrderedBook[] }
) => {
  const result = await prisma.order.create({
    data: {
      userId,
      orderedBooks: payload?.orderedBooks,
    },
  });

  return result;
};

const getAllFromDB = async (userId: string, role: string) => {
  let result;
  if (role === UserRole.customer) {
    result = await prisma.order.findMany({
      where: {
        user: {
          id: userId,
        },
      },
    });
  } else {
    result = await prisma.order.findMany();
  }

  return result;
};

const getByIdFromDB = async (id: string, userId: string, role: string) => {
  let result;

  if (role === "customer") {
    result = await prisma.order.findUnique({
      where: {
        id,
        userId,
      },
    });
  } else {
    result = await prisma.order.findUnique({
      where: {
        id,
      },
    });
  }
  return result;
};

export const OrderService = {
  insertToDB,
  getAllFromDB,
  getByIdFromDB,
};
