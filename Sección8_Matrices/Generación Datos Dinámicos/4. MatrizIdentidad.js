//Crea una matriz de 4x4 llena de ceros (0), pero con una condición especial:

let matriz=[];

for(let f=0;f<4;f++){
    let fila=[];
    for(let c=0;c<4;c++){
        if(f===c){
            fila.push(1);
        }else{
            fila.push(0);
        }
    }
    matriz.push(fila);
}

console.table(matriz);