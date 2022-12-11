const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/User");

const bcrypt = require("bcryptjs");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET);
};

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({ username: username });

  if (user.length == 0)
    return res
      .status(400)
      .json({ success: false, accessToken: "userNotFound" });

  bcrypt.compare(password, user[0].password, async (err, isMatch) => {
    if (err) {
      res.json({ success: false, accessToken: "error" });
      throw err;
    } else if (!isMatch) {
      console.log("Incorrect password.");
      res.status(400).json({ success: false, accessToken: "incorrectPass" });
    } else {
      let userData = user[0];
      const accessToken = userData.token;

      userData.password = undefined;
      userData.token = undefined;
      console.log(userData);
      res
        .status(200)
        .json({ success: true, accessToken: accessToken, user: userData });
    }
  });
};

module.exports = login;
