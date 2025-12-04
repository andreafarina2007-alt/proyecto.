let products = [
  { id: 1, name: "Producto A", price: 10 },
  { id: 2, name: "Producto B", price: 20 },
  { id: 3, name: "Producto C", price: 30 }
];

export default function handler(req, res) {
  const { id } = req.query;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return res.status(404).json({ message: "Producto no encontrado" });
  res.status(200).json(product);
}
