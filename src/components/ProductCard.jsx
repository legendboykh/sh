function ProductCard({ product, addToCart, addToCard }) {
  const handleAdd = addToCart || addToCard;
  return (
    <div className="product-card">
      <div className="product-image">
        {product.image}
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <button onClick={() => handleAdd && handleAdd(product)}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;