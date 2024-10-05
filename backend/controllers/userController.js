import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import createToken from "../utils/createToken.js";

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

// @desc    auth(login) user and set token
// route    POST /api/users/auth
// access   Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
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
      location: user.location,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// desc     creates user
// route    POST /api/users
// access   public
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
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// desc     logouts out user
// route    POST /api/users/logout
// access   Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

// desc     Get user
// route    POST /api/users/get
// access   Private
const getUserInfo = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    favorites: user.favorites,
    orderIds: user.orderIds,
    avatarUrl: user.avatarUrl,
  };

  res.status(200).json(user);
});

// desc     updates user info
// route    PUT /api/users/profile
// access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
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
      res.status(200).json(user);
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
    res.status(200).json(user);
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
    res.status(200).json(user);
  } else {
    res.status(400).json("Invalid interest");
  }
});

const addPhoneNumber = asyncHandler(async (req, res) => {});
const deletePhoneNumber = asyncHandler(async (req, res) => {});

const editLocation = asyncHandler(async (req, res) => {});

const addPaymentMethod = asyncHandler(async (req, res) => {});
const deletePaymentMethod = asyncHandler(async (req, res) => {});

const addDeliveryAddress = asyncHandler(async (req, res) => {});
const deleteDeliveryAddress = asyncHandler(async (req, res) => {});

export {
  authUser,
  createUser,
  logoutUser,
  getUserInfo,
  updateUserProfile,
  addToFavorites,
  addInterests,
  deleteInterest,
};
