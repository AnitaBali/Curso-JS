function esPrecioCaro(precio){
    if (precio>50){
        return "CARO";
    } else{
        return "BARATO";
    }
}

compra=esPrecioCaro(50);
console.log(compra);