const lanzarDado = () => {

    return new Promise((resolve,reject)=>{
       
        setTimeout(()=>{

            const numAleatorio=Math.floor(Math.random()*6)+1;

            if(numAleatorio>=5){
                resolve("Ganaste con un " + numAleatorio + "!");
            } else{
                reject("Perdiste, salió un "+ numAleatorio + "!");
            }
        },1000);
    }); 
};

lanzarDado()
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))