import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/" className="icon-container">
        <img className="icon" src="./icon.png" />
        <p className="icon-name">WorldWise</p>
      </Link>
      <nav className="nav">
        <Link to="/product">Product</Link>
        <Link to="/pricing">Pricing</Link>
        <li className="login">
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </li>
      </nav>
    </header>
  );
}
