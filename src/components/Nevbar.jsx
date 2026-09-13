import { Link } from "react-router-dom";
function Nevbar({ car = 0, count = 0, cartCount = 0 }) {

  // Support whichever prop name was passed
  const totalItems = cartCount || count || car || 0;

  return (
    <nav className="navbar">
      <h2>ShopEasy</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="cart">
          🛒 Cart ({totalItems})
        </button>
      </div>
    </nav>
  );
}

export default Nevbar;