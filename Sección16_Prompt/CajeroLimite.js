const cantidad=Number(prompt("¿ Cuánto dinero quieres retirar?"));

const retirarEfectivo= cantidad => {

    return new Promise((resolve,reject) => {

        if(cantidad<=0){
            reject("Valor 0/ negativo no válido");
        }else if (cantidad>0 && cantidad<=500){
            resolve("Extrayendo " + cantidad + " euros.");   
        }else{
            reject("Límite superado");
        }
    });
};

retirarEfectivo(cantidad)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));