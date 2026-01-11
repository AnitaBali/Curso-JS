const login = (user,pass) =>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            if(user==="admin" && pass==="1234"){
                resolve("Sesión iniciada");
            } else{
                reject("Credenciales incorrectas");
            }

        },3000);
    });
};

login("admin","1234")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))
