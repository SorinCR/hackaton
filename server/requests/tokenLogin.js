const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/User");

const bcrypt = require("bcryptjs");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET);
};

const tokenLogin = async (req, res) => {
  const username = req.body.username;

  console.log(username);

  const user = await User.find({
    username: username,
  });

  if (user.length == 0)
    return res.status(400).json({
      success: false,
      accessToken: "userNotFound",
    });

  let userData = user[0];
  const accessToken = userData.token;

  userData.password = undefined;
  userData.token = undefined;

  console.log(userData);

  res.status(200).json({
    success: true,
    accessToken: accessToken,
    user: userData,
  });
};

module.exports = tokenLogin;
