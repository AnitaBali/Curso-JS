let precios=[12,5,80,34,15,60,2,45];
let contadorBaratos=0;

for(let i=0;i<precios.length;i++){
    if(precios[i]<20){
        contadorBaratos++;
    }
}

console.log(`Hay ${contadorBaratos} productos baratos.`);