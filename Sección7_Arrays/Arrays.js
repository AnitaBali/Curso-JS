/*
1. ¿Qué es un Array?
Imagina que una variable normal es una caja donde solo cabe una cosa. 
Un Array es un estante con varios compartimentos. Cada compartimento 
tiene un número llamado índice.

2. Cómo se declaran (Sintaxis)
En JavaScript, se usan los corchetes [] para crear la lista.

// Opción A: Crear el array vacío y añadir datos luego
let nombres = [];

// Opción B: Crear el array ya con datos (lo más común)
let frutas = ["Manzana", "Pera", "Plátano"];

3. Cómo acceder a los datos
Para sacar un dato del "estante", usas el nombre de la variable 
y el índice entre corchetes.

let marcas = ["Tesla", "Audi", "BMW"];

console.log(marcas[0]); // Imprime: Tesla
console.log(marcas[2]); // Imprime: BMW

4. Propiedades y Métodos básicos
Los Arrays tienen "superpoderes" integrados. El más importante 
es .length, que te dice cuántos elementos hay.

let alumnos = ["Ana", "Luis", "Pedro", "Marta"];
console.log(alumnos.length); // Imprime: 4

**/

//Declarar Array
let listaNumeros=[];
console.log(typeof(listaNumeros));

//Asignar valor a un índice
listaNumeros[0]=12;
listaNumeros[1]=15;
listaNumeros[3]="Ana";

//Leer valores
console.log(`Elemento 1 -[0]: ${listaNumeros[0]}`);
console.log(`Elemento 2 -[1]: ${listaNumeros[1]}`);
console.log(`Elemento 3 -[2]: ${listaNumeros[2]}`);
console.log(`Elemento 4 -[3]: ${listaNumeros[3]}`);

