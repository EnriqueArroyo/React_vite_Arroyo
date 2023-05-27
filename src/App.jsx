import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Categorias from "./components/Categorias/Categorias";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenido a Tienda Arrow, todavia no se de que va a tratar"}/>}/>
          <Route path='/categoria/:idCategoria' element = {<ItemListContainer/>}/>
          <Route path='/item/:idItem' element= {<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      
      
     
    </>
  );
}

export default App;
