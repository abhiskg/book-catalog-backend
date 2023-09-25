import type { RequestHandler } from "express";
import sendResponse from "../../../shared/sendResponse";
import catchAsyncError from "../../middlewares/catchAsyncError";
import { AuthService } from "./auth.service";

const signUp: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await AuthService.signUp(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "User created successfully!",
  });
});
const signIn: RequestHandler = catchAsyncError(async (req, res) => {
  const result = await AuthService.signIn(req.body);

  res.status(200).json({
    success: true,
    message: " User signin successfully!",
    token: result,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "User created successfully!",
  });
});

export const AuthController = {
  signUp,
  signIn,
};
