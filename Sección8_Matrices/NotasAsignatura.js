let notas = [
    [10, 6], // Alumno 0: [Mates, Lengua]
    [8, 4],  // Alumno 1: [Mates, Lengua]
    [6, 8]   // Alumno 2: [Mates, Lengua]
];

for(let c=0;c<notas[0].length;c++){
    let sumaAs=0;
    for(let f=0;f<notas.length;f++){
        sumaAs+=notas[f][c];
    }

    console.log(`La suma total de la asignatura ${c} es de ${sumaAs}.`);

} 
