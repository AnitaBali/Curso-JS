import prompt from 'prompt';
/*
1. ¿Qué es prompt()?
Es una función integrada en los navegadores web que muestra un cuadro de diálogo 
con un mensaje opcional, solicitando al usuario que introduzca algún texto. 
Es la forma más básica de recibir datos (input) en JavaScript.

2. Sintaxis y Uso
La sintaxis es muy sencilla:
let resultado = prompt("Mensaje para el usuario", "valor por defecto (opcional)");
      - Mensaje: Lo que el usuario lee (ej: "¿Cuál es tu nombre?").
      - Resultado: Lo que el usuario escribe se guarda en la variable.

¡IMPORTANTE!: Todo lo que entra por un prompt() es un String (texto). 
Si el usuario escribe 25, JS lo recibe como "25". Para usarlo como número,
 debes usar Number() o parseInt().

*/

//Saludo simple
const nombre = prompt("Dime tu nombre:");
console.log("Hola, " + nombre + ". ¡Bienvenida al curso!");

//Operación matemática
const num1 = prompt("Introduce el primer número:");
const num2 = prompt("Introduce el segundo número:");
// Si no usamos Number(), "5" + "5" sería "55"
const suma = Number(num1) + Number(num2); 
console.log("La suma es: " + suma);

/*
4. ¿Cuándo y cuánto se usa?
En el aprendizaje: Se usa muchísimo. Es la herramienta perfecta para probar algoritmos, 
promesas y lógica sin tener que crear formularios complejos en HTML.

En proyectos profesionales: Se usa muy poco o nada. Los programadores prefieren crear 
sus propios cuadros de diálogo con CSS o usar formularios de HTML porque el prompt() 
original es "feo", no se puede personalizar y detiene la ejecución del código hasta 
que el usuario responde.

5. Casos Especiales (Valores nulos)
¿Qué pasa si el usuario hace clic en "Cancelar" o no escribe nada?
     - Si pulsa Cancelar: El valor será null.
     - Si pulsa Aceptar sin escribir: El valor será un string vacío "".
*/