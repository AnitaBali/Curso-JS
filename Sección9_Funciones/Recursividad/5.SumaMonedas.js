function sumarMonedas(cantidad){
    //Caso Base 0
    if(cantidad===0){
       return cantidad;
    }
    //Caso recursiva
    
    return 1+sumarMonedas(cantidad-1);
    
}

console.log(sumarMonedas(5));