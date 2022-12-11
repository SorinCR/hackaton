const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const generateAccessToken = async (user) => {
  return jwt.sign(user, process.env.SECRET);
};

const register = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  const userQuery = await User.find({ username: username });

  if (userQuery.length != 0)
    return res
      .status(400)
      .json({ success: false, accessToken: "takenUsername" });

  const accessToken = await generateAccessToken({ username: username });

  const user = await User.create({
    username: username,
    password: password,
    token: accessToken,
  });

  await user.save();

  const userData = user;
  userData.password = undefined;
  userData.token = undefined;

  return res.json({ success: true, accessToken: accessToken, user: userData });
};

module.exports = register;
