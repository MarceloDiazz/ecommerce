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

router.delete("/delete/:id/:productId", async (req, res) => {
    const id = req.params.productId
    const result = await User.findOneAndUpdate(
        { _id: req.params.id },
        {
            $pull: {
                carrito: { _id: id },
            },
        },
        { new: true }
    );
    console.log(result)
    res.send(result);
});

module.exports = router;
