import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const deliveryAddressesSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  streetAddress: {
    type: String,
    required: false,
  },
  typeOfBuilding: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  zip: {
    type: Number,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  countryRegion: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      required: false,
      default: "user",
    },
    avatarUrl: {
      type: String,
      required: false,
      default: "",
    },
    orderIds: {
      type: Array,
      required: false,
    },
    favorites: {
      type: Array,
      required: false,
    },
    interests: {
      type: Array,
      required: false,
    },
    phoneNumber: {
      type: Array,
      required: false,
    },
    location: {
      type: String,
      required: false,
      default: "United States",
    },
    deliveryAddresses: [deliveryAddressesSchema],
    sendEmails: {
      type: Boolean,
      required: false,
    },
    paymentMethods: {
      type: Array,
      required: false,
    },
    inbox: {
      type: Array,
      required: false,
    },
    cart: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
