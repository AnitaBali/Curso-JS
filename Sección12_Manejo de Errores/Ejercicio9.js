'use strict'
//Use strict se usa para evitar errores comunes y tener un código más seguro, 
//nos avisa de variables no declaradas, de uso de palabras reservadas, funciones duplicadas,
//funciones no declaradas, entre otros.


try{
    let x=10;
    //miFuncion();
} catch(error){
    console.log("¡Error atrapado! El programa sigue funcionando.");
} finally{
    console.log("El bloque finally se ejecuta siempre.");
}

console.log("Fin del ejercicio.");