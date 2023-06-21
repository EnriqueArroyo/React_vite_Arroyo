import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { carrito, total, cantidadTotal, vaciarCarrito } =
    useContext(CarritoContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [fechaActual, setFechaActual] = useState(new Date());

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !confirmarEmail) {
      setError("Por favor complete todos los cambios");
      return;
    }
    if (email !== confirmarEmail) {
      setError("Los campos de email no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: carrito.reduce(
        (total, producto) => total + producto.item.precio * producto.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email,
      fechaActual,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        setError("sSe produjo un error al crear la orden");
      });
  };

  if (cantidadTotal != 0) {
    return (
      <div className="checkout">
        <h2>Checkout</h2>
        <form onSubmit={manejadorFormulario}>
          {carrito.map((producto) => (
            <div key={producto.item.id}>
              <p>
                {producto.item.nombre}x{producto.cantidad}
              </p>
              <p>Precio: ${producto.item.precio}</p>

              <hr />
            </div>
          ))}
          <h2>Total: ${total}</h2>
          <h3>Cntidad de productos: {cantidadTotal} productos</h3>
          <hr />
          <div>
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Apellido</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Telefono</label>
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Confirmación</label>
            <input
              type="email"
              value={confirmarEmail}
              onChange={(e) => setConfirmarEmail(e.target.value)}
              name=""
              id=""
            />
          </div>

          {error && <p>{error}</p>}

          <button type="submit">Finalizar compra</button>
        </form>
        {ordenId && (
          <strong>
            Gracias por su compra. Su numero de orden es {ordenId}
          </strong>
        )}
      </div>
    );
  } else {
    return (
      <div className="carritoVacio">
        <h2 >No hay productos en el carrito</h2>
        <Link className="verP" to="/">Ver Productos</Link>
      </div>
    );
  }
};

export default Checkout;
