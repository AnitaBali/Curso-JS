function añadirIVA(precioBase){
    return precioBase*1.21;
}

function evaluarProducto(precioFinal){
    if (precioFinal>100){
        return "LUJO";
    } else{
        return "ESTÁNDAR";
    }
}

let compra=añadirIVA(90);
let tipo=evaluarProducto(compra);
console.log(tipo);