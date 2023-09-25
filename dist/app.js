"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = require("./app/routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// api routes
app.use("/api/v1", routes_1.RootRoute);
// global error handler
app.use(globalErrorHandler_1.default);
// handle not found
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "This Route doesn't exist",
        errorMessages: [
            {
                path: req.originalUrl,
                message: "This API Route doesn't exist",
            },
        ],
    });
});
exports.default = app;
