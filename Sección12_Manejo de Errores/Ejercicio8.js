//Simula un sistema que intenta conectarse hasta que lo consigue o se rinde.

function conectar(){
    let suerte=Math.random();

    if(suerte<0.5){
        throw new Error("Fallo de red...");
    }else{
        return true;
    }  
}

for(let i=0; i<5;i++){

    try{
        conectar();
        console.log("Éxito");
        break;

    }catch(error){
        console.log(`${error.message} --> Intento ${i} fallido. Reintentando...`);
    }

}