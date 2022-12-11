const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Post = require("../models/Post");

const bcrypt = require("bcryptjs");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET);
};

const getPosts = async (req, res) => {
  const { id, action } = req.body;

  const post = await Post.find({});

  res.json({ success: true, post: post });

  //   post[0].plus += action;

  //   const post = await Post.create({
  //     id: parseInt(Date.now()),
  //     attachment: attachment,
  //     user: user,
  //     description: description,
  //     category: category,
  //     tags: tags,
  //   });

  //   await post.save();

  //   res.json({ success: true });
};

module.exports = getPosts;
