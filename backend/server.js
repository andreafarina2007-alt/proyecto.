const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // para poder leer JSON en POST

// Productos en memoria
let products = [
  { id: 1, title: "Camiseta", description: "Camiseta de algodón 100%", price: 20, images: ["/assets/camiseta1.jpg", "/assets/camiseta2.jpg"] },
  { id: 2, title: "Pantalón", description: "Pantalón casual y elegante", price: 35, images: ["/assets/pantalon1.jpg"] },
  { id: 3, title: "Zapatillas", description: "Zapatillas deportivas", price: 50, images: ["/assets/zapatillas1.jpg"] },
  { id: 4, title: "Gorra", description: "Gorra de algodón", price: 15, images: ["/assets/gorra1.jpg"] },
];

// Carrito en memoria
let cart = [];

// ENDPOINTS REST

// Obtener todos los productos
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Obtener un producto por ID
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

// Añadir producto al carrito
app.post("/api/cart", (req, res) => {
  const { id, quantity } = req.body;
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).json({ message: "Producto no encontrado" });

  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id, title: product.title, price: product.price, quantity });
  }

  res.json(cart);
});

// Obtener carrito completo
app.get("/api/cart", (req, res) => {
  res.json(cart);
});

// Eliminar producto del carrito
app.delete("/api/cart/:id", (req, res) => {
  const id = Number(req.params.id);
  cart = cart.filter((item) => item.id !== id);
  res.json(cart);
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
