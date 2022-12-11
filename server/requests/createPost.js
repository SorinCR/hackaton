const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Post = require("../models/Post");

const bcrypt = require("bcryptjs");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET);
};

const login = async (req, res) => {
  const { user, attachment, description, category, tags } = req.body;

  const post = await Post.create({
    id: parseInt(Date.now()),
    attachment: attachment,
    user: user,
    description: description,
    category: category,
    tags: tags,
  });
};

module.exports = login;
