const cambiarLuz=(color)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(color==="verde"){
                resolve("Pasa");
            }else if(color==="rojo"){   
                reject("Detente");
            }

        },1500);

    });

};

cambiarLuz("rojo")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))