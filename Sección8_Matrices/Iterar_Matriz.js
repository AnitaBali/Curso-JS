let matriz=[[100,200,300],
            [400,500,600,700,800]
];

//Recorrer la matriz
//1. Ver el total de filas
console.log(matriz.length); 
//Ver total de columnas de cada fila
console.log(matriz[0].length);
console.log(matriz[1].length);

//2. Primer for para recorrer las filas
for(let filas=0;filas<matriz.length;filas++){
   for(let columnas=0;columnas<matriz[filas].length;columnas++){
        console.log(`Elemento [${filas}][${columnas}] = ${matriz[filas][columnas]}`)
   }
}

