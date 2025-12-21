let pasosTotales=0;

do{
    let pasosGenerados=Math.floor(Math.random()*401)+100;
    console.log(`Caminas ${pasosGenerados} pasos.`)
    pasosTotales+=pasosGenerados;

}while(pasosTotales<2000);

console.log(`Enhorabuena, has caminado ${pasosTotales} pasos.`)