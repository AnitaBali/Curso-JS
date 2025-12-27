//Alcance de Variable en JS

let variableGlobal=5;

//Definicion funcion
function miFuncion(variableLocal){
    console.log(variableLocal);
    //Modificamos la variable global
    variableGlobal=20;
    //No podemos redefinir una variable global (let)
    
}   

//Llamamos a la funcion
console.log(variableGlobal);
miFuncion(variableGlobal); //Imprimira el valor de la local
console.log(variableGlobal);
