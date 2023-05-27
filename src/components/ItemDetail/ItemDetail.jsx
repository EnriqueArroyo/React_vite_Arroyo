import React from 'react'
import './ItemDetail.css'   


const ItemDetail = ({id, nombre, precio, img}) => {
    

  return (
    <div className='contenedorItem'>
        <h2>{nombre}</h2>
        <img src={img} alt={nombre} />
        <h3>Precio: ${precio}</h3>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur dolorum quam sint ipsam necessitatibus corrupti nemo excepturi quibusdam doloribus soluta laudantium voluptatum, ratione in, harum officiis eligendi rem? Delectus.</p>

        <h3>Codigo producto: {id}</h3>
    </div>
  )
}

export default ItemDetail