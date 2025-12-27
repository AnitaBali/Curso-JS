//Funcion constructor de objetos tipo persona
function Persona(nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}

let alumno1=new Persona("Ana","Garcia",35);
let alumno2= new Persona("Borja","Miranda",37);

console.log(alumno1);
console.log(alumno2);

alumno2.edad=40;
console.log(alumno2);
