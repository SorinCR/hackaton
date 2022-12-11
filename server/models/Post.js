const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const postSchema = new mongoose.Schema({
  _id: String,
  attachment: Array,
  plus: Number,
  description: String,
  comments: Object,
  category: String,
  tags: Array,
  user: Object,
});

module.exports = mongoose.model("Post", postSchema);
