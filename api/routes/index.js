const express = require("express");
const router = express.Router();

const products = require("./products");
const users = require("./users");
const auth = require("./auth");

router.use("/auth", auth);
// router.use("/products", products);
// router.use("/users", users);

module.exports = router;
