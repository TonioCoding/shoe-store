import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const paymentMethodsSchema = new mongoose.Schema({
  cardNumber: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: String,
    required: true,
  },
  cvv: {
    type: Number,
    required: true,
  },
});

const deliveryAddressesSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  typeOfBuilding: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  countryRegion: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
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
      type: String,
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
    paymentMethods: [paymentMethodsSchema],
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
