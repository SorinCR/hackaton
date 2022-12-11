const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  sub: {
    startedAt: {
      type: Date,
      default: 0,
    },
    length: {
      type: Number,
      default: 0,
    },
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, (saltErr, salt) => {
      if (saltErr) return next(saltErr);
      else {
        bcrypt.hash(user.password, salt, (hashErr, hash) => {
          if (hashErr) return next(hashErr);
          else {
            user.password = hash;
            next();
          }
        });
      }
    });
  } else return next();
});

module.exports = mongoose.model("User", userSchema);
