const nombre=prompt("¿Cuál es tu nombre?");

const comprobarInvitado= (nombre) => {

        return new Promise((resolve,reject)=>{

            if(nombre==="Ana"){
                resolve("Bienvenida " + nombre);
            }else{
                reject("No estás en la lista");
            }

        });
}

comprobarInvitado()
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));