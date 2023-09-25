"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_enum_1 = require("../../../enums/user.enum");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.get("/:id", book_controller_1.BookController.getByIdFromDB);
router.get("/", book_controller_1.BookController.getAllFromDB);
router.post("/create-book", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.insertToDB);
router.patch("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.updateIntoDB);
router.delete("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.deleteFromDB);
exports.BookRoutes = router;
