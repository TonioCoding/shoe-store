import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    status: {
      type: String,
      default: "pending",
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    accountId: {
      type: String,
      required: true,
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
    },
  },
  {
    timestamps: true,
  }
);

// orderSchema.pre("save", async function (next) {
//   if (this.orderItems.length === 0) {
//     next();
//   }

//   const items = this.orderItems;
//   const total = 0;

//   for (let item of items) {
//     total = total + item.price;
//   }

//   this.totalPrice = total;
// });

const Order = mongoose.model("Order", orderSchema);

export default Order;
