const express = require("express");
const cors = require("cors");

const products = require("./products")
const app = express();

app.use(express.json());
app.use(cors());


// Use environment variables
const port = process.env.PORT || 5173
const env = process.env.NODE_ENV;

app.get("/", (req, res) => {
    res.send(`Welcome to learning Princess! Running in ${env} mode on port ${port}`);
});

app.get("/products", (req, res) => {
    res.send(products);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
