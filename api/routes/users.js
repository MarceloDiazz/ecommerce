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
