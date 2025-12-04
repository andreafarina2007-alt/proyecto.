let cart = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(cart);
  } else if (req.method === "POST") {
    const { id, quantity, name, price } = req.body;
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity += quantity;
    else cart.push({ id, name, price, quantity });
    res.status(200).json(cart);
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    cart = cart.filter(item => item.id !== id);
    res.status(200).json(cart);
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
