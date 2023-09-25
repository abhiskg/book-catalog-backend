"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_enum_1 = require("../../../enums/user.enum");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.get("/:id", order_controller_1.OrderController.getByIdFromDB);
router.get("/", order_controller_1.OrderController.getAllFromDB);
router.post("/create-faculty", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), order_controller_1.OrderController.insertToDB);
router.patch("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), order_controller_1.OrderController.updateIntoDB);
router.delete("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), order_controller_1.OrderController.deleteFromDB);
exports.OrderRoutes = router;
