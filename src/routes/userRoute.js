const { User } = require("../models/User");

const router = require("express").Router();

// Nivell 1 Exercici 1
router.get("/", async (req, res) => {
    const users = await User.findAll()
    res.send({
        "users": users
    })
});

module.exports = router;
