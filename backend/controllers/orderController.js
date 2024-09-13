import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const paymentMethods = [
  "PayPal",
  "Visa",
  "MasterCard",
  "Discover",
  "American Express",
  "Apple Pay",
];

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

  if (!paymentMethods.includes(paymentMethod)) {
    res.status(400);
    throw new Error("Invalid payment method");
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

const getOrders = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const order = await Order.find({ accountId: id });
  if (order) {
    res.json(order).status(200);
  } else {
    res.json("Order does not exist").status(500);
  }
});

export { createOrder, getOrders };
