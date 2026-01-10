'use strict'
//Con quokka nos dejara usar el hoisting, pero al poner el uso strict no nos dejará en otros terminales

//Podemos crear una variable y luego mas tarde inicializarla
let y; //Declaramos la variable
y=100; //Inicializamos la variable
console.log(y);


//Hoisting con var: podemos inicializar una variable y despues declararla
x=25
console.log(x);
var x;

//Hoisting con let: no se puede hacer, daría error. Let es más seguro.
//z=25
//console.log(z);
//let z;
