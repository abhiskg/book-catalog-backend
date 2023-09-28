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
exports.CategoryController = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const catchAsyncError_1 = __importDefault(require("../../middlewares/catchAsyncError"));
const category_service_1 = require("./category.service");
const insertToDB = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryService.insertToDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Category created successfully",
        data: result,
    });
}));
const getAllFromDB = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryService.getAllFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Category retrieved successfully!",
        data: result,
    });
}));
const getByIdFromDB = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryService.getByIdFromDB(req.params.id);
    if (!result) {
        return next(new ApiError_1.default(404, "Faculty not found"));
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Category retrieved successfully!",
        data: result,
    });
}));
const updateIntoDB = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryService.updateIntoDB(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Category Updated successfully!",
        data: result,
    });
}));
const deleteFromDB = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryService.deleteFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Category deleted successfully!",
        data: result,
    });
}));
exports.CategoryController = {
    insertToDB,
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
