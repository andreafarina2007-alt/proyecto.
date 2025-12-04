import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  getTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Cargar carrito inicial desde backend
  useEffect(() => {
    fetch("/api/cart")
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);

  const addToCart = (item: CartItem) => {
    // POST a backend
    fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }).then(() => setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      } else {
        return [...prev, item];
      }
    }));
  };

  const removeFromCart = (id: number) => {
    fetch("/api/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    }).then(() => setCart(prev => prev.filter(i => i.id !== id)));
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el carrito en cualquier componente
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe estar dentro de un CartProvider");
  return context;
};
