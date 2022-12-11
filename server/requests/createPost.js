const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Post = require("../models/Post");

const bcrypt = require("bcryptjs");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET);
};

const createPost = async (req, res) => {
  const { user, attachment, description, category, tags } = req.body;

  const post = await Post.create({
    _id: parseInt(Date.now()),
    plus: 0,
    attachment: attachment,
    user: user,
    description: description,
    category: category,
    tags: tags,
  });

  await post.save();

  res.json({ success: true });
};

module.exports = createPost;
