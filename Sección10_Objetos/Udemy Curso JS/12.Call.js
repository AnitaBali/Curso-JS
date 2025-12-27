let persona1={
    nombre:"Ana",
    apellido:"Garcia",
    nombreCompleto: function(titulo,tel){
        return titulo+": "+this.nombre+" "+this.apellido+" "+tel;
    }
}

let persona2={
    nombre:"Borja",
    apellido:"Miranda"
}


//Uso de call para usar el metodo nombre completo de la persona1 en la persona 2
console.log(persona1.nombreCompleto("Programadora","1234"));

console.log(persona1.nombreCompleto.call(persona2,"Ingeniero","645322"));