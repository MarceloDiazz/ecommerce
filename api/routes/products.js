const express = require("express");
const router = express.Router();
const Product = require("../models/Products");


//GET PRODUCT
router.get("/", (req, res) => {
  Product.find({}).then((products) => res.send(products));
});

//CREATE PRODUCT
router.post("/", (req, res) => {
  Product.create(req.body).then((product) => res.status(201).send(product));
});

//GET ESPECIFIC PRODUCT
router.get("/:productId", (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId).then((product) => res.send(product));
});

//DELETE ESPECIFIC PRODUCT
router.delete("/:productId", (req, res) => {
    const productId = req.params.productId;
    Product.findByIdAndDelete(productId).then(() => res.sendStatus(204))
});

//EDIT ESPECIFIC PRODUCT
router.put("/:productId", (req, res) => {
  const productId = req.params.productId;
  Product.findByIdAndUpdate(
    productId,
    {
      $set: {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        stock: req.body.stock,
        category: req.body.category,
        location: req.body.location,
      },
    },
    { new: true }
  ).then((product) => res.send(product));
});

//SHOW PRODUCTS BY CATEGORY
router.get("/category/:name", (req, res) => {
  const name = req.body.name
  Product.find({category: name}).then((product) => res.send(product));
})

//SHOW PRODUCTS THAT MATCH USER SEARCH
router.get("/title/:title", (req, res) => {
  const title = req.body.title
  Product.find({title: title}).then((product) => res.send(product))
})



module.exports = router
