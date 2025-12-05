import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Mi Tienda</h2>
      <div>
        <Link style={styles.link} to="/">Inicio</Link>
        <Link style={styles.link} to="/about">Sobre Nosotros</Link>
        <Link style={styles.link} to="/products">Productos</Link>
        <Link style={styles.link} to="/cart">
          Carrito ({totalItems}) {/* Muestra cantidad total */}
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  link: {
    color: "#fff",
    marginLeft: "15px",
    textDecoration: "none",
    fontWeight: "bold"
  }
};
