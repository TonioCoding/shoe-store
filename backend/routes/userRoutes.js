import express from "express";
const router = express.Router();

import {
  authUser,
  createUser,
  logoutUser,
  getUserInfo,
  updateUserProfile,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";


router.post("/auth", authUser);
router.post("/", createUser);
router.post("/logout", logoutUser);

router
  .route("/profile")
  .get(protect, getUserInfo)
  .put(protect, updateUserProfile);

export default router;
