import type { RequestHandler } from "express";
import ApiError from "../../../errors/ApiError";
import sendResponse from "../../../shared/sendResponse";
import catchAsyncError from "../../middlewares/catchAsyncError";
import { OrderService } from "./order.service";

const insertToDB: RequestHandler = catchAsyncError(async (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = req.user as any;
  const result = await OrderService.insertToDB(user?.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});

const getAllFromDB: RequestHandler = catchAsyncError(async (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = req.user as any;
  const result = await OrderService.getAllFromDB(user?.id, user?.role);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Order retrieved successfully!",
    data: result,
  });
});

const getByIdFromDB: RequestHandler = catchAsyncError(
  async (req, res, next) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = req.user as any;
    const result = await OrderService.getByIdFromDB(
      req.params.id,
      user?.id,
      user?.role
    );

    if (!result) {
      return next(new ApiError(404, "Faculty not found"));
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Order retrieved successfully!",
      data: result,
    });
  }
);

export const OrderController = {
  insertToDB,
  getAllFromDB,
  getByIdFromDB,
};
