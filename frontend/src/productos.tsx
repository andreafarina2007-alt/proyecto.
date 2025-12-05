import { products } from "./productsData"

export default function Productos() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Productos</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map(product => (
          <div key={product.id} style={{
            background: "white",
            borderRadius: "10px",
            padding: "15px",
            width: "250px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            textAlign: "center"
          }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: "200px", height: "200px", objectFit: "contain" }}
            />

            <h2 style={{ color: "black" }}>{product.name}</h2>
            <p style={{ color: "#E13FC0", fontWeight: "bold" }}>
              {product.price} €
            </p>

            <button 
              style={{
                background: "linear-gradient(to right, #ff0080, #a600ff)",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Añadir al carrito
            </button>

          </div>
        ))}
      </div>
    </div>
  )
}
src/products/

