"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const pagination_constant_1 = require("../../../constants/pagination.constant");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const catchAsyncError_1 = __importDefault(require("../../middlewares/catchAsyncError"));
const book_service_1 = require("./book.service");
const book_constant_1 = require("./book.constant");
const insertToDB = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.insertToDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Book created successfully",
        success: true,
        data: result,
    });
}));
const getAllFromDB = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, book_constant_1.bookFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_constant_1.paginationFields);
    const result = yield book_service_1.BookService.getAllFromDB(filters, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Book retrieved successfully!",
        data: result.data,
        meta: result.meta,
    });
}));
const getBooksByCategory = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.params.categoryId;
    const paginationOptions = (0, pick_1.default)(req.query, pagination_constant_1.paginationFields);
    const result = yield book_service_1.BookService.getBooksByCategory(categoryId, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Book retrieved successfully!",
        data: result.data,
        meta: result.meta,
    });
}));
const getByIdFromDB = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getByIdFromDB(req.params.id);
    if (!result) {
        return next(new ApiError_1.default(404, "Faculty not found"));
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Book retrieved successfully!",
        data: result,
    });
}));
const updateIntoDB = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.updateIntoDB(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Book Updated successfully!",
        data: result,
    });
}));
const deleteFromDB = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.deleteFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Book deleted successfully!",
        data: result,
    });
}));
exports.BookController = {
    insertToDB,
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
    getBooksByCategory,
};
