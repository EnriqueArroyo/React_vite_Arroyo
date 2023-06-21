import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, img}) => {
  return (
  <div className="cardProducto">
    <img className="imgProducto" src={img} alt={nombre} />
    <h3>{nombre}</h3>
    <p>Precio: ${precio}</p>
    <Link className="btnProducto" to={`/item/${id}`}>Ver detalle</Link>
  </div>
  )
}

export default Item;
