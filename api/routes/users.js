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

module.exports = router