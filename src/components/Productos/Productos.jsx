import React from "react";
import { useState, useEffect } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../services/config";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const misProductos = query(collection(db, "productos"));

    getDocs(misProductos).then((respuesta) => {
      setProductos(
        respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  return (
    <div className="cardProducto">
    <img className="imgProducto" src={img} alt={nombre} />
    <h3>{nombre}</h3>
    <p>Precio: ${precio}</p>
    <p>Codigo de producto: {id}</p>
    <Link className="btnProducto" to={`/item/${id}`}>Ver detalle</Link>
  </div>
  );
};

export default Productos;
