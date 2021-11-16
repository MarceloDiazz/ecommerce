const express = require("express");

const UserController = require("../controller/users");

const router = express.Router();

// User
router.put("/:userId", UserController.updateUser);

// BASKET
router.post("/:userId/basket", UserController.addProductToBasket);
router.post("/:userId/basket/confirm", UserController.confirmBasket);
router.delete("/:userId/basket/:productId", UserController.deleteProductOnBasket);
router.put("/:userId/basket/:productId", UserController.updateProductOnBasket);

module.exports = router;