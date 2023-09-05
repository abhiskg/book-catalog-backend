import express from "express";
import { BookRoutes } from "../modules/book/book.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { OrderRoutes } from "../modules/order/order.route";
import { UserRoutes } from "../modules/user/user.route";

const router = express.Router();

router.use("/users", UserRoutes);
router.use("/books", BookRoutes);
router.use("/categories", CategoryRoutes);
router.use("/orders", OrderRoutes);

export const RootRoute = router;
