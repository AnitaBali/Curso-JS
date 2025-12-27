function eco(texto,n){
    if(n===0){
        return "FIN";
    }
    console.log(texto);
    return eco(texto,n-1);
}

let frase=eco("HOLA",3);
console.log(frase);