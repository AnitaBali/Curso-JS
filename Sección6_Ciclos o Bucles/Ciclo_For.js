/**
 * Ciclo For:
 * El ciclo "for" es una estructura de control que permite repetir un bloque
 * de código un número específico de veces.
 * Sintaxis básica:
 * for (inicialización; condición; incremento) {
 *     // código a ejecutar en cada iteración 
 * } 
 */

//Imprimir los números del 1 al 10

for(let i=1; i<=10; i++){
    console.log(i);
}

//Calcular la suma de los primeros 10 números naturales
let suma = 0;
for(let i=1; i<=10; i++){
    suma += i; // suma = suma + i
}
console.log("La suma de los primeros 10 números naturales es: " + suma);
