let numeroPremiado=7;
let numeroAleatorio=0;

while(numeroAleatorio!=numeroPremiado){
    numeroAleatorio=Math.floor(Math.random()*10)+1;
    console.log(numeroAleatorio);
    if(numeroAleatorio==numeroPremiado){
        console.log("Ganaste!");
    }
}