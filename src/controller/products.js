const db = require("../config/db.js");

const product = {
    getProducts: async (req, res) => {
        try {
            const [row] = await db.execute(`
                    SELECT *
                    FROM itens;
                `);

            return res.status(200).json( {body: row} );
        } catch (err) {
            console.error(err);
            return res.status(500).json( { error: "it's wasn't get products"} );
        }
    },
    InsertNewProduct: async (req, res) => {
        const {product} = req.body;
        //name, description?, brand?, quantity, unit?

        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ' 0-9-]{2,50}$/;

        if(!regex.test(product.name) || product.quantity <= 0) {
            return res.status(400).json({ body: product, error: "The product details were entered incorrectly" });
        }
        
        try {
            const query = `
            INSERT INTO itens (name, description, brand, quantity, unit)
            VALUES (?, ?, ?, ?, ?);
            `;

            await db.execute(query, [product.name, product.description ?? null, product.brand ?? null, product.quantity, product.unit ?? null])

            return res.status(201).json({ body: product, message: "Inserted successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json( {error: "It's wasn't possible to insert a new product"} )
        }
    }
}

module.exports = product;