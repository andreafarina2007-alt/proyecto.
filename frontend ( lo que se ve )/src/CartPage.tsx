import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Carrito de Compras</h1>

      {cart.length === 0 && <p>Tu carrito está vacío.</p>}

      <div style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
        {cart.map(item => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#ff4d4f",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <h2 style={{ marginTop: "20px" }}>Total: ${getTotal()}</h2>
      )}
    </div>
  );
}
