function contarOfertas(lista){
    let cantidad=0;
    for(let i=0;i<lista.length;i++){
        if(lista[i]<50){
            cantidad++;
        }
    }
    return cantidad;
}

let precios=[10, 80, 20, 30, 100];
console.log(contarOfertas(precios));