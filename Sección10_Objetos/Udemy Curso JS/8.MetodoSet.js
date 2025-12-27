let persona={
    nombre:"Ana",
    apellido:"Garcia",
    email:"ag90@gmail.com",
    edad:32,
    idioma:"es",
    get nombreCompleto(){
        return this.nombre+" "+this.apellido;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma=lang.toUpperCase();
    }
};

console.log(persona.idioma);
console.log(persona.lang);
console.log(persona.idioma);
persona.lang="en";
console.log(persona.lang);
console.log(persona.idioma);