//Estás programando un videojuego y necesitas generar un mapa de forma aleatoria 
//cada vez que el jugador entra en una nueva zona. El mapa será una cuadrícula 
//donde algunos lugares tienen tesoros y otros están vacíos.

let mapa=[];
let totalTesoros=0;

for(let f=0; f<4;f++){
    let fila=[]

    for(let c=0; c<4;c++){
        let aleatorio=Math.floor(Math.random()*11);
        if (aleatorio>=5){
            fila.push("TESORO");
            totalTesoros++;
        }else{
            fila.push("nada");
        }
    }
    mapa.push(fila);
}

console.table(mapa);
console.table(totalTesoros);