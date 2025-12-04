import { useCart } from "../context/CartContext";

// Dentro del componente
const { addToCart } = useCart();

// Al hacer clic en "Añadir al carrito"
<button
  style={styles.addButton}
  onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, quantity: 1 })}
>
  Añadir al carrito
</button>
