import type { RequestHandler } from "express";
import ApiError from "../../../errors/ApiError";
import sendResponse from "../../../shared/sendResponse";
import catchAsyncError from "../../middlewares/catchAsyncError";
import { UserService } from "./user.service";

const getAllFromDB: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await UserService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User retrieved successfully!",
    data: result,
  });
});

const getByIdFromDB: RequestHandler = catchAsyncError(
  async (req, res, next) => {
    const result = await UserService.getByIdFromDB(req.params.id);

    if (!result) {
      return next(new ApiError(404, "Faculty not found"));
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User retrieved successfully!",
      data: result,
    });
  }
);

const updateIntoDB: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await UserService.updateIntoDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User Updated successfully!",
    data: result,
  });
});

const deleteFromDB: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await UserService.deleteFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User deleted successfully!",
    data: result,
  });
});

export const UserController = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
