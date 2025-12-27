//Redondeo

let numero=8.5;
let redondeoAlMasCercano=Math.round(numero); //Valor entero más cercano
let redondeoBajo=Math.floor(numero); //Redondeo al piso
let redondeoAlto=Math.ceil(numero); //Redondeo al techo

console.log(redondeoAlMasCercano);
console.log(redondeoBajo);
console.log(redondeoAlto);

//Truncado elimina los decimales, sin redondear
let numero2=9.84450;
let truncado=Math.trunc(numero2);
console.log(truncado);