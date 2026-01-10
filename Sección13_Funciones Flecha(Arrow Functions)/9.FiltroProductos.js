const filtrarPorTipo = (lista, tipoBuscado) => {
    let filtrados = [];
    
    for (let producto of lista) {
        if (producto.tipo === tipoBuscado) {
            filtrados.push(producto);
        }
    }
    
    return filtrados;
};

let carrito = [
    { nombre: "Manzana", precio: 1.5, tipo: "Comida" },
    { nombre: "Lejía", precio: 3.0, tipo: "Limpieza" },
    { nombre: "Pan", precio: 0.8, tipo: "Comida" }
];

console.log(filtrarPorTipo(carrito, "Comida"));