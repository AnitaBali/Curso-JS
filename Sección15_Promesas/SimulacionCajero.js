const sacarDinero = (cantidad) =>{
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            if(cantidad<=500){
                resolve("Tome sus " + cantidad + " euros.")
            } else{
                reject("Límite diario excedido.");
            }
            
        },2000);

    });
};

sacarDinero(450)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))
    .finally(() => console.log("Gracias por usar nuestro cajero.")) 