import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProductos, getProductosPorCat } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCat : getProductos;

    funcionProductos(idCategoria)
      .then((res) => setProductos(res))
      .catch((error) => console.error(error))
  }, [idCategoria]);

  return (
    <>
      <h2 className="titulo">{greeting}</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
