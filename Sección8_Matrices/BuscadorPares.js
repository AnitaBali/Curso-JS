let numeros = [
    [13, 22, 35],
    [40, 51, 62],
    [77, 84, 99]
];

let contadorPares=0;
let contadorImpares=0;

for(let f=0;f<numeros.length;f++){
    for(let c=0;c<numeros[f].length;c++){
        if(numeros[f][c]%2==0){
            contadorPares++;
        }else{
            contadorImpares++;
        }
    }
}

console.log(`Has encontrado ${contadorPares} números pares.`);
console.log(`Has encontrado ${contadorImpares} números impares.`);
