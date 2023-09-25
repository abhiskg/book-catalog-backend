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
const config_1 = __importDefault(require("../../config"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const jwt_helper_1 = require("../../helpers/jwt.helper");
const auth = (...requireRoles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        throw new ApiError_1.default(401, "You are not authorized");
    }
    try {
        const verifiedToken = jwt_helper_1.JwtHelper.verifyToken(token, config_1.default.jwt.access_secret);
        req.user = verifiedToken;
        if (requireRoles.length > 0 &&
            !requireRoles.includes(verifiedToken.role)) {
            throw new ApiError_1.default(403, "Forbidden");
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = auth;
