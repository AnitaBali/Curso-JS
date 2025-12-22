let mina = [
    [0, 5, 0],
    [10, 0, 2],
    [0, 1, 0]
];

let oroTotal=0;

for(let f=0;f<mina.length;f++){
    for(let c=0;c<mina[f].length;c++){
        oroTotal+=mina[f][c];
    }
}

console.log(oroTotal);
