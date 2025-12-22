let notas = [
    [8, 7, 9], // Alumno 0
    [4, 6, 5], // Alumno 1
    [10, 9, 9] // Alumno 2
];

let sumaNotas=0;
let cantidadNotas=0;


for(let f=0;f<notas.length;f++){
    for(let c=0;c<notas[f].length;c++){
        sumaNotas+=notas[f][c];
        cantidadNotas++;
    }
}

console.log(`Hay un total de ${cantidadNotas} notas.`)
console.log(`La suma de todas las notas es de un total de: ${sumaNotas}`);
console.log(`La media es de ${sumaNotas/cantidadNotas}.`)