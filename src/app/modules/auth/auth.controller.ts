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
  });
});

export const AuthController = {
  signUp,
};
