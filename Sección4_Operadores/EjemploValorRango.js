//Valor dentro de un rango
//Variables
let minimo=0; 
let maximo=5;
let dato=10;

//Variable para verificar si el valor dato esta dentro del rango
let dentroRango= dato >=minimo && dato<=maximo;

//Imprimimos resultado
console.log(`El valor "${dato}" es ${dentroRango}.`);