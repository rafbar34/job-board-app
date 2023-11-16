import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/User.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";

const userRouter = Router();

userRouter.get("/current-user", getCurrentUser);
userRouter.get(
  "/stats/app-stats",
  // authorizePermissions('admin'),
  getApplicationStats
);
userRouter.patch("/update-user", validateUpdateUserInput, updateUser);

export default userRouter;
