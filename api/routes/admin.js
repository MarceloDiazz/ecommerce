const express = require("express");
const router = express.Router();

const AdminController = require("../controller/admin");

router.get("/:userId", AdminController.getUsers);
router.delete("/:userId", AdminController.deleteUsers);
router.put("/:userId", AdminController.promoteOrDescendAdmin);

// BASKET
router.get("/basket/history", AdminController.getAllHistory);
router.get("/basket/user/:userId", AdminController.getHistoryByUser);
router.get("/basket/product/:productId", AdminController.getHistoryByProduct);
router.get("/basket/history/:historyId", AdminController.getHistoryById);

// PRODUCT
router.post('/product', AdminController.createProduct)
router.delete('/product/:productId', AdminController.deleteProduct)
router.put('/product/:productId', AdminController.editProduct)

// CATEGORY
router.delete('/category/:name', AdminController.deleteCategory)
router.put('/category/:name', AdminController.editCategory)

module.exports = router;
