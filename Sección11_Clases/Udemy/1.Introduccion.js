//No puedes crear objetos antes de declarar la clase, no se aplica el concepto de HOISTING
//let persona3=new Persona("Fatima","Garcia",34);

class Persona{

    constructor(nombre,apellido,edad){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
    }
}

let persona1=new Persona("Ana","Garcia",35);
let persona2=new Persona("Borja","Miranda",37);
console.table(persona1);
console.table(persona2);
