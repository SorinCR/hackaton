require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const login = require("./requests/login");
const register = require("./requests/register");

app.use(express.json());

const mongoose = require("mongoose");
const User = require("./models/User");

mongoose
  .connect("mongodb://127.0.0.1:27017/hackaton")
  .catch((err) => console.log(err));

mongoose.connection.on("open", (ref) => {
  console.log("Connected to the db.");
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET, (err, user) => {
    //console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.post("/login", login);
app.post("/register", register);

// const posts = [{username: "Kyle", test: 1}]

// app.get("/posts", authenticateToken, (req, res) => {
//     res.json(req.user);
// })

app.listen(3000, () => console.log("Done"));
