/*
¡Has llegado a la cima de la asincronía! Async/Await no es algo nuevo que sustituya 
a las Promesas, sino que es una "capa de azúcar sintáctico". 
Es decir, es una forma más elegante y legible de escribir lo mismo que ya sabes 
hacer con .then() y .catch().

Imagina que las Promesas son como leer un manual de instrucciones con saltos de página, 
y Async/Await es como leer una lista de pasos uno debajo del otro.

📘 ¿Qué es Async y Await?

      - 1. La palabra clave async
        Se coloca siempre antes de la definición de una función.
          > Indica que la función siempre devolverá una promesa.
          > Habilita el uso de await dentro de ella.

async function miFuncion() {
    return "Hola"; // JS lo envuelve automáticamente en una Promesa resuelta
}

      - 2. La palabra clave await
        Solo se puede usar dentro de una función async.
           > Hace que JavaScript espere a que la promesa se resuelva o se rechace 
             antes de pasar a la siguiente línea.
           > Mientras espera, no bloquea el resto del programa; 
             simplemente pausa esa función específica.


🛠️ La Estructura: Try...Catch
Como ya no usamos .catch() al final de una cadena, los errores se manejan con el bloque 
try...catch que ya conoces de la Sección 12.


const obtenerDatos = async () => {
    try {
        const respuesta = await miPromesa(); // Espera el éxito
        console.log(respuesta);
    } catch (error) {
        console.log("Error capturado: " + error); // Captura el reject
    }
};


Característica     Promesas (.then)                        Async / Await
Lectura            Se lee "hacia adentro" (anidado)        Se lee de arriba a abajo (lineal)
Errores            Se usa .catch()                         Se usa try { ... } catch
Variables          Difícil compartir datos entre .then     Muy fácil, son variables normales

❓ ¿Cuándo se usa?
Se usa en el 99% de los proyectos modernos. 
Es el estándar de la industria porque evita el desorden visual 
cuando tienes que esperar varias cosas seguidas 
(por ejemplo: pedir permiso al usuario -> esperar respuesta 
-> guardar en base de datos -> mostrar mensaje).

*/

//1. La Promesa (El motor)
const hacerCafe = (tipo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tipo === "capuchino") {
                resolve("☕ Aquí tienes tu Capuchino delicioso.");
            } else {
                reject("❌ No nos queda de ese café.");
            }
        }, 2000);
    });
};

//Opción A: Con .then() y .catch() (Lo que ya sabes)
hacerCafe("capuchino")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))
    .finally(() => console.log("Gracias por venir."));

//Opción B: Con Async / Await (La forma moderna)
const pedirEnLaCaja = async () => {
    try {
        console.log("Pidiendo café...");
        
        // Aquí le decimos a JS: "Para aquí y espera a que el café esté listo"
        const resultado = await hacerCafe("capuchino"); 
        
        // Esta línea NO se ejecuta hasta que la promesa de arriba termina
        console.log(resultado); 
        
    } catch (error) {
        // Si la promesa hace 'reject', saltamos directamente aquí
        console.log(error);
    } finally {
        console.log("Gracias por venir.");
    }
};

pedirEnLaCaja();

/*
🗝️ Las 3 claves del ejemplo:
La función padre: Tiene que llevar async al principio (async () => { ... }). 
Si no lo pones, el await dará error.

El await: Se pone justo antes de llamar a la función que devuelve la promesa.
"Limpia" el resultado y lo guarda directamente en una variable (resultado).

El try/catch: Es obligatorio si quieres capturar el error. 
Si la promesa falla (reject), el código deja de ejecutarse en el try y salta al catch.
*/