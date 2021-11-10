const express = require("express");
const router = express.Router();
const User = require("../models/Users");

/* router.put("/:userId", (req, res) => {
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
}); */
//ADMIN -----------------------------------------------------------------

//SHOW USERS
router.get("/admin", (req, res) => {
    if (req.user[0].admin) User.find({}).then((user) => res.send(user));
});

//DELETE USERS
router.delete("/admin/:userId", (req, res) => {
    const UserId = req.params.userId;
    if (req.user[0].admin) User.findByIdAndDelete(UserId).then(() => res.sendStatus(204));
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

// basket manage routes ----------------

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

/* ==============================
  dont touch below this line WIP 
============================== */

//removes a product from basket
/* router.delete("/:userId/basket/:productId", (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  console.log("checking gral-->",userId, productId)
  User.findOneAndUpdate(
    { _id: userId },
    {
        $pull: {
            carrito: {id: productId },
});*/

//changes a product in basket
//HardCodeMethod
/* router.put("/:userId/basket", (req, res) => {
  const userId = req.params.userId;
  console.log("checking req.bod-->",req.body)
  User.findByIdAndUpdate(
    userId,
    {
      $set: {
        carrito: req.body.carrito,
      },
    },
    { new: true }
  ).then((user) => res.send(user));
}); */

//attempt 2 // WIP

/* router.put("/:userId/basket/:productId", (req, res) => {
  const productId = req.params.productId;
  const userId = req.params.userId
  console.log("checking req.bod-->", req.body);
  User.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        "carrito[elem].$.cantidad": req.body.cantidad,
      },
    },
    { arrayFilters: [{ "elem._id": productId }] ,
  new: true}
  ).then((user) => {
    console.log("checking user-->", user);
    res.send(user);
  });
}); */

//put attemt 3

/* router.put("/:userId/basket/:productId", (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  console.log("checking req.bod-->",req.body)
  User.findByIdAndUpdate(
    {carrito: {_id: productId} },
    {
      $set: {
        cantidad: req.body.cantidad,
      },
    },
    { new: true }
  ).then((user) => {
    console.log("checking user-->", user)
    res.send(user)
  });
}); */

//PUT
//attempt 4

/* router.put("/:userId/basket/:productId", (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  User.findByIdAndUpdate(userId, {
    $set: {"carrito.$.cantidad": req.body.cantidad}
    ,
  }, {new: true})
  .then((data) => {
    console.log(data)
    res.send(data)
  }) 
}); */

/* db.collection.update(
  { <query selector> },
  { <update operator>: { "array.$.field" : value } }
) */

//618c13f15c0478fe1c94882e

module.exports = router;
