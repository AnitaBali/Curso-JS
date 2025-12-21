let estadoSemaforo="";

do{
    numeroAleatorio=Math.floor(Math.random()*3);
    console.log(numeroAleatorio);
    if(numeroAleatorio===0){
        estadoSemaforo="VERDE";
    } else if (numeroAleatorio===1){
        estadoSemaforo="AMARILLO";
    } else{
        estadoSemaforo="ROJO";
    }

    console.log(estadoSemaforo);

} while(estadoSemaforo!="ROJO");