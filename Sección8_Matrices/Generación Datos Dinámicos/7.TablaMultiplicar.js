let tabla=[];

for(let f=0;f<10;f++){
    let fila=[];
    for(let c=0;c<10;c++){
        fila.push((f+1)*(c+1));
    }
    tabla.push(fila);
}

console.table(tabla);