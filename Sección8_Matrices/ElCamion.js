let camion = [
    [5, 10, 5],   // Caja 0 (Fila 0)
    [20, 20, 20], // Caja 1 (Fila 1)
    [2, 3, 5]     // Caja 2 (Fila 2)
];

let pesoTotal=0;

for(let f=0;f<camion.length;f++){
    let pesoCaja=0;
    for(let c=0;c<camion[f].length;c++){
        pesoCaja+=camion[f][c];
    }
    console.log(`La caja ${f} pesa: ${pesoCaja} kg.`);
    pesoTotal+=pesoCaja;
} 

console.log(`El peso total del camión es de ${pesoTotal} kg.`);