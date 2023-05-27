import React from "react";
import { useRef } from "react";
//Un hook que permite crear una referencia mutable que puede ser actualizada sin provocar una renderización del componente
//Puedo cambiar el valor de un objeto sin que se vuelva a renderizar

const UseRef = () => {
  const contadorCarrito = useRef(0);

  //Retorna un objeto con la propiedad current
  function agregarAlCarrito(){
    contadorCarrito.current = contadorCarrito.current=1;
    console.log(contadorCarrito.current);
  }

  return (
    <div>
      <h3>UseRef</h3>
      <button onClick={agregarAlCarrito}> Agregar al carrito</button>
    </div>
  );
};

export default UseRef;
