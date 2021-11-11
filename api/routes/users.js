const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.put("/:userId", (req, res) => {
  const UserId = req.params.userId;
  User.findByIdAndUpdate(
    UserId,
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
    },
    { new: true }
  ).then((user) => res.send(user));
});

//ADMIN -----------------------------------------------------------------

//SHOW USERS
router.get("/admin", (req, res) => {
  if (req.user[0].admin) User.find({}).then((user) => res.send(user));
});

//DELETE USERS
router.delete("/admin/:userId", (req, res) => {
  const UserId = req.params.userId;
  if (req.user[0].admin)
    User.findByIdAndDelete(UserId).then(() => res.sendStatus(204));
});

//PROMOTE ADMINS
router.put("/admin/:userId", (req, res) => {
  const UserId = req.params.userId;
  console.log(req.user);
  if (req.user[0].admin) {
    User.findByIdAndUpdate(
      UserId,
      {
        $set: {
          admin: true,
        },
      },
      { new: true }
    ).then((data) => res.send(data));
  }
});


// basket manage -----------------------------------------

//adds a product to basket //done
router.post("/:userId/basket", (req, res) => {
  const userId = req.params.userId;
  User.findByIdAndUpdate(
    userId,
    {
      $push: {
        carrito: req.body.product,
      },
    },
    { new: true }
  ).then((user) => res.status(201).send(user));
});

//removes a product from basket //done
router.delete("/:userId/basket/:productId", (req, res) => {
  const userId = req.params.userId;
  const productId = parseInt(req.params.productId);
  User.findOneAndUpdate(
    { _id: userId },
    {
      $pull: {
        carrito: { id: productId },
      },
    },
    { new: true }
  ).then((data) => res.send(data));
});

//modifies amount in basket //done
router.put("/:userId/basket/:productId", (req, res) => {
  const userId = req.params.userId;
  const productId = parseInt(req.params.productId);
  User.findOneAndUpdate({ _id: userId }, 
    { $set: {
        "carrito.$[product].cantidad": req.body.cantidad
      }
    }, { 
        arrayFilters: [{ "product.id": productId }],
        new: true
    }
  ).then((data) => res.send(data));
});

//get user //tester route
// router.get("/:userId", (req, res) => {
//   User.findById(req.params.userId).then((user) => res.send(user));
// });

module.exports = router;
