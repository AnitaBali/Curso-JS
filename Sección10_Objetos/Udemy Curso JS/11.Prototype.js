//Funcion constructor de objetos tipo persona
function Persona(nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
     this.nombreCompleto=function(){
        return this.nombre+" "+this.apellido;
    }
}

Persona.prototype.tel="S/N";

let alumno1=new Persona("Ana","Garcia",35);
alumno1.tel=999999
let alumno2= new Persona("Borja","Miranda",37);
console.log(alumno1);
console.log(alumno2);

