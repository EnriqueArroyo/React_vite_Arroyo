import "./CartWidget.css";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCart = "../../../public/img/shopping-cart.png";

  return (
    <>
      <div className="cartBox">
        <Link to="/cart">
          {cantidadTotal > 0 && <span>{cantidadTotal} </span>}
          <img src={imgCart} alt="" />
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
