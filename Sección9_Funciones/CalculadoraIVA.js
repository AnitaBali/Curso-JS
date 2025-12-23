//Crea una función que nos ayude a saber el precio final de un producto.

function calcularPrecioFinal(precioBase){
    let resultado=precioBase*1.21;
    return resultado;
}

let mochila=calcularPrecioFinal(100);
console.log(`La mochila cuesta ${mochila} euros.`);