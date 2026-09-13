import ProductCard from "./ProductCard";

function Products({ addToCart, addToCard }) {
  const handleAddToCart = addToCart || addToCard;

  const products = [
    {
      id: 1,
      name: "Running Shoes",
      description: "Comfortable shoes for everyday running.",
      price: 59.99,
      image: "👟",
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Modern smartwatch with many features.",
      price: 89.99,
      image: "⌚️",
    },
    {
      id: 3,
      name: "Headphones",
      description: "Wireless headphones with clear sound.",
      price: 49.99,
      image: "🎧",
    },
    {
      id: 4,
      name: "Backpack",
      description: "Stylish backpack for school and travel.",
      price: 39.99,
      image: "🎒",
    },
  ];

  return (
    <section className="products" id="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
            addToCard={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;