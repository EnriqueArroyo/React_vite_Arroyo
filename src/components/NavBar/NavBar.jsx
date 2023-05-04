import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"



const NavBar = () => {
  const img = '../../../public/img/Arrow_RetroBlue_Gold.png';
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={img} alt="" width={50}/>
        <h1>Arrow</h1>

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
            <li className="nav-item">Inicio</li>
            <li className="nav-item">Productos</li>
            <li className="nav-item">Contato</li>
          </ul>
        </nav>
        <CartWidget/>
      </div>
    </header>
  );
};

export default NavBar;
