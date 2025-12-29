function Estudiante(nombre){
    this.nombre=nombre;
}

Estudiante.prototype.escuela="Web Academy";

let lisa=new Estudiante("Lisa");
let bart=new Estudiante("Bart");

console.log(`${lisa.nombre} estudia en ${lisa.escuela}`);
console.log(`${bart.nombre} estudia en ${bart.escuela}`);