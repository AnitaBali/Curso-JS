let ingles={
    saludo:"Hello"
};

function decir(nombre){
    return `${this.saludo} ${nombre}`;
};

let saludoIngles=decir.bind(ingles);
console.log(saludoIngles("Jhon"));