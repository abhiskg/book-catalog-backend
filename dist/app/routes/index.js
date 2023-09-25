"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const book_route_1 = require("../modules/book/book.route");
const category_route_1 = require("../modules/category/category.route");
const order_route_1 = require("../modules/order/order.route");
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
router.use("/auth", auth_route_1.AuthRoutes);
router.use("/users", user_route_1.UserRoutes);
router.use("/books", book_route_1.BookRoutes);
router.use("/categories", category_route_1.CategoryRoutes);
router.use("/orders", order_route_1.OrderRoutes);
exports.RootRoute = router;
