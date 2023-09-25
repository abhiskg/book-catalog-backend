"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (error) => {
    const errorMessages = error.issues.map((issue) => {
        return {
            message: issue.message,
            path: issue.path[issue.path.length - 1],
        };
    });
    return {
        statusCode: 400,
        message: "Validation Error",
        errorMessages,
    };
};
exports.default = handleZodError;
