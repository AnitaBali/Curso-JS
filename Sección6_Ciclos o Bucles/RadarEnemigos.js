let objetivoEncontrado=false;

while(!objetivoEncontrado){
    let numeroAleatorio=Math.floor(Math.random()*20)+1;
    console.log(`Escanenado... distancia: [${numeroAleatorio}]m`);
    if(numeroAleatorio<5){
        objetivoEncontrado=true;
    }
}

console.log("¡Objetivo localizado! Iniciando persecución.");