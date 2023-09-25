"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleClientError = (error) => {
    var _a;
    let errorMessages = [];
    let message = "";
    let statusCode = 400;
    if (error.code === "P2025") {
        message = ((_a = error.meta) === null || _a === void 0 ? void 0 : _a.cause) || "Record not found!";
        statusCode = 404;
        errorMessages = [
            {
                path: "",
                message,
            },
        ];
    }
    else if (error.code === "P2003") {
        if (error.message.includes("delete()` invocation:")) {
            message = "Delete failed";
            errorMessages = [
                {
                    path: "",
                    message,
                },
            ];
        }
    }
    return {
        statusCode,
        message,
        errorMessages,
    };
};
exports.default = handleClientError;
