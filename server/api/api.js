let products = [
  { id: 1, name: "Producto A", price: 10 },
  { id: 2, name: "Producto B", price: 20 },
  { id: 3, name: "Producto C", price: 30 }
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
