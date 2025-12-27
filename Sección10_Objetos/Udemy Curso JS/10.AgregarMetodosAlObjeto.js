//Funcion constructor de objetos tipo persona
function Persona(nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.nombreCompleto=function(){
        return this.nombre+" "+this.apellido;
    }
}

let alumno1=new Persona("Ana","Garcia",35);
let alumno2= new Persona("Borja","Miranda",37);
console.log(alumno1.nombreCompleto());
console.log(alumno2.nombreCompleto());