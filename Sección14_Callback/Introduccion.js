/*
📞 ¿Qué es un Callback?
Un Callback es una función que se pasa a otra función como un argumento 
(como si fuera un número o un texto), para que esta segunda función la 
"llame de vuelta" (call back) en algún momento.

En JavaScript, las funciones son "objetos de primera clase". 
Esto significa que pueden ser tratadas como cualquier otra variable: 
puedes guardarlas en arrays, pasarlas a funciones y devolverlas desde funciones.

🛠️ Sintaxis y Funcionamiento
La estructura básica se divide en dos partes: 
la función que recibe el callback y 
la función que es el callback.

1. La función que recibe el Callback
Esta función tiene un parámetro (normalmente llamado callback o cb) 
que ella asume que será una función.

function funcionPrincipal(dato, callback) {
    // Hace algo con el dato
    console.log("Procesando...");
    
    // Ejecuta el callback cuando decide que es el momento
    callback(dato); 
}

2. Pasando el Callback
Cuando llamamos a la principal, le pasamos el nombre de la otra función sin paréntesis.

const miCallback = (d) => console.log("Resultado final: " + d);

// Llamada correcta:
funcionPrincipal("Hola", miCallback);


❓ ¿Cuándo se suelen utilizar?
Los callbacks son el pilar de tres situaciones fundamentales en JavaScript:

A. Programación Asíncrona (La más importante)
Cuando JS tiene que esperar a que algo termine (leer un archivo, una petición 
a una base de datos, un temporizador), no bloquea el programa. En su lugar, 
dice: "Sigue con lo tuyo, y cuando esto termine, ejecuta este callback".

B. Eventos del DOM
Cuando haces clic en un botón, JavaScript ejecuta una función. 
Esa función que se ejecuta al hacer clic es un callback.
boton.addEventListener("click", () => { ... });

C. Métodos de Arrays
Muchos métodos modernos de JavaScript usan callbacks para decidir qué hacer con cada elemento.
array.forEach(elemento => { ... }); (La flecha es el callback).


¡Excelente! Entender bien los Callbacks es el paso previo necesario para comprender las Promesas y el JavaScript Asíncrono. Vamos con la teoría pura.

📞 ¿Qué es un Callback?
Un Callback es una función que se pasa a otra función como un argumento (como si fuera un número o un texto), para que esta segunda función la "llame de vuelta" (call back) en algún momento.

En JavaScript, las funciones son "objetos de primera clase". Esto significa que pueden ser tratadas como cualquier otra variable: puedes guardarlas en arrays, pasarlas a funciones y devolverlas desde funciones.

🛠️ Sintaxis y Funcionamiento
La estructura básica se divide en dos partes: la función que recibe el callback y la función que es el callback.

1. La función que recibe el Callback
Esta función tiene un parámetro (normalmente llamado callback o cb) que ella asume que será una función.

JavaScript

function funcionPrincipal(dato, callback) {
    // Hace algo con el dato
    console.log("Procesando...");
    
    // Ejecuta el callback cuando decide que es el momento
    callback(dato); 
}
2. Pasando el Callback
Cuando llamamos a la principal, le pasamos el nombre de la otra función sin paréntesis.

JavaScript

const miCallback = (d) => console.log("Resultado final: " + d);

// Llamada correcta:
funcionPrincipal("Hola", miCallback); 
❓ ¿Cuándo se suelen utilizar?
Los callbacks son el pilar de tres situaciones fundamentales en JavaScript:

A. Programación Asíncrona (La más importante)
Cuando JS tiene que esperar a que algo termine (leer un archivo, una petición a una base de datos, un temporizador), no bloquea el programa. En su lugar, dice: "Sigue con lo tuyo, y cuando esto termine, ejecuta este callback".

B. Eventos del DOM
Cuando haces clic en un botón, JavaScript ejecuta una función. Esa función que se ejecuta al hacer clic es un callback.

boton.addEventListener("click", () => { ... });

C. Métodos de Arrays
Muchos métodos modernos de JavaScript usan callbacks para decidir qué hacer con cada elemento.

array.forEach(elemento => { ... }); (La flecha es el callback).

⚠️ La Regla de Oro: El Nombre vs. La Ejecución
Este es el error número uno de los principiantes:

miFuncion -> Es la función en sí (como una herramienta guardada en la caja). 
ESTO se pasa como callback.

miFuncion() -> Es el resultado de ejecutar la función.

Si pasas callback() con paréntesis, le estás pasando a la función principal 
lo que esa función devuelve, no la función misma.

¡Excelente! Entender bien los Callbacks es el paso previo necesario para comprender las Promesas y el JavaScript Asíncrono. Vamos con la teoría pura.

📞 ¿Qué es un Callback?
Un Callback es una función que se pasa a otra función como un argumento (como si fuera un número o un texto), para que esta segunda función la "llame de vuelta" (call back) en algún momento.

En JavaScript, las funciones son "objetos de primera clase". Esto significa que pueden ser tratadas como cualquier otra variable: puedes guardarlas en arrays, pasarlas a funciones y devolverlas desde funciones.

🛠️ Sintaxis y Funcionamiento
La estructura básica se divide en dos partes: la función que recibe el callback y la función que es el callback.

1. La función que recibe el Callback
Esta función tiene un parámetro (normalmente llamado callback o cb) que ella asume que será una función.

JavaScript

function funcionPrincipal(dato, callback) {
    // Hace algo con el dato
    console.log("Procesando...");
    
    // Ejecuta el callback cuando decide que es el momento
    callback(dato); 
}
2. Pasando el Callback
Cuando llamamos a la principal, le pasamos el nombre de la otra función sin paréntesis.

JavaScript

const miCallback = (d) => console.log("Resultado final: " + d);

// Llamada correcta:
funcionPrincipal("Hola", miCallback); 
❓ ¿Cuándo se suelen utilizar?
Los callbacks son el pilar de tres situaciones fundamentales en JavaScript:

A. Programación Asíncrona (La más importante)
Cuando JS tiene que esperar a que algo termine (leer un archivo, una petición a una base de datos, un temporizador), no bloquea el programa. En su lugar, dice: "Sigue con lo tuyo, y cuando esto termine, ejecuta este callback".

B. Eventos del DOM
Cuando haces clic en un botón, JavaScript ejecuta una función. Esa función que se ejecuta al hacer clic es un callback.

boton.addEventListener("click", () => { ... });

C. Métodos de Arrays
Muchos métodos modernos de JavaScript usan callbacks para decidir qué hacer con cada elemento.

array.forEach(elemento => { ... }); (La flecha es el callback).

⚠️ La Regla de Oro: El Nombre vs. La Ejecución
Este es el error número uno de los principiantes:

miFuncion -> Es la función en sí (como una herramienta guardada en la caja). ESTO se pasa como callback.

miFuncion() -> Es el resultado de ejecutar la función.

Si pasas callback() con paréntesis, le estás pasando a la función principal lo que esa función devuelve, no la función misma.

🌀 El "Callback Hell" (El Infierno de los Callbacks)
Antiguamente, para hacer varias cosas asíncronas seguidas, se anidaban callbacks dentro de otros, 
creando un código en forma de pirámide muy difícil de leer. Por eso hoy existen las Promesas, 
pero para entender las Promesas, primero hay que dominar los callbacks.


**/


const saludar = nombre => console.log("Hola " + nombre);

// Función de alto nivel (recibe callback)
const procesarEntrada = callback => {
    const nombre = "Ana";
    callback(nombre);
};

procesarEntrada(saludar);