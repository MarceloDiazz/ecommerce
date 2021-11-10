const express = require("express");
const router = express.Router();

const products = require("./products");
const users = require("./users");
<<<<<<< HEAD
 const auth = require("./auth");

 router.use("/auth", auth);
router.use("/products", products);
/*  router.use("/users", users); */
=======
const auth = require("./auth");

router.use("/auth", auth);
router.use("/products", products);
router.use("/users", users);
>>>>>>> main

module.exports = router;
