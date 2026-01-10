const verificarEmail = email => {
    return new Promise((resolve,reject) =>{
         setTimeout(() => {
            if(email==="admin@gmail.com"){
                resolve("Acceso concedido.");
            }else{
                reject("Usuario no encontrado.")
            }
            
        },3000);

    });
};

verificarEmail("admn@gmail.com")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))