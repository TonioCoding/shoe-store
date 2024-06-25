import asyncHandler from "express-async-handler";
import Order from "../models/orderModel";

const createOrder = asyncHandler(async (req, res, next) => {
  const { accountId, orderItems, shippingAddress, paymenMethod } = req.body;
  
});

export { createOrder };
