
const ADD_PELICULA = (nombre, precio, img, id) => {
    return{
        type : 'ADD_PELICULA',
        nombre: nombre,
        precio: precio,
        img : img,
        id : id
    }
}
const ADD_CANTIDAD = (cantidad) => {
    return{
        type : 'ADD_PELICULA',
        cantidad: cantidad
    }
}
export default ADD_PELICULA;