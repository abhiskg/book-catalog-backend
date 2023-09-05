import type { RequestHandler } from "express";
import ApiError from "../../../errors/ApiError";
import sendResponse from "../../../shared/sendResponse";
import catchAsyncError from "../../middlewares/catchAsyncError";
import { CategoryService } from "./category.service";

const insertToDB: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await CategoryService.insertToDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});

const getAllFromDB: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await CategoryService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Category retrieved successfully!",
    data: result,
  });
});

const getByIdFromDB: RequestHandler = catchAsyncError(
  async (req, res, next) => {
    const result = await CategoryService.getByIdFromDB(req.params.id);

    if (!result) {
      return next(new ApiError(404, "Faculty not found"));
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Category retrieved successfully!",
      data: result,
    });
  }
);

const updateIntoDB: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await CategoryService.updateIntoDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Category Updated successfully!",
    data: result,
  });
});

const deleteFromDB: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await CategoryService.deleteFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Category deleted successfully!",
    data: result,
  });
});

export const CategoryController = {
  insertToDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
