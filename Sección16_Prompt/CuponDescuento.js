const codigo=prompt("Introduce tu código de descuento: ");

const aplicarDescuento = codigo => {

    return new Promise((resolve, reject)=>{

        if(codigo==="" || codigo===null){
            reject("Debes introducir un código")
        }else{
            if(codigo==="PROMO2024"){
                resolve("Éxito! Tienes un 20% de descuento")
            }else{
                reject("El código no existe")
            }
        }
    });
};

aplicarDescuento(codigo)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));