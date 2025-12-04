// api/cart.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

let cart: { id: number, name: string, price: number, quantity: number }[] = [];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    return res.status(200).json(cart);
  }

  if (req.method === "POST") {
    const item = req.body;
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      cart.push(item);
    }
    return res.status(200).json({ message: "Producto añadido" });
  }

  if (req.method === "DELETE") {
    const { id } = req.body;
    cart = cart.filter(i => i.id !== id);
    return res.status(200).json({ message: "Producto eliminado" });
  }

  return res.status(405).json({ message: "Método no permitido" });
}
