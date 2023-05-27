import React from "react";
import { useRef } from "react";

const UseRefDom = () => {
  const ref = useRef(null);
  const handleClick = () => {
    if (ref.current) {
      ref.current.textContent = "Este texto se modifico con useRef";
    }
  };

  return (
    <div>
      <p ref={ref}>Texto original</p>
      <button onClick={handleClick}> Botón</button>
    </div>
    
  );
};

export default UseRefDom;
