import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, precio, stock, img }) => {
  //1) Creo un estado con la cantiddad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //2) Creo una funcion manejadora de la cantidad
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  };

  return (
    <div className="contenedorItem">
      <h2>{nombre}</h2>
      <img src={img} alt={nombre} />
      <h3>Precio: ${precio}</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        consequuntur dolorum quam sint ipsam necessitatibus corrupti nemo
        excepturi quibusdam doloribus soluta laudantium voluptatum, ratione in,
        harum officiis eligendi rem? Delectus.
      </p>

      <h3>Codigo producto: {id}</h3>

      {agregarCantidad > 0 ? (
        <Link to="/cart">Terminar Compra</Link>
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
