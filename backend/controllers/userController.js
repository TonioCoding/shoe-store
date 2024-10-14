import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import createToken from "../utils/createToken.js";
import mongoose from "mongoose";

const availableInterests = [
  "Basketball",
  "Baseball",
  "Football",
  "Soccer",
  "Tennis",
  "Golf",
  "Running",
  "Exercise",
  "Fashion",
];

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    createToken(res, user._id);
    if (user.phoneNumber) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        favorites: user.favorites,
        orderIds: user.orderIds,
        avatarUrl: user.avatarUrl,
        interests: user.interests,
        cart: user.cart,
        location: user.location,
        phoneNumber: user.phoneNumber,
      });
    } else {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        favorites: user.favorites,
        orderIds: user.orderIds,
        avatarUrl: user.avatarUrl,
        interests: user.interests,
        cart: user.cart,
        location: user.location,
      });
    }
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    createToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      favorites: user.favorites,
      orderIds: user.orderIds,
      avatarUrl: user.avatarUrl,
      interests: user.interests,
      cart: user.cart,
      phoneNumber: user.phoneNumber,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

const getUserInfo = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    favorites: user.favorites,
    orderIds: user.orderIds,
    avatarUrl: user.avatarUrl,
    phoneNumber: user.phoneNumber,
  };

  res.status(200).json(user);
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.location = req.body.location || user.location;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      location: updatedUser.location,
      avatarUrl: updatedUser.avatarUrl,
      favorites: updatedUser.favorites,
      interests: updatedUser.interests,
      phoneNumber: updatedUser.phoneNumber,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const addToFavorites = asyncHandler(async (req, res) => {
  const shoe = req.body.shoe;
  const id = req.body.userId;

  const user = await User.findOne({ _id: id });

  if (user && shoe) {
    user.favorites.push(shoe);
    await user.save();
    res.json("Shoe added to favorites").status(200);
  } else {
    res.json("Error saving shoe to favorites").status(500);
  }
});

const addInterests = asyncHandler(async (req, res) => {
  const interests = req.body.interests;
  const id = req.body.userId;
  const user = await User.findOne({ _id: id });
  const userCurrentInterests = user.interests;
  let interestToAdd = [];

  if (!id) {
    res.status(400).json("No id provided");
  }

  if (!user) {
    res.status(500).json("No user found");
  }

  if (typeof interests === "string") {
    if ([...userCurrentInterests].includes(interests)) {
      res.status(400).json("Already have interest");
      return;
    }
    if (availableInterests.includes(interests)) {
      interestToAdd.push(interests);
      user.interests = [...userCurrentInterests, ...interestToAdd];
      user.save();
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        location: user.location,
        avatarUrl: user.avatarUrl,
        favorites: user.favorites,
        interests: user.interests,
        phoneNumber: user.phoneNumber,
      });
    } else {
      res.json(400).json("Invalid Interest");
    }
  } else if (typeof interests === "object") {
    for (let interest of interests) {
      if (
        [...userCurrentInterests].includes(interest) ||
        availableInterests.includes(interest) === false
      ) {
        continue;
      }
      interestToAdd.push(interest);
    }
    user.interests = [...userCurrentInterests, ...interestToAdd];
    user.save();
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      location: user.location,
      avatarUrl: user.avatarUrl,
      favorites: user.favorites,
      interests: user.interests,
      phoneNumber: user.phoneNumber,
    });
  }
});

const deleteInterest = asyncHandler(async (req, res) => {
  const interest = req.body.interest;
  const id = req.body.userId;
  const user = await User.findOne({ _id: id });
  const userCurrentInterests = user.interests;
  let interestsToSave;

  if (!interest) {
    res.status(400).json("No interest provided for deletion");
  }
  if (!id) {
    res.status(400).json("No id provided");
  }
  if (!user) {
    res.status(500).json("User not found");
  }

  if (
    availableInterests.includes(interest) &&
    [...userCurrentInterests].includes(interest)
  ) {
    interestsToSave = [...userCurrentInterests].filter(
      (element) => element !== interest
    );
    user.interests = interestsToSave;
    user.save();
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      location: user.location,
      avatarUrl: user.avatarUrl,
      favorites: user.favorites,
      interests: user.interests,
      phoneNumber: user.phoneNumber,
    });
  } else {
    res.status(400).json("Invalid interest");
  }
});

const addPhoneNumber = asyncHandler(async (req, res) => {
  const id = req.body.userId;
  const phoneNumber = req.body.phoneNumber;

  const user = await User.findOne({ _id: id });

  if (user && phoneNumber) {
    /*  let currentPhoneNumbers = [...user.phoneNumbers];
    if (currentPhoneNumbers.includes(phoneNumber)) {
      res.status(400).json("Already added number");
      return;
    } */

    user.phoneNumber = phoneNumber;
    user.save();
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      location: user.location,
      avatarUrl: user.avatarUrl,
      favorites: user.favorites,
      interests: user.interests,
      phoneNumber: user.phoneNumber,
    });
  } else if (!user) {
    res.status(500).send("User not found");
  } else if (!phoneNumber) {
    res.status(400).send("No phone number provided");
  }
});

