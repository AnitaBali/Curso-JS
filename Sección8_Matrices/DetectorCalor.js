let temperaturas = [
    [22, 25, 18],
    [30, 42, 29],
    [19, 21, 24]
];

let tempMaxima = temperaturas[0][0]; // Empezamos asumiendo que el primero es el mayor

for(let f=0;f<temperaturas.length;f++){
    for(let c=0;c<temperaturas[f].length;c++){
        console.log(`¿Es la temperatura actual ${temperaturas[f][c]} mayor que mi tempMaxima ${tempMaxima}?`);
        if(temperaturas[f][c]>tempMaxima){
            tempMaxima=temperaturas[f][c];
        }
    }
}

console.log(tempMaxima);