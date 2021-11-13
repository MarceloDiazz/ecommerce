const express = require("express");

const UserController = require("../controller/users");
const { checkAuthAdmin } = require("../middlewares/auth");

const router = express.Router();

router.put("/:userId", UserController.updateUser);

// ADMIN
router.get("/admin", checkAuthAdmin, UserController.getUsers);
router.delete("/admin/:userId", checkAuthAdmin, UserController.deleteUsers);
router.put("/admin/:userId", checkAuthAdmin, UserController.promoteOrDescendAdmin);

// BASKET
router.post('/:userId/basket', UserController.addProductToBasket)
router.delete('/:userId/basket/:productId', UserController.deleteProductOnBasket)
router.put('/:userId/basket/:productId', UserController.updateProductOnBasket)


module.exports = router;
