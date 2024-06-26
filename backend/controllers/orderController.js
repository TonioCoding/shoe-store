import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const createOrder = asyncHandler(async (req, res, next) => {
  const { accountId, orderItems, shippingAddress, paymentMethod } = req.body;
  if (!accountId) {
    res.status(400);
    throw new Error("No account id detected");
  }
  if (!orderItems) {
    res.status(400);
    throw new Error("No order items detected");
  }
  if (!shippingAddress) {
    res.status(400);
    throw new Error("No shipping address detected");
  }
  if (!paymentMethod) {
    res.status(400);
    throw new Error("No payment method detected");
  }

  const order = await Order.create({
    accountId,
    orderItems,
    shippingAddress,
    paymentMethod,
  });

  if (order) {
    if (orderItems > 0) {
      const total = 0;
      for (let item of orderItems) {
        total = total + item.price;
      }
      order.totatPrice = total;
    }
    res.status(201).json({ ...order });
  } else {
    res.status(400);
    throw new Error("Invalid order");
  }
});

export { createOrder };
