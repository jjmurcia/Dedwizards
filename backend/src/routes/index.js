const { Router } = require("express");
const router = Router();

const User = require("../models/user");

router.get("/api", (req, res) => res.send("hola mundo"));

router.post("/registro", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });

  await newUser.save();

  console.log(newUser);
  res.send("registrado");
});

module.exports = router;
