import "../Styles/main.css"
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <h1 className="logo">Ecommerce</h1>
        </Link>
        <div className="nav justify-content-center">
          <NavLink to={`/category/lp`} className="nav-link text-secondary">
            LP
          </NavLink>
          <NavLink to={`/category/ep`} className="nav-link text-secondary">
            EP
          </NavLink>
          <NavLink to={`/category/mixtape`} className="nav-link text-secondary">
            Mixtape
          </NavLink>
        </div>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
