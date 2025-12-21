let notas=[4,8,3,10,5];
let sumaNotas=0;
let notaMaxima=0;

for(let i=0; i<notas.length;i++){
    sumaNotas+=notas[i];
    if(notas[i]>=5){
        console.log(`Nota ${notas[i]}: APROBADO`);
    }else{
         console.log(`Nota ${notas[i]}: SUSPENDIDO`);
    }

    if (notas[i]>notaMaxima){
        notaMaxima=notas[i];
    }
}

console.log(`La nota más alta es de ${notaMaxima}.`)
console.log(`La suma de las notas es de ${sumaNotas}.`)
console.log(`La nota media es de ${sumaNotas/notas.length}.`)