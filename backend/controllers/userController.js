import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import createToken from "../utils/createToken.js";

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

  if (typeof interests === "string") {
  }

  const user = await User.findOne({ _id: id });
  let interestToSave = [];

  if (user && typeof interests !== "string") {
    for (let interest of interests) {
      interestToSave.push(interest);
    }

    user.interests = interestToSave;
    user.save();
    res.json(user).status(200);
  } else if (!id) {
    res.status(500).json("User not found");
  } else if (user && typeof interests === "string") {
    let userCurrentInterests = [...user.interests];

    if (userCurrentInterests.includes(interests) === true) {
      res.status(400).json("Already have interest");
    } else {
      interestToSave.push(interests);
      user.interests = [...user.interests, ...interestToSave];
      user.save();
      res.status(200).json(user);
    }
  }
});

export {
  authUser,
  createUser,
  logoutUser,
  getUserInfo,
  updateUserProfile,
  addToFavorites,
  addInterests,
};
