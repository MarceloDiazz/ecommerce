const express = require("express");
const router = express.Router();
const Product = require("../models/Products");

router.get("/", (req, res) => {
  Product.find({}).then((products) => res.send(products));
});

router.get("/:productId", (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId).then((product) => res.send(product));
});

router.post("/", (req, res) => {
  Product.create(req.body).then((product) => res.status(201).send(product));
});

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

router.delete("/:productId", (req, res) => {
    const productId = req.params.productId;
    Product.findByIdAndDelete(productId).then(() => res.sendStatus(204))
});

module.exports = router
