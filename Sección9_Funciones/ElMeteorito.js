function crearMapa(filas,columnas){
    let mapa=[];
    for(let f=0;f<filas;f++){
        let fila=[];
        for(let c=0;c<columnas;c++){
            let aleatorio=Math.random().toFixed(2);
            if(aleatorio>0.70){
                fila.push("MINA");
            }else{
                fila.push("PASTO");
            }
        }
        mapa.push(fila);
    }
    return mapa;
}


function contarMinas(matriz){   
    let minasTotales=0;
    for(let f=0;f<matriz.length;f++){  
        for(let c=0;c<matriz[f].length;c++){
            if(matriz[f][c]==="MINA"){
                minasTotales++;
            }
        }
    }
    return minasTotales;
}


function caeMeteorito(matriz,filaDondeCae,columnaDondeCae){
    matriz[filaDondeCae][columnaDondeCae]="FUEGO";

    return matriz;
}

let miMapa=crearMapa(3,3);
console.table(miMapa);
let bomba=caeMeteorito(miMapa,2,1);
console.table(miMapa);