const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const generateAccessToken = async (user) => {
  return jwt.sign(user, process.env.SECRET);
};

const register = async (req, res) => {
  return res.json({ success: true });
};

module.exports = register;
