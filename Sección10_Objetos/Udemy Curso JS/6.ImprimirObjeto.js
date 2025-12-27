let persona={
    nombre:"Ana",
    apellido:"Garcia",
    email:"ag90@gmail.com",
    edad:32,
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido;
    }
};

//Forma básica concatenando
console.log(persona.nombre+", "+persona.apellido+", "+persona.edad+", "+persona.email);

//Con un bucle for in
for(nombrePropiedad in persona){
     console.log(persona[nombrePropiedad]);
}

//Con sintaxis object y values
let personaArray=Object.values(persona);
console.log(personaArray);

//Con JSON
let personaString=JSON.stringify(persona);
console.log(personaString);