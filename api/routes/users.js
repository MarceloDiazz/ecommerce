const express = require("express");

const UserController = require("../controller/users");

const router = express.Router();

// User
router.put("/:userId", UserController.updateUser);

// BASKET
router.get('/:userId/basket', UserController.getBasket)
router.post("/:userId/basket", UserController.addProductToBasket);
router.post("/:userId/basket/confirm", UserController.confirmBasket);
router.delete("/:userId/basket/:productId", UserController.deleteProductOnBasket);
router.put("/:userId/basket/:productId", UserController.updateProductOnBasket);

// HISTORY
router.get('/:userId/history', UserController.getHistory)

module.exports = router;