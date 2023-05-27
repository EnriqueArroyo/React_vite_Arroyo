import "./Categorias.css";
import { useState, useEffect } from "react";

const Categorias = () => {
  const [categoria, setCategoria] = useState("");

  useEffect(()=>{
document.title = `categoria: ${categoria}`;
  },[categoria])

  const handleClick = (categoria) => {
    setCategoria(categoria)
  }

  return (
    <div>
      <h2>Categorias de Productos</h2>
      <button onClick={()=> handleClick("Categoria1")}>Categoria 1</button>
      <button onClick={()=> handleClick("Categoria2")}>Categoria 2</button>
      <button onClick={()=> handleClick("Categoria3")}>Categoria 3</button>
      <button onClick={()=> handleClick("Categoria4")}>Categoria 4</button>
    </div>
  );
};

export default Categorias;
