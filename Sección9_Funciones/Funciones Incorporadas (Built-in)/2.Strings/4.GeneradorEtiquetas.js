function crearHashtag(texto){
    let crear=""
    if(texto.startsWith("#")){
        return texto;
    }else{
        crear="#"+texto.slice(0);
        return crear;
    }
}

primero=crearHashtag("#Lobo");
segundo=crearHashtag("Lobo");

console.log(primero);
console.log(segundo);