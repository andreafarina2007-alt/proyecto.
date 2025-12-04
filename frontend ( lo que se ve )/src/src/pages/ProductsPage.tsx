// src/pages/ProductsPage.tsx
import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  image: string;
}

const products: Product[] = [
  { id: 1, title: "Camiseta", price: 20, stock: 5, image: "/assets/camiseta.jpg" },
  { id: 2, title: "Pantalón", price: 35, stock: 3, image: "/assets/pantalon.jpg" },
  { id: 3, title: "Zapatillas", price: 50, stock: 10, image: "/assets/zapatillas.jpg" },
  { id: 4, title: "Gorra", price: 15, stock: 8, image: "/assets/gorra.jpg" },
];

export default function ProductsPage() {
  return (
    <div style={styles.container}>
      <h1>Productos</h1>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h3>{product.title}</h3>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <Link to={`/products/${product.id}`}>
              <button style={styles.button}>Ver más</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
