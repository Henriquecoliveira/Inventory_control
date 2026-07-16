require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenVerification = (req, res, next) => {
    const authHeader = req.headers.authorization;

    const token = authHeader && authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({ error: "Token not found" });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_KEY, { algorithms: ["HS256"] });

        req.token = verified;

        return next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ error: "Token expired or invalid" });
    }
}

module.exports = tokenVerification;