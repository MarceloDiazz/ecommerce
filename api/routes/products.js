const express = require("express");
const router = express.Router();
const ProductsController = require("../controller/products")


router.get('/', ProductsController.allProducts)
router.get('/:productId', ProductsController.getProductById)
router.get('/category/:name', ProductsController.getProductsByCategoryName)
router.get('/province/:name', ProductsController.getProductsByProvinceName)
router.get('/city/:name', ProductsController.getProductsByCityName)
router.get('/title/:name', ProductsController.getProductsByTitleName)

router.post('/', ProductsController.createProduct)
router.delete('/:productId', ProductsController.deleteProduct)
router.put('/:productId', ProductsController.editProduct)

module.exports = router
