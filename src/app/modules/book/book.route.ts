import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user.enum";
import auth from "../../middlewares/auth";
import { BookController } from "./book.controller";

const router = express.Router();

router.get("/:id", BookController.getByIdFromDB);
router.get("/:categoryId/category", BookController.getBooksByCategory);
router.get("/", BookController.getAllFromDB);

router.post(
  "/create-book",
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.insertToDB
);

router.patch("/:id", auth(ENUM_USER_ROLE.ADMIN), BookController.updateIntoDB);

router.delete("/:id", auth(ENUM_USER_ROLE.ADMIN), BookController.deleteFromDB);

export const BookRoutes = router;
