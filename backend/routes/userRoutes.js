import express from "express";
const router = express.Router();

import {
  authUser,
  createUser,
  logoutUser,
  getUserInfo,
  updateUserProfile,
  addToFavorites,
  addInterests,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

router.post("/auth", authUser);
router.post("/", createUser);
router.post("/logout", logoutUser);
router.post("/addInterests", addInterests);

router.post("/fav", [protect, addToFavorites]);

router
  .route("/profile")
  .get(protect, getUserInfo)
  .put(protect, updateUserProfile);

// protect is the custom made middleware to check and see if a user is logged in before they can access routes that are binned with the middleware

export default router;
