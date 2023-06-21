import React from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if(cantidadTotal == 0){
        return(
            <div className='carritoVacio'>
                <h2>
                    No hay productos en el carrito
                </h2>
                <Link className="verP" to='/'>Ver Productos</Link>
            </div>
        )
    }

    console.log(carrito);
    return (
        <div className="cart">
        {carrito.map((producto) => (
          <CartItem key={producto.item.id} {...producto} />
        ))}
        <h3>Total: ${total}</h3>
        <h3>Cantidad total: {cantidadTotal}</h3>
        <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
        <Link className='finalizar' to="/checkout">Finalizar Compra</Link>
      </div>
    )
}

export default Cart
