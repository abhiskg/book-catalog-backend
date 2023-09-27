import { type RequestHandler } from "express";
import sendResponse from "../../../shared/sendResponse";
import catchAsyncError from "../../middlewares/catchAsyncError";
import { ProfileService } from "./profile.service";

const getProfile: RequestHandler = catchAsyncError(async (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = req.user as any;
  const result = await ProfileService.getProfile(user?.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User Profiles retrieved successfully",
    data: result,
  });
});

export const ProfileCtrl = {
  getProfile,
};
