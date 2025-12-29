let producto={
    nombre:"Zapatillas",
    precio:50
};

function mostrarPrecios(moneda){
    return `El producto ${this.nombre} cuesta ${this.precio} ${moneda}`;
};

console.log(mostrarPrecios.call(producto, "euros"));
