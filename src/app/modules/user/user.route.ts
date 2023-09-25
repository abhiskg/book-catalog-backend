import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user.enum";
import auth from "../../middlewares/auth";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.getByIdFromDB);
router.get("/", auth(ENUM_USER_ROLE.ADMIN), UserController.getAllFromDB);

router.patch("/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.updateIntoDB);

router.delete("/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.deleteFromDB);

export const UserRoutes = router;
