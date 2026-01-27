'use strict';
let resultado=-5;

try{
    if(isNaN(resultado)) throw "El valor no es un número";
    else if(resultado=== "") throw "El valor es una cadena vacía";
    else if(resultado >= 0) throw "El valor es positivo";
    else if(resultado < 0) throw "El valor es negativo";

}catch(error){
    console.log(error);

}finally{
    console.log("El bloque try...catch ha finalizado");
}