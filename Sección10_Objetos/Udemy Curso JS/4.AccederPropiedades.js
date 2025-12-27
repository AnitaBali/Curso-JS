let persona={
    nombre:"Ana",
    apellido:"Garcia",
    email:"ag90@gmail.com",
    edad:32,
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido;
    }
};

//Forma habitual de acceder a una propiedad de un objeto
console.log(persona.nombre);
//Otra forma de acceder
console.log(persona["apellido"]);
//Recorrer en un ciclo for, como un foreach
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
};