const deletePhoneNumber = asyncHandler(async (req, res) => {
  const id = req.body.userId;
  const user = await User.findOne({ _id: id });

  if (user) {
    user.phoneNumber = "";
    user.save();
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      location: user.location,
      avatarUrl: user.avatarUrl,
      favorites: user.favorites,
      interests: user.interests,
      phoneNumber: user.phoneNumber,
    });
  } else if (!user) {
    res.status(500).json("User not found");
  }
});

const editLocation = asyncHandler(async (req, res) => {
  const id = req.body.userId;
  const location = req.body.location;

  const user = await User.findOne({ _id: id });

  if (user && location) {
    user.location = location;
    user.save();
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      location: user.location,
      avatarUrl: user.avatarUrl,
      favorites: user.favorites,
      interests: user.interests,
      phoneNumber: user.phoneNumber,
    });
  } else if (!user) {
    res.status(500).json("User not found");
  } else if (!location) {
    res.status(400).json("Location not provided");
  }
});

const addPaymentMethod = asyncHandler(async (req, res) => {
  const id = req.body.userId;
  const paymentMethod = req.body.paymentMethod;

  const user = await User.findOne({ _id: id });

  if (!paymentMethod.billingAddress) {
    res.status(400).json("No billingAddress provided");
    return;
  }

  if (user && paymentMethod) {
    const currentPaymentMethods = [...user.paymentMethods];
    currentPaymentMethods.push(paymentMethod);

    user.paymentMethods = currentPaymentMethods;
    user.save();

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      location: user.location,
      avatarUrl: user.avatarUrl,
      favorites: user.favorites,
      interests: user.interests,
      phoneNumber: user.phoneNumber,
    });
  } else if (!user) {
    res.status(500).json("No user found");
  } else if (!paymentMethod) {
    res.status(400).json("No payment method provided");
  }
});

const deletePaymentMethod = asyncHandler(async (req, res) => {
  const id = req.body.userId;
  const paymentMethodId = req.body.paymentMethodId;

  const user = await User.findOne({ _id: id });

  if (user && paymentMethodId) {
    const currentPaymentMethods = [...user.paymentMethods];
    let newPaymentMethods = [];
    currentPaymentMethods.filter((paymentMethod) => {
      const objectId = new mongoose.Types.ObjectId(paymentMethod._id);

      if (objectId.toString() !== paymentMethodId) {
        ans.push(paymentMethod);
      }
    });

    user.paymentMethods = newPaymentMethods;
    user.save();

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      location: user.location,
      avatarUrl: user.avatarUrl,
      favorites: user.favorites,
      interests: user.interests,
      phoneNumber: user.phoneNumber,
    });
  } else if (!user) {
    res.status(500).json("No user found");
  } else if (!paymentMethodId) {
    res.status(400).json("No payment method id provided");
  }
});

const addDeliveryAddress = asyncHandler(async (req, res) => {
  const id = req.body.userId;
  const deliveryAddress = req.body.deliveryAddress;
  const user = await User.findOne({ _id: id });

  if (user && deliveryAddress) {
    const currentDeliveryAddresses = [...user.deliveryAddresses];
    currentDeliveryAddresses.push(deliveryAddress);

    user.deliveryAddresses = currentDeliveryAddresses;
    user.save();

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      location: user.location,
      avatarUrl: user.avatarUrl,
      favorites: user.favorites,
      interests: user.interests,
      phoneNumber: user.phoneNumber,
    });
  } else if (!user) {
    res.status(500).json("No user found");
  } else if (!deliveryAddress) {
    res.status(400).json("No address provided");
  }
  return;
});

const deleteDeliveryAddress = asyncHandler(async (req, res) => {
  const id = req.body.userId;
  const deliveryAddresId = req.body.deliveryAddressId;

  const user = await User.findOne({ _id: id });

  if (user && deliveryAddresId) {
    const currentDeliveryAddresses = [...user.deliveryAddresses];
    let newAddresses = [];
    currentDeliveryAddresses.filter((address) => {
      const objectId = new mongoose.Types.ObjectId(address._id);

      if (objectId.toString() !== deliveryAddresId) {
        newAddresses.push(address);
      }
    });

    user.deliveryAddresses = newAddresses;
    user.save();

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      location: user.location,
      avatarUrl: user.avatarUrl,
      favorites: user.favorites,
      interests: user.interests,
      phoneNumber: user.phoneNumber,
    });
  } else if (!user) {
    res.status(500).json("No user found");
  } else if (!deliveryAddresId) {
    res.status(400).json("No payment address id provided");
  }
});

const validatePassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.body.userId });
  if (user && (await user.matchPassword(req.body.password))) {
    res.status(201).json(true);
  } else {
    res.status(401).json(false);
  }
});

const confirmCommunicationPreferences = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.body.userId });
  if (user) {
    user.sendEmails = true;
    user.save();
    res.status(201).json(true);
  } else {
    res.status(401).json("No user id was provided");
  }
  return;
});

export {
  authUser,
  createUser,
  logoutUser,
  getUserInfo,
  updateUserProfile,
  addToFavorites,
  addInterests,
  deleteInterest,
  addPhoneNumber,
  deletePhoneNumber,
  editLocation,
  addPaymentMethod,
  deletePaymentMethod,
  addDeliveryAddress,
  deleteDeliveryAddress,
  validatePassword,
  confirmCommunicationPreferences,
};
