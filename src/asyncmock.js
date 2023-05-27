const productos = [
    {nombre: "Producto 1", precio: 111, id: "1", img: "/public/img/producto.png", idCat: "1"},
    {nombre: "Producto 2", precio: 222, id: "2", img: "/public/img/producto.png", idCat: "2"},
    {nombre: "Producto 3", precio: 333, id: "3", img: "/public/img/producto.png", idCat: "2"},
    {nombre: "Producto 4", precio: 444, id: "4", img: "/public/img/producto.png", idCat: "3"},
    {nombre: "Producto 5", precio: 555, id: "5", img: "/public/img/producto.png", idCat: "3"},
    {nombre: "Producto 6", precio: 666, id: "6", img: "/public/img/producto.png", idCat: "3"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}

//Funcion que retorne un solo item

export const getUnProducto = (id) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto)
        }, 2000)
    })
}

//Funcion que retonre la categoria completa

export const getProductosPorCat = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout(()=>{
            const productosCat = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCat);
        }, 100)
    })
}