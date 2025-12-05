import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Importa el hook del contexto

interface Product {
  id: number;
  title: string;
  price: number;
  image?: string;
  description?: string;
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart(); // Obtiene la función para añadir al carrito

  // Cargar producto desde backend
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity
    });

    alert("Producto añadido al carrito!");
  };

  if (!product) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <label>
        Cantidad:
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          style={{ marginLeft: "10px", width: "50px" }}
        />
      </label>
      <br />
      <button
        onClick={handleAddToCart}
        style={{ marginTop: "10px", padding: "8px 12px", cursor: "pointer" }}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
