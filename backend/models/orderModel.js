import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
   status: {
    type: String,
    default: "pending"
   },
   totalPrice: {
    type: Number,
    required: true,
   },
   accountId : {
    type: String,
    required: true
   },
   orderItems: {
    type: Array,
    required: true,
   },
   shippingAddress: {
    type: String,
    required: true,
   },
   paymentMethod: {
    type: String,
    required: true,
   }
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
