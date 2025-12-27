//Cadenas y funciones en JS
//Cadenas inmutables en JS (no se puede modificar su valor)

function cambiarValor(parametro){
    parametro="Adios";

}

//Llamamos a la función
let argumento="Hola";
console.log(`Antes función: ${argumento}`); 
cambiarValor(argumento);
console.log(`Después función: ${argumento}`); 