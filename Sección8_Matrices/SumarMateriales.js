let materiales = [
    [10, 5, 2],
    [10, 5, 2],
    [10, 5, 2]
];

// El bucle de las COLUMNAS usa el largo de la primera fila
for (let c = 0; c < materiales[0].length; c++) { 
    
    let sumaColumna = 0;

    // El bucle de las FILAS usa el largo total de la matriz
    for (let f = 0; f < materiales.length; f++) {
        sumaColumna += materiales[f][c];
    }

    console.log("Total de la columna " + c + ": " + sumaColumna);
}