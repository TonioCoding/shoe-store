import express from "express";
const router = express.Router();

import { createOrder, getOrders } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/createOrder", [protect, createOrder]);
router.get("/:id", getOrders);

export default router;
