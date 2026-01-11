comprobarStock = cantidadPedida =>{

    return new Promise((resolve,reject)=>{

        let stockDisponible=10;

        setTimeout(()=> {

            if(cantidadPedida<=stockDisponible){
                resolve("Pedido procesado");
            } else{
                reject("No hay suficiente stock");
            }

        },2000);

    });
};

comprobarStock(1)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))