const express = require("express");
const router = express.Router();
const tokenVerification = require("../middleware/auth.js");
const product = require("../controller/products.js");

router.get("/products", tokenVerification, product.getProducts);

router.post("/products", tokenVerification, product.InsertNewProduct);

module.exports = router;