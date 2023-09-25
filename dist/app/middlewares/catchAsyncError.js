"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsyncError = (func) => (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next);
};
exports.default = catchAsyncError;
