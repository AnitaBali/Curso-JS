function hayAlgunaOferta(listaPrecios){
    for(let i=0;i<listaPrecios.length;i++){
        if(listaPrecios[i]<50){
            return true;
        }
    }
    return false;
}

let miLista=[10,200,35,340,67,98,32,90,100];
console.log(hayAlgunaOferta(miLista));