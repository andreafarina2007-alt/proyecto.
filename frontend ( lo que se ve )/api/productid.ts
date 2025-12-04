// api/product/[id].ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

const products = [
  { id: 1, title: "Camiseta", price: 20, stock: 5, description: "Camiseta de algodón", images: ["/assets/camiseta1.jpg", "/assets/camiseta2.jpg"] },
  { id: 2, title: "Pantalón", price: 35, stock: 3, description: "Pantalón casual", images: ["/assets/pantalon1.jpg", "/assets/pantalon2.jpg"] },
  { id: 3, title: "Zapatillas", price: 50, stock: 10, description: "Zapatillas deportivas", images: ["/assets/zapatillas1.jpg", "/assets/zapatillas2.jpg"] },
  { id: 4, title: "Gorra", price: 15, stock: 8, description: "Gorra ajustable", images: ["/assets/gorra1.jpg", "/assets/gorra2.jpg"] },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  const product = products.find(p => p.id === Number(id));

  if (!product) return res.status(404).json({ error: "Producto no encontrado" });

  res.status(200).json(product);
}
