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
  deleteInterest,
  editLocation,
  addPaymentMethod,
  deletePhoneNumber,
  addDeliveryAddress,
  deleteDeliveryAddress,
  deletePaymentMethod,
  addPhoneNumber,
  validatePassword,
  confirmCommunicationPreferences,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

router.post("/auth", authUser);
router.post("/", createUser);
router.post("/logout", logoutUser);
router.post("/addInterests", addInterests);
router.post("/deleteInterest", deleteInterest);

router.post("/fav", [protect, addToFavorites]);

router.post("/addPaymentMethod", [protect, addPaymentMethod]);
router.post("/deletePaymentMethod", [protect, deletePaymentMethod]);

router.post("/addPhoneNumber", [protect, addPhoneNumber]);
router.post("/deletePhoneNumber", [protect, deletePhoneNumber]);

router.post("/addDeliveryAddress", [protect, addDeliveryAddress]);
router.post("/deleteDeliveryAddress", [protect, deleteDeliveryAddress]);

router.patch("/editLocation", [protect, editLocation]);

router.post("/confirmCommunicationPreferences", [
  protect,
  confirmCommunicationPreferences,
]);

router.post("/validatePassword", [protect, validatePassword]);

router
  .route("/profile")
  .get(protect, getUserInfo)
  .put(protect, updateUserProfile);

// protect is the custom made middleware to check and see if a user is logged in before they can access routes that are binned with the middleware

export default router;
