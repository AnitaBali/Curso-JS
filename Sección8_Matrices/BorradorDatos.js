let datos = [
    [10, -5, 20],
    [-2, 15, -8],
    [30, 40, -1]
];

for(let f=0;f<datos.length;f++){
    for (let c=0;c<datos[f].length;c++){
       if(datos[f][c]<0){
            datos[f][c]=0;
       }
    }
}

console.table(datos);