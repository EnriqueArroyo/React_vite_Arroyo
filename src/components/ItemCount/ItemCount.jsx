import "./ItemCount.css";
import { useState, useEffect } from "react";

const ItemCount = ({ stock, inicial }) => {
  const [contador, setContador] = useState(inicial);
  const [color, setColor] = useState("black");

  useEffect(() => {
    console.log("Se ejecuto useEffect");
    if (contador > 5) {
      setColor("red");
    } else {
      setColor("black");
    }
  }, [contador]);

  const agregarAlCarrito = () => {
    console.log(`Agregado ${contador} items`);
  };

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
    <div>
      <button onClick={disminuirContador}>-</button>
      <strong>{contador}</strong>
      <button onClick={aumentarContador}>+</button>
      <br />
      <button id="boton" onClick={agregarAlCarrito} style={{ color: color }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
