const express = require("express");
const app = express();
const PORT = 5000;

// Datos de prueba
const products = [
  { id: 1, name: "Producto A", price: 10 },
  { id: 2, name: "Producto B", price: 20 },
  { id: 3, name: "Producto C", price: 30 }
];

let cart = [];

// Middleware para JSON
app.use(express.json());
console.log("Rutas cargadas: /api/products, /api/products/:id, /api/cart");
;

// ENDPOINT: Todos los productos
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ENDPOINT: Producto por ID
app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(product);
});

// ENDPOINT: Carrito
app.get("/api/cart", (req, res) => {
  res.json(cart);
});

// Servidor funcionando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
