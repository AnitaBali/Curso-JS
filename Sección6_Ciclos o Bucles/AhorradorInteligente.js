let ahorros=0;

while(ahorros<100){
    let cantidadAleatoria=Math.floor(Math.random()*10)+1;
    console.log(`Ahorras ${cantidadAleatoria} euros.`);
    ahorros+=cantidadAleatoria;
}

console.log(`Has ahorrado un total de ${ahorros} euros.`)