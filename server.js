require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

//routes
const usersRoutes = require("./src/router/users.js");
app.use("/api", usersRoutes);

const productsRouter = require("./src/router/products.js");
app.use("/api", productsRouter);

app.listen(process.env.PORT, () => {
    console.log("Server running");
})