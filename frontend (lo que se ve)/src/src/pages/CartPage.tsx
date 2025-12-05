import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, getTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div style={styles.container}>
        <h1>Carrito</h1>
        <p>Tu carrito está vacío 😢</p>
        <Link to="/products" style={styles.link}>Ver productos</Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>Carrito</h1>
      {cart.map((item) => (
        <div key={item.id} style={styles.item}>
          <p><strong>{item.title}</strong></p>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
          <button style={styles.button} onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h2>Total: ${getTotal()}</h2>
      <button style={styles.checkout}>Ir a pagar</button>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  item: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "10px",
  },
  button: {
    padding: "6px 10px",
    border: "none",
    backgroundColor: "#c00",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
  checkout: {
    marginTop: "15px",
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
  link: {
    color: "#333",
    textDecoration: "underline",
  }
};
