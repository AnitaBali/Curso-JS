let tablero=[];
contador=0;


for(let f=0; f<4;f++){
    let fila=[];
    let tieneMina=false;
    for(let c=0; c<4;c++){
        let aleatorio=Math.floor(Math.random()*2);
        if(aleatorio===1){
            fila.push(true);
            tieneMina=true;
        }else{
            fila.push(false);
        }
    }
    
    tablero.push(fila);
    console.log(tieneMina);

    if(tieneMina){
        contador++;
    }

}

console.table(tablero);
console.log(`Hay ${contador} filas con minas.`)