//Funcions incorporadas en JS
//Obtener el largo de una cadena
let cadena1="Hola";
console.log(cadena1.length);

//No podemos modificar una cadena en JS ya que son inmutables
cadena1[0]="x";
console.log(cadena1);

//Si podemos asignar una nueva cadea
cadena1="Adios";
console.log(cadena1);

//Recorres cada caracter de la cadena
for (let i=0;i<cadena1.length;i++){
    console.log(`N° índice ${i}: ${cadena1[i]}`);
}
