import mongoose from "mongoose";

const shoeSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    imgUrls: {
      type: Array,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    colors: {
      type: Array,
      required: true,
    },
    sizesNotInStock: {
      type: Array,
      required: true,
    },
    onSale: {
        type: Boolean,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Shoe = mongoose.model('Shoe', shoeSchema)

export default Shoe;