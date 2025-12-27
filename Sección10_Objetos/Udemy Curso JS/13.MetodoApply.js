let persona1={
    nombre:"Ana",
    apellido:"Garcia",
    nombreCompleto: function(edad,sexo){
        return this.nombre+" "+this.apellido+" "+edad+" "+sexo;
    }
}

let persona2={
    nombre:"Borja",
    apellido:"Miranda"
}


//Uso de apply para llamar a un objeto sin metodo, en call pasamos los parametros
//y en apply le añadimos el arreglo o array
console.log(persona1.nombreCompleto(35,"Mujer"));

let arreglo=[37,"Hombre"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));