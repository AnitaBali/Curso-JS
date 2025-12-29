let alumno={
    nombre:"Carlos"
}

function calificar(nota,materia){
    return `${this.nombre} ha sacado un ${nota} en ${materia}`;
};

console.log(calificar.call(alumno, 8, "Psicología"));