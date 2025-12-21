/**
 * Ciclo Do While:  
 * El ciclo do while es similar al ciclo while, pero la condición se evalúa después 
 * de ejecutar el bloque de código.
 * Esto significa que el bloque de código se ejecutará al menos una vez, 
 * independientemente de si la condición es verdadera o falsa.
 * Sintaxis:
 * do {
 *  // Bloque de código a ejecutar
 * } while (condición);
 */

//Imprimir los números del 1 al 5 usando un ciclo do while
let contador = 1;
let repeticiones = 5;
do {
    console.log(contador);
    contador++;
} while (contador <= repeticiones);

//Ejemplo de ciclo do while para sumar números hasta que la suma sea mayor a 20
let suma = 0;
let numero = 0;
do {
    numero = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
    suma += numero;
    console.log(`Número generado: ${numero}, Suma actual: ${suma}`);
} while (suma <= 20);

console.log(`La suma final es: ${suma}`);