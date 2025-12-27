function formatearNombre(nombre){
    let transformar=nombre[0].toUpperCase()+nombre.slice(1);
    return transformar;
}

let nombre="alberto";
console.log(formatearNombre(nombre));