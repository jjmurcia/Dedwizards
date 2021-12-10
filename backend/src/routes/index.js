const { Router } = require("express");
const router = Router();

const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.get("/api", (req, res) => res.send("hola mundo"));

router.post("/registro", async (req, res) => {
  // guardamos el usuario en la DB
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();

  // creo el token
  const token = jwt.sign({ _id: newUser._id }, "confidencial");

  // devolvemos el token
  res.status(200).json({ token });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(401).send("el email no existe");
  if (user.password !== password)
    return res.status(401).send("contraseña incorrecta");

  const token = jwt.sign({ _id: user._id }, "confidencial");
  return res.status(200).json({ token });
});

router.get("/tasks", (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Tasks One",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
    {
      _id: 2,
      name: "Tasks two",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
    {
      _id: 3,
      name: "Tasks Three",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
  ]);
});

router.get("/tasks-private", (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Tasks One",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
    {
      _id: 2,
      name: "Tasks two",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
    {
      _id: 3,
      name: "Tasks Three",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
  ]);
});

module.exports = router;
