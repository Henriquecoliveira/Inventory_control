const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db.js");
const user = {
    newUser: async (req, res) => {
        const { userObj } = req.body;

        //data validation
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ'\s-]{2,50}$/;
    
        if(isNaN(userObj.id) || !regex.test(userObj.name) || !regex.test(userObj.position)) {
            return res.status(400).json({ body: userObj, error: "Invalid fields" });
        }

        const hash = await bcrypt.hash(userObj.password, 10);

        //adding the new user
        try {
            const query = `
            INSERT INTO users (id, name, position, password)
            VALUES (?, ?, ?, ?);
            `;

            await db.execute(query, [userObj.id, userObj.name, userObj.position, hash]);

            return res.status(201).json({ body: userObj, message: "User successfully registered"} )
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Server error"} );
        }
    },
    login: async (req, res) => {
        const { userObj } = req.body;

        //data validation
        if(isNaN(userObj.id)) {
            return res.status(400).json({ body: userObj, error: `${userObj.id} is not a number`});
        }

        const query = `
        SELECT position, password
        FROM users
        WHERE id = ?;
        `

        const [row] = await db.execute(query, [userObj.id]);

        if(!await bcrypt.compare(userObj.password, row[0].password)) {
            return res.status(401).json({ body: userObj, error: "Incorrect password" });
        }

        //JWT
        const iatTimestamp = Math.floor(Date.now() / 1000);

        payload = {
            sub: userObj.id,
            position: userObj.position,
            iat: iatTimestamp
        }

        const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1hr" });

        return res.json({ token });
    }
}

module.exports = user;