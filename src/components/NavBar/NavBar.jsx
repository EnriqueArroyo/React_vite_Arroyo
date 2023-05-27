import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const img = "../../../public/img/Arrow_RetroBlue_Gold.png";
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"}>
          <img src={img} alt="" width={50} />
        </Link>
        <Link to={"/"}>
          <h1 className="logoh1">Arrow</h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`}></NavLink>
            </li>
            <NavLink className="navLink" to={`/categoria/1`}>
              Categoria 1
            </NavLink>
            <NavLink className="navLink" to={`/categoria/2`}>
              Categoria 2
            </NavLink>
            <NavLink className="navLink" to={`/categoria/3`}>
              Categoria 3
            </NavLink>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
