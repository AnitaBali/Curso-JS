/*
🏹 Tema: Funciones Flecha (Arrow Functions)

Ahora sí, vamos a modernizar tu código. Las funciones flecha se introdujeron en 2015 
y son obligatorias si quieres trabajar con React, Angular o Node.js moderno.

La sintaxis es más corta y limpia.

1. La Anatomía de la Flecha
La principal diferencia visual es que desaparece la palabra function y aparece el símbolo =>.

// Antes (Antigua)
let sumar = function(a, b) {
    return a + b;
};

// Ahora (Flecha)
let sumar = (a, b) => {
    return a + b;
};


El Return Implícito (¡Superpoder!) Si tu función solo tiene una línea de código y devuelve algo, 
puedes borrar las llaves {} y la palabra return. La flecha asume que quieres devolver eso.

// ¡Mira qué limpieza!
let sumar = (a, b) => a + b;


Un solo parámetro Si solo recibes un dato, puedes borrar los paréntesis ().
// Antes
let saludar = (nombre) => {
    return "Hola " + nombre;
};

// Ahora (Flecha PRO)
let saludar = nombre => "Hola " + nombre;


🏋️ Ejercicio de Transformación
Aquí tienes 3 funciones escritas a la "antigua". Tu misión es reescribirlas usando 
Arrow Functions. Intenta dejarlas lo más cortas posible (usando el return implícito si se puede).

**/

let saludar= () => "Hola Mundo";
console.log(saludar());

let cuadrado= x =>x*x;
console.log(cuadrado(2));

let sumar=(a,b) =>a+b;
console.log(sumar(10,5));

let evaluarNota=nota=>{
    if(nota>=5){
        return "Aprobado";
    } else{
        return "Suspenso";
    }
}

console.log(evaluarNota(3));
console.log(evaluarNota(7));