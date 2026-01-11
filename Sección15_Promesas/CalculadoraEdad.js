const verificarEdad = edad => {

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            if(edad<0){
                reject("Edad no válida");
            } else if(edad<18){
                reject("Eres menor de edad");
            } else{
                resolve("Puedes pasar");
            };
        },2000);
    });
};

verificarEdad(0)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))