let gente = [
    ["Ana", "Luis", "Pedro"],
    ["Marta", "Wally", "Jorge"],
    ["Lucía", "Oscar", "Elena"]
];

let filaWally=0;
let columnaWally=0;

for(let f=0;f<gente.length;f++){
    for(let c=0;c<gente[f].length;c++){
        if(gente[f][c]==="Wally"){
            filaWally=f;
            columnaWally=c;
        }
    }
}

console.log(`Las coordenadas de Wally son [${filaWally}][${columnaWally}]`)
