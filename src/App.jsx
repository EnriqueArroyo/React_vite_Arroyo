import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a Tienda Arrow, todavia no se de que va a tratar"}/>
    </>
  )
}

export default App
