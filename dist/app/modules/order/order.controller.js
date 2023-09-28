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
exports.OrderController = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const catchAsyncError_1 = __importDefault(require("../../middlewares/catchAsyncError"));
const order_service_1 = require("./order.service");
const insertToDB = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = req.user;
    const result = yield order_service_1.OrderService.insertToDB(user === null || user === void 0 ? void 0 : user.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        data: result,
    });
}));
const getAllFromDB = (0, catchAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = req.user;
    const result = yield order_service_1.OrderService.getAllFromDB(user === null || user === void 0 ? void 0 : user.id, user === null || user === void 0 ? void 0 : user.role);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Order retrieved successfully!",
        data: result,
    });
}));
const getByIdFromDB = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = req.user;
    const result = yield order_service_1.OrderService.getByIdFromDB(req.params.id, user === null || user === void 0 ? void 0 : user.id, user === null || user === void 0 ? void 0 : user.role);
    if (!result) {
        return next(new ApiError_1.default(404, "Faculty not found"));
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Order retrieved successfully!",
        data: result,
    });
}));
exports.OrderController = {
    insertToDB,
    getAllFromDB,
    getByIdFromDB,
};
