import express from "express";
const router = express.Router();

import { createOrder } from "../controllers/orderController";
import { protect } from "../middleware/authMiddleware";

router.post("/createOrder", [protect, createOrder]);

export default router;
