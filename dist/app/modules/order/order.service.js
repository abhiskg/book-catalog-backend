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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const client_1 = require("@prisma/client");
const server_1 = require("../../../server");
const insertToDB = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield server_1.prisma.order.create({
        data: {
            userId,
            orderedBooks: payload === null || payload === void 0 ? void 0 : payload.orderedBooks,
        },
    });
    return result;
});
const getAllFromDB = (userId, role) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (role === client_1.UserRole.customer) {
        result = yield server_1.prisma.order.findMany({
            where: {
                user: {
                    id: userId,
                },
            },
        });
    }
    else {
        result = yield server_1.prisma.order.findMany();
    }
    return result;
});
const getByIdFromDB = (id, userId, role) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (role === "customer") {
        result = yield server_1.prisma.order.findUnique({
            where: {
                id,
                userId,
            },
        });
    }
    else {
        result = yield server_1.prisma.order.findUnique({
            where: {
                id,
            },
        });
    }
    return result;
});
exports.OrderService = {
    insertToDB,
    getAllFromDB,
    getByIdFromDB,
};
