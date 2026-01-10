const listaVip = nombre => nombre==="Ana";

const verificarEntrada = (nombre, condicion) =>{
    const verificacion=condicion(nombre);
    if(verificacion){
        console.log("Bienvenido, " + nombre + ".");
    } else{
        console.log("Lo siento, " + nombre + ", no puedes pasar.");
    }
}

verificarEntrada("Ana",listaVip);
verificarEntrada("Borja",listaVip);