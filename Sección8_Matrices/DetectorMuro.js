let nivel = [
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
];

for(let f=0;f<nivel.length;f++){
    for(let c=0;c<nivel[f].length;c++){
       if(nivel[f][c]===1){
            nivel[f][c]="MURO";
       } else if(nivel[f][c]===0){
            nivel[f][c]="SUELO";
       }
    }
}

console.table(nivel);