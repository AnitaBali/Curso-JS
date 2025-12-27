function sumarTodoInventario(matriz){
    let sumaTotal=0;
    for(let f=0;f<matriz.length;f++){
        for(let c=0;c<matriz[f].length;c++){
            sumaTotal+=matriz[f][c];
        }
    }
    return sumaTotal;
}

let almacen=[[10,50],[20,100],[5,15]];
console.table(almacen);
console.log(sumarTodoInventario(almacen));