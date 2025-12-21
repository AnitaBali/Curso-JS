let respuesta="";

do{
    numeroAleatorio=Math.floor(Math.random()*2);
    console.log(numeroAleatorio);
    if(numeroAleatorio===0){
        respuesta="SI";
    } else{
        respuesta="NO";
    }
    console.log(`¿Desea continuar? ${respuesta}`)
}while(respuesta==="SI");