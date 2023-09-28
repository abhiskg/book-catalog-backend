import type { RequestHandler } from "express";
import { paginationFields } from "../../../constants/pagination.constant";
import ApiError from "../../../errors/ApiError";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import catchAsyncError from "../../middlewares/catchAsyncError";
import { BookService } from "./book.service";
import { bookFilterableFields } from "./book.constant";

const insertToDB: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await BookService.insertToDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    message: "Book created successfully",
    success: true,
    data: result,
  });
});

const getAllFromDB: RequestHandler = catchAsyncError(async (req, res) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await BookService.getAllFromDB(filters, paginationOptions);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book retrieved successfully!",
    data: result.data,
    meta: result.meta,
  });
});

const getBooksByCategory: RequestHandler = catchAsyncError(async (req, res) => {
  const categoryId = req.params.categoryId;
  const paginationOptions = pick(req.query, paginationFields);

  const result = await BookService.getBooksByCategory(
    categoryId,
    paginationOptions
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book retrieved successfully!",
    data: result.data,
    meta: result.meta,
  });
});

const getByIdFromDB: RequestHandler = catchAsyncError(
  async (req, res, next) => {
    const result = await BookService.getByIdFromDB(req.params.id);

    if (!result) {
      return next(new ApiError(404, "Faculty not found"));
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book retrieved successfully!",
      data: result,
    });
  }
);

const updateIntoDB: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await BookService.updateIntoDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book Updated successfully!",
    data: result,
  });
});

const deleteFromDB: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await BookService.deleteFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book deleted successfully!",
    data: result,
  });
});

export const BookController = {
  insertToDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  getBooksByCategory,
};
