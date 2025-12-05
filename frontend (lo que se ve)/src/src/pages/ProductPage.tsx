// src/pages/ProductPage.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

const products: Product[] = [
  {
    id: 1,
    title: "Camiseta",
    description: "Camiseta de algodón 100%, muy cómoda y ligera.",
    price: 20,
    images: [
      "/assets/camiseta1.jpg",
      "/assets/camiseta2.jpg",
      "/assets/camiseta3.jpg",
    ],
  },
  {
    id: 2,
    title: "Pantalón",
    description: "Pantalón casual, resistente y elegante.",
    price: 35,
    images: [
      "/assets/pantalon1.jpg",
      "/assets/pantalon2.jpg",
    ],
  },
  {
    id: 3,
    title: "Zapatillas",
    description: "Zapatillas deportivas cómodas y duraderas.",
    price: 50,
    images: [
      "/assets/zapatillas1.jpg",
      "/assets/zapatillas2.jpg",
    ],
  },
  {
    id: 4,
    title: "Gorra",
    description: "Gorra de algodón con diseño clásico.",
    price: 15,
    images: [
      "/assets/gorra1.jpg",
      "/assets/gorra2.jpg",
    ],
  },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) return <p>Producto no encontrado</p>;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <div style={styles.container}>
      <h1>{product.title}</h1>
      <div style={styles.slider}>
        <button onClick={prevImage} style={styles.buttonSlider}>◀</button>
        <img src={product.images[currentImage]} alt={product.title} style={styles.image} />
        <button onClick={nextImage} style={styles.buttonSlider}>▶</button>
      </div>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button style={styles.addButton}>Añadir al carrito</button>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  },
  slider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  image: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  buttonSlider: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    margin: "0 10px",
  },
  addButton: {
    marginTop: "15px",
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
