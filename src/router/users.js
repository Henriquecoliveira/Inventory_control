const express = require("express");
const router = express.Router();
const user = require("../controller/users.js");

router.post("/newUser", user.newUser);

router.get("/login", user.login);

module.exports = router;