const enviarPaquete = (distancia =>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(distancia<=0){
                reject("Distancia no válida");
            }else if (distancia>0 && distancia<=1000){
                resolve("Paquete entregado con éxito tras recorrer " +distancia + " km");
            }else{
                reject("Demasiado lejos para entrega exprés")
            }

        },3000);
    });
});

const gestionDeReparto = async () => {
    try{

        const kilometros=Number(prompt("¿ A cuantos km esta el destino?"));
        const mensajeExito=await enviarPaquete(kilometros);
        console.log(mensajeExito);

    }catch (error) {
        // Si la promesa hace 'reject', saltamos directamente aquí
        console.log(error);
    } finally {
        console.log("Gracias.");
    }

};

// ¡No olvides llamarla para que empiece!
gestionDeReparto();
