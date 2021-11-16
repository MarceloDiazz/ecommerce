const express = require("express");
const router = express.Router();

const { checkAuthAdmin, checkAuth } = require("../middlewares/auth");

const products = require("./products");
const users = require("./users");
const auth = require("./auth");
const admin = require("./admin");

router.use("/auth", auth);
router.use("/products", products);
router.use("/users", checkAuth, users);
router.use("/admin", checkAuthAdmin, admin);

module.exports = router;
