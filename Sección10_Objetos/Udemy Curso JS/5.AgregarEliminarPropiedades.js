let persona={
    nombre:"Ana",
    apellido:"Garcia",
    email:"ag90@gmail.com",
    edad:32,
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido;
    }
};

//Agregar atributos o propiedades
persona.movil="4356757";
console.log(persona.movil);
console.log(persona);

//Eliminar propiedad existente
delete persona.movil;
console.log(persona);