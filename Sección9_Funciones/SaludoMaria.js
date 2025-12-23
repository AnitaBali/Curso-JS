function prepararNombre(nombre){
    return nombre.toUpperCase();
}

function generarBienvenida(nombre){
    return "BIENVENIDO " + nombre;
}

let usuario = "maria";
let nombreMayusculas=prepararNombre(usuario);
let saludoFinal=generarBienvenida(nombreMayusculas);
console.log(saludoFinal);