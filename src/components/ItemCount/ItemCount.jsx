import "./ItemCount.css";
import { useState, useEffect } from "react";

const ItemCount = ({ stock, inicial, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (contador == stock) {
      setColor("red");
    } else {
      setColor("black");
    }
  }, [contador]);

  // const agregarAlCarrito = () => {
  //   console.log(`Agregado ${contador} items`);
  // };

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const disminuirContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };
  return (
    <>
      <div>
        <button className="btnStock" onClick={disminuirContador}>-</button>
        <strong>{contador}</strong>
        <button className="btnStock" onClick={aumentarContador}>+</button>
        <br />
        <button
          id="boton"
          className="btnProducto"
          onClick={() => funcionAgregar(contador)}
          style={{ color: color }}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
