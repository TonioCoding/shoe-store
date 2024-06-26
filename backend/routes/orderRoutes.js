import express from "express";
const router = express.Router();

import { createOrder } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/createOrder", [protect, createOrder]);

export default router;
