const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./products.json");

app.use(cors());

// Endpoint to get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Endpoint to get a specific product by ID
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
