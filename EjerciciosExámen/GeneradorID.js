/*
Cada alumno necesita un código aleatorio. Crea una función llamada generarID().

Debe devolver un número entero aleatorio entre 1000 y 9999.

Pista: Recuerda la fórmula Math.floor(Math.random() * (max - min + 1) + min).
**/

function generadorID(){
    let generadorId=Math.floor(Math.random()*9000)+1000;
    return generadorId;
}

alumno1=generadorID();
alumno2=generadorID();
console.log(alumno1);
console.log(alumno2);