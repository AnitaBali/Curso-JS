//El objeto fantasma

class Persona{
    constructor(nombre) {
        this.nombre=nombre;
        
    }
}


let usuario2=new Persona("Ana");
let usuario=null;

try{
    
    console.log(usuario.nombre);
    
} catch(error){
    console.log("Error, el usuario no existe o esta vacío");
}

