let tablero=[];
let contadorJefes=0;

for(let f=0; f<5;f++){
    let fila=[];
    for(let c=0; c<5;c++){
        let numeroAleatorio=Math.floor(Math.random()*11);
        if(numeroAleatorio>8){
            fila.push("JEFE");
            contadorJefes++;
        }else if(numeroAleatorio>=5){
            fila.push("SOLDADO");
        }else{
            fila.push("PASTO");
        } 
    }
    tablero.push(fila);
}

console.table(tablero);
console.log(contadorJefes);