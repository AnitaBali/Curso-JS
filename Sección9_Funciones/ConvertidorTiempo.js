function convertirMinutosASegundos(minutos){
    return minutos*60;
}

function mostrarResultado(valor,unidad){
    console.log(`El resultado es ${valor} ${unidad} `);
}

let cantidadMinutos=10;
let segundosCalculados=convertirMinutosASegundos(cantidadMinutos);
mostrarResultado(segundosCalculados,"segundos");
