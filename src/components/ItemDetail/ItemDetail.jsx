import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";



const ItemDetail = ({ id, nombre, precio, stock, img, descripcion }) => {
  //1) Creo un estado con la cantiddad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const {agregarProducto} = useContext(CarritoContext);



  //2) Creo una funcion manejadora de la cantidad
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <h2>{nombre}</h2>
      <img src={img} alt={nombre} />
      <h3>Precio: ${precio}</h3>

      <p>
       {descripcion}
      </p>

      <p>Codigo productos: {id}</p>

      {agregarCantidad > 0 ? (
        <Link className="linkTC" to="/cart">Terminar Compra</Link>
      ) : (
        <ItemCount
          stock={stock}
          inicial={1}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
