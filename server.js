require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.static("./src/public"));

//routes
const usersRoutes = require("./src/router/users.js");
app.use("/api", usersRoutes);

const productsRouter = require("./src/router/products.js");
app.use("/api", productsRouter);

app.listen(process.env.PORT, () => {
    console.log("Server running");
})