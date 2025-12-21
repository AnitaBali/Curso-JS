let nivelAgua=0;
let bombaEncendida=true;

while(bombaEncendida){
    nivelAgua+=8;
    console.log(`Nivel actual: ${nivelAgua}`);
    if(nivelAgua>120){
        console.log("ALERTA: DESBORDE");
        bombaEncendida=false;
       
    }else if(nivelAgua>=100){
         bombaEncendida=false;
    }
}