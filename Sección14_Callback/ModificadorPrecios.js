const aplicarIVA= (valor) => valor*1.21;
const aplicarDescuento= (valor) => valor-10;

const procesarVenta = (precio,operacion) =>{
    const total=operacion(precio);
    console.log("El precio final es: " + total);
}

procesarVenta(100,aplicarIVA);

procesarVenta(100,aplicarDescuento);