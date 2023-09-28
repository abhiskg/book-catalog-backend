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
exports.AuthService = void 0;
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwt_helper_1 = require("../../../helpers/jwt.helper");
const server_1 = require("../../../server");
const signUp = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield server_1.prisma.user.create({ data });
    return result;
});
const signIn = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield server_1.prisma.user.findFirst({
        where: {
            email: data.email,
        },
    });
    if (!user) {
        throw new ApiError_1.default(404, "User not found!");
    }
    if (user.password !== data.password) {
        throw new ApiError_1.default(400, "Invalid user or password");
    }
    const tokenPayload = {
        id: user.id,
        role: user.role,
    };
    const token = jwt_helper_1.JwtHelper.generateToken(tokenPayload, config_1.default.jwt.access_secret, config_1.default.jwt.access_expires_in);
    return token;
});
exports.AuthService = {
    signUp,
    signIn,
};
