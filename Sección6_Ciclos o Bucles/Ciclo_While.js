/**
 * Ciclo While:
 * El ciclo while ejecuta un bloque de código mientras una condición especificada sea verdadera.
 * Sintaxis:
 * while (condición) {
 *   // código a ejecutar mientras la condición sea verdadera
 * } 
 */

//Imprimir los valores del 0 al 5 
let contador = 0;
let repeticiones = 5;

while (contador <= repeticiones) {
    console.log("El valor del contador es: " + contador);
    contador++; // Incrementar el contador para evitar un ciclo infinito
}