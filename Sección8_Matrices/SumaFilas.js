let ventas = [
    [100, 200, 300], // Ventas Lunes
    [50, 50, 50],    // Ventas Martes
    [10, 20, 30]     // Ventas Miércoles
];


for(let f=0;f<ventas.length;f++){ //Bucle que representa cada dia
    let sumaDia = 0; //Poner el marcador a 0 cuando pasamos al siguiente dia
    for(let c=0;c<ventas[f].length;c++){ //Es el escaner pasando por cada venta del dia
        sumaDia+=ventas[f][c];
    }
   console.log(sumaDia); //Termina el dia y da el total
}

