import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user.enum";
import auth from "../../middlewares/auth";
import { OrderController } from "./order.controller";

const router = express.Router();

router.get("/:id", OrderController.getByIdFromDB);
router.get("/", OrderController.getAllFromDB);

router.post(
  "/create-faculty",
  auth(ENUM_USER_ROLE.ADMIN),
  OrderController.insertToDB
);

router.patch("/:id", auth(ENUM_USER_ROLE.ADMIN), OrderController.updateIntoDB);

router.delete("/:id", auth(ENUM_USER_ROLE.ADMIN), OrderController.deleteFromDB);

export const OrderRoutes = router;
