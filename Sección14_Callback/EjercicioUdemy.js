//Funcion de tipo Callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){ 
    let resultado = op1 + op2;
    funcionCallback("El resultado de la suma es: " + resultado);
}

sumar(5, 3, imprimir); // Al llamar a la función sumar, se le pasa como tercer argumento la función imprimir
// La función sumar no hace nada con el callback, por lo que no se imprime nada en consola