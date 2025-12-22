/*
1. ¿Qué es una Matriz?
Si un Array normal es una fila de asientos en el cine, 
una Matriz es el cine entero (filas y columnas).

Array (Unidimensional): Una lista de elementos. [A, B, C]

Matriz (Bidimensional): Una lista que contiene otras listas. Es una cuadrícula.

¡Perfecto! Vamos a visualizar las matrices desde cero. Olvida el código un segundo y piensa en objetos de la vida real.

1. ¿Qué es una Matriz?
Si un Array normal es una fila de asientos en el cine, una Matriz es el cine entero (filas y columnas).

Array (Unidimensional): Una lista de elementos. [A, B, C]

Matriz (Bidimensional): Una lista que contiene otras listas. Es una cuadrícula.

2. La estructura (Arrays dentro de Arrays)
En JavaScript, escribimos una matriz metiendo arrays dentro de otro 
array principal. Fíjate en los corchetes:

let matriz = [
    ["Pos 0,0", "Pos 0,1"], // Esto es el Array de la Fila 0
    ["Pos 1,0", "Pos 1,1"]  // Esto es el Array de la Fila 1
];

¡Perfecto! Vamos a visualizar las matrices desde cero. Olvida el código un segundo y piensa en objetos de la vida real.

1. ¿Qué es una Matriz?
Si un Array normal es una fila de asientos en el cine, una Matriz es el cine entero (filas y columnas).

Array (Unidimensional): Una lista de elementos. [A, B, C]

Matriz (Bidimensional): Una lista que contiene otras listas. Es una cuadrícula.

2. La estructura (Arrays dentro de Arrays)
En JavaScript, escribimos una matriz metiendo arrays dentro de otro array principal. Fíjate en los corchetes:

JavaScript

let matriz = [
    ["Pos 0,0", "Pos 0,1"], // Esto es el Array de la Fila 0
    ["Pos 1,0", "Pos 1,1"]  // Esto es el Array de la Fila 1
];

3. Las coordenadas (El sistema de "Dirección")
Para encontrar un dato en una matriz, siempre necesitas dos números:

- El primer número: Te dice en qué fila entrar (de arriba a abajo). F

- El segundo número: Te dice en qué columna moverte (de izquierda a derecha). C

Regla nemotécnica: Piensa en los barquitos (Hundir la flota). 
Primero buscas la fila y luego la columna.

Ejemplo: Si tengo este "edificio" de letras:

let edificio = [
    ["A", "B"], // Fila 0
    ["C", "D"]  // Fila 1
];

console.log(edificio[1][0]);
¿Qué letra imprimiría?
- Entra en la Fila 1 (la de abajo).
- Coge el elemento 0 (el primero).
- Resultado: "C".

4. ¿Para qué sirven en la vida real?
Casi todo lo que ves en una pantalla es una matriz:

- Píxeles: Tu pantalla es una matriz de millones de puntitos de colores.
- Mapas de juegos: Un mapa de RPG donde hay hierba, caminos o muros.
- Hojas de Excel: Filas de números y columnas de categorías.
- Tableros: Ajedrez, Sudoku, Tres en raya.


**/

let tienda=[
    ["Manzanas", "Peras"],    //Fila 0
    ["Leche", "Huevos"],      //Fila 1
    ["Pan", "Cereales"]       //Fila 2
];

console.log(tienda[0][1]);
console.log(tienda[2][0]);
console.log(tienda.length);

//Ejemplo Curso Udemy
let matriz=[[],[]];
matriz[0][0]=100;
matriz[0][1]=200;
matriz[0][2]=300;

matriz[1][0]=400;
matriz[1][1]=500;
matriz[1][2]=600;

for(let i=0;i<matriz.length;i++){
    console.log(matriz[i]);
}