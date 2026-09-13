function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Discover Your Style</h1>
        <p>
          Find the best products at amazing prices. Shop your new favorite items today with fast and reliable shipping.
        </p>
        <button onClick={() => {
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}>
          Shop Now
        </button>
      </div>
      <div className="hero-image">
        🛍️
      </div>
    </section>
  );
}

export default Hero;
