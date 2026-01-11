const edad=prompt("¿Cuál es tu edad?");

const verificarEntrada = edad => {

    return new Promise((resolve,reject)=> {
        if(edad==="" || edad===null){
            reject("Vacío");
        }else{
            edad=Number(edad);
            if(isNaN(edad)){
                reject("Esto no es un número");
            } else if(edad<18){
                reject("Menor de edad");
            } else{
                resolve("Pasa, adelante")
            }
        }
    });
};

verificarEntrada(edad)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));