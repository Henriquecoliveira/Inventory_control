require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

//routes
const usersRoutes = require("./src/router/users.js");
app.use("/api", usersRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server running");
})