let persona={
    nombre:"Ana",
    apellido:"Garcia",
    email:"ag90@gmail.com",
    edad:32,
    get nombreCompleto(){
        return this.nombre+" "+this.apellido;
    }
};

console.log(persona.nombreCompleto);

