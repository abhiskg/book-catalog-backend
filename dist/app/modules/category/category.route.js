"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_enum_1 = require("../../../enums/user.enum");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const category_controller_1 = require("./category.controller");
const router = express_1.default.Router();
router.get("/:id", category_controller_1.CategoryController.getByIdFromDB);
router.get("/", category_controller_1.CategoryController.getAllFromDB);
router.post("/create-category", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), category_controller_1.CategoryController.insertToDB);
router.patch("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), category_controller_1.CategoryController.updateIntoDB);
router.delete("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), category_controller_1.CategoryController.deleteFromDB);
exports.CategoryRoutes = router;
