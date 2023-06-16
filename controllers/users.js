const router = require("express").Router();
const bycrpt = require("bcrypt");
const User = require("../models/user");

router.post("/", async (req, res, next) => {
  const { username, name, password } = req.body;
  const saltRound = 10;
  const passwordHash = await bycrpt.hash(password, saltRound);
  const user = new User({
    username,
    name,
    passwordHash,
  });
  const savedUser = await user.save();
  res.status(201).json(savedUser);
});

router.get("/", async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json(users);
});
module.exports = router;
