function contarOrejas(conejos){
    //Paso 1:El Freno (Caso Base)
    //Si no hay conejos, no hay orejas.
    if(conejos===0){
        return 0;
    }
    //Paso 2:Suma de orejas (Caso Recursivo)
    return 2+contarOrejas(conejos-1);
}

let numeroConejos=contarOrejas(5);
console.log(numeroConejos);