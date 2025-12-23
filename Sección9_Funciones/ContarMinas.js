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

let miMapa=crearMapa(4,4);
let conteoMinas=contarMinas(miMapa);

console.table(miMapa);
console.log(conteoMinas